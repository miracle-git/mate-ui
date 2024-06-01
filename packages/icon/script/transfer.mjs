import { readFileSync, readdir, writeFile } from 'node:fs'
import { optimize } from 'svgo'
import { join } from 'node:path'
import { URL, fileURLToPath } from 'node:url'
import svgoPluginConf from './svgo.mjs'

const format = (svgFile) =>
  optimize(svgFile, {
    plugins: svgoPluginConf
  })
/**
 * @param {*} svgFile
 * @returns
 */
const transferSvg = (svgFile) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(format(svgFile).data)
    } catch (e) {
      reject(e)
    }
  })
}

const getSvgFiles = (dir) => {
  return new Promise((resolve, reject) => {
    readdir(dir, 'utf-8', (err, files) => {
      if (err) {
        reject(err)
      } else {
        resolve(files)
      }
    })
  })
}

const camelCase = (str) => {
  const arr = str.split('-')
  return arr
    .map((c) => {
      const firstChar = c.split('').shift()
      return c.replace(/^([a-zA-Z])(.+)/, `${firstChar.toUpperCase()}$2`)
    })
    .join('')
}

const renderCode = (name, ctx) => {
  const className = camelCase(name)
  return `/* Automatically generated by @mate-ui 'script/transfer.mjs' */\nimport MtHtmlElement from './element'

class ${className} extends MtHtmlElement {
  constructor() {
    super(\`${ctx}\`)
  }
}

export default ${className}

function install() {
  if (window.customElements.get('${name}')) return
  window.customElements.define('${name}', ${className})
}

export { install as registerComponent }`
}

const renderCompFile = (entry, outDir) => {
  getSvgFiles(entry)
    .then((res) => {
      return res.map(async (c) => {
        const svgFileContent = readFileSync(`${entry}/${c}`, 'utf-8')
        const svg = await transferSvg(svgFileContent)
        return {
          name: c.replace('.svg', ''),
          content: svg
        }
      })
    })
    .then(async (res) => {
      let names = []
      await Promise.allSettled(res).then((arr) => {
        names = arr.map((c) => {
          const template = renderCode(`mt-icon-${c.value.name}`, c.value.content)
          writeFile(`${outDir}/components/${c.value.name}.js`, template, (err) => {
            if (err) {
              throw err
            }
          })
          return {
            name: c.value.name,
            className: camelCase(c.value.name),
            compName: `mt-icon-${c.value.name}`
          }
        })
      })
      return names
    })
    .then((res) => {
      const importStr = res.map((c) => `import ${c.className} from './components/${c.name}.js'`).join('\n')
      const compNameList = res.map((c) => ({ compName: c.compName, className: [c.className].join('') }))
      const install = `
const components = import.meta.glob('./components/*.js', { import: 'default' })

export { ${compNameList.map((c) => c.className).join(',')} }
export const registerComponent = () => {
  if (window.__MT__ICON__INSTALLED__) return
  for (const path in components) {
    const name = path.replace('./components/', '').replace('.js', '')
    const component = components[path]
    component().then(item => window.customElements.define(\`mt-icon-\${name}\`, item))
  }
  window.__MT__ICON__INSTALLED__ = true
}`
      const indexFileContent = `/* Automatically generated by @mate-ui 'script/transfer.mjs' */\n${importStr}\n${install}`
      writeFile(`${outDir}/index.js`, indexFileContent, (err) => {
        if (err) {
          throw err
        }
      })
    })
}

const __dirname = new URL('..', import.meta.url)
const root = fileURLToPath(__dirname)

const entryDir = join(root, 'src/assets')
const outputDir = join(root, 'src')

renderCompFile(entryDir, outputDir)

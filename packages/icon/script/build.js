const { spawn } = require('child_process')
const { readdirSync, readFileSync } = require('fs')
const { join } = require('path')
const { parseSync, stringify } = require('svgson')
const { transSvg } = require('./utils')
const entryDir = join(__dirname, '..', 'svg')
const outputDir = join(__dirname, '..', 'component')
const entryFileList = readdirSync(entryDir, 'utf-8')
const outputDirList = readdirSync(outputDir, 'utf-8')

const batches = entryFileList
  .filter(f => f.endsWith('.svg'))
  .map(async file => {
    const name = file.replace('.svg', '')
    const filePath = entryDir + '/' + file
    const svgFile = readFileSync(filePath)
    return {
      _name: name,
      file: await transSvg(svgFile)
    }
  })

Promise.all(batches).then(res => {
  const t = res.map(async c => {
    const parseStr = parseSync(c.file)
    const str = stringify(parseStr)
    const target = { content: str, id: c._name }
    const flag = outputDirList.includes(`mt-icon-${target.id}`)
    if (!flag) {
      await spawn(`pnpm generate mt-icon-${target.id}`, {
        cwd: join(__dirname, '..'),
        stdio: 'inherit',
        shell: process.platform === 'win32'
      })
    }
    return target
  })
})

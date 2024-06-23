const path = require('path')
const fs = require('fs')
const globby = require('globby')
const matter = require('gray-matter')
const { ESLint } = require('eslint')

;(async () => {
  const paths = await globby('src/components/*/docs/*.md')
  const components = {}

  paths.forEach(path => {
    const content = fs.readFileSync(path).toString()
    const componentName = path.split('/')[2]

    const { data } = matter(content)
    components[componentName] = { ...components[componentName], ...data }
  })
  const TEMPLATE = `/* Automatically generated by @mate-ui 'docs/scripts/generate-routes.js' */
export default [
  ${Object.keys(components).map(
    component => `{
    path: '${component}:lang(-cn)?',
    meta: ${JSON.stringify(components[component])},
    component: () => import('../../../src/components/${component}/demo/index.vue')
  }`,
  )}
]`

  const engine = new ESLint({
    fix: true,
    useEslintrc: false,
    baseConfig: require(path.join(process.cwd(), '.eslintrc.js'))
  })

  const report = await engine.lintText(TEMPLATE)
  fs.writeFileSync('docs/src/router/routes.config.js', report[0].source)
})()

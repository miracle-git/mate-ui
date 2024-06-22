import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import escapeHtml from 'escape-html'
import LRUCache from 'lru-cache'
import slash from 'slash'
import { createMarkdownRenderer } from '../markdown'
import { deeplyParseHeader } from './utils/parse'
import fetchCode from './utils/fetch'
import ts2js from './utils/ts2js'
import type { MarkdownOptions, MarkdownParsedData, MarkdownRenderer } from '../markdown'
import type { PageData, HeadConfig } from '../shared'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('vitepress:md')
const cache = new LRUCache<string, MarkdownCompileResult>({ max: 1024 })

interface MarkdownCompileResult {
  vueSrc: string
  pageData: PageData
}

export function createMarkdown2VueRenderer(
  root: string = process.cwd(),
  options: MarkdownOptions = {}
) {
  const renderer = createMarkdownRenderer(options)

  return async (src: string, file: string): Promise<MarkdownCompileResult> => {
    const relativePath = slash(path.relative(root, file))
    const cached = cache.get(src)
    if (cached) {
      debug(`[cache hit] ${relativePath}`)
      return cached
    }

    const start = Date.now()
    const { content, data: formatter } = matter(src)
    // eslint-disable-next-line prefer-const
    let { html, data } = renderer.render(content)
    // avoid env variables being replaced by vite
    html = html
      .replace(/import\.meta/g, 'import.<wbr/>meta')
      .replace(/process\.env/g, 'process.<wbr/>env')

    const pageData: PageData = {
      title: inferTitle(formatter, content),
      description: inferDescription(formatter),
      formatter,
      headers: data.headers,
      relativePath,
      content: escapeHtml(content),
      html,
      lastUpdated: Math.round(fs.statSync(file).mtimeMs)
    }
    const newContent = data.vueCode
      ? await genComponentCode(renderer, data, pageData)
      : await genDocCode(content, pageData)

    debug(`[render] ${file} in ${Date.now() - start}ms.`)
    const result = {
      vueSrc: newContent?.trim(),
      pageData
    }
    cache.set(src, result)
    return result
  }
}

async function genComponentCode(renderer: MarkdownRenderer, data: PageData, pageData: PageData) {
  const { vueCode, headers = [] } = data as MarkdownParsedData
  const cn = headers.find(h => h.title === 'zh-CN')?.content
  const us = headers.find(h => h.title === 'en-US')?.content
  let { html } = renderer.render(`\`\`\`vue
${vueCode?.trim()}
\`\`\``)
  html = html
    .replace(/import\.meta/g, 'import.<wbr/>meta')
    .replace(/process\.env/g, 'process.<wbr/>env')
  const template = fetchCode(vueCode, 'template')
  const script = fetchCode(vueCode, 'script')
  const style = fetchCode(vueCode, 'style')
  const scriptContent = fetchCode(vueCode, 'scriptContent')
  const code = (await ts2js(scriptContent))?.trim()
  const jsCode = code
    ? `<script setup>
${code}
</script>`
    : ''
  const jsSourceCode = `
${template}
${jsCode}
${style}
  `.trim()
  let { html: jsVersion } = renderer.render(`\`\`\`vue
${jsSourceCode}
\`\`\``)
  jsVersion = jsVersion
    .replace(/import\.meta/g, 'import.<wbr/>meta')
    .replace(/process\.env/g, 'process.<wbr/>env')

  const jsfiddle = escapeHtml(
    JSON.stringify({
      us,
      cn,
      docHtml: pageData.html.split('<pre class="language-vue" v-pre>')[0],
      ...pageData.formatter,
      relativePath: pageData.relativePath,
      // htmlCode: Buffer.from(html).toString('base64'),
      // jsVersionHtml: Buffer.from(jsVersion).toString('base64'),
      sourceCode: Buffer.from(vueCode).toString('base64'),
      jsSourceCode: Buffer.from(jsSourceCode).toString('base64')
    })
  )

  const newContent = `
    <template>
      <demo-box :jsfiddle="${jsfiddle}">
        ${template.replace('<template>', '<template v-slot:default>')}
        <template #htmlCode>${html}</template>
        <template #jsVersionHtml>${jsVersion}</template>
      </demo-box>
    </template>
    ${script}
    ${style}
    `
  return newContent
}

async function genDocCode(content: string, pageData: PageData) {
  return `
<template><article class="markdown">${pageData.html}</article></template>

<script>
import ColorChunk from '@/components/color-chunk'
import TokenTable from '@/components/token-table'
import ComponentTokenTable from '@/components/component-token-table'

export default {
  components: {
    ColorChunk,
    TokenTable,
    ComponentTokenTable
  },
  pageData: ${JSON.stringify(pageData)}
}
</script>
${fetchCode(content, 'style')}
`
}

const inferTitle = (formatter: any, content: string) => {
  if (formatter.home) return 'Home'
  if (formatter.title) return deeplyParseHeader(formatter.title)
  const match = content.match(/^\s*#+\s+(.*)/m)
  if (match) return deeplyParseHeader(match[1]?.trim())
  return ''
}

const inferDescription = (formatter: Record<string, any>) => {
  if (!formatter.head) return ''
  return getHeadMetaContent(formatter.head, 'description') || ''
}

const getHeadMetaContent = (head: HeadConfig[], name: string): string | undefined => {
  if (!head || !head.length) return undefined

  const meta = head.find(([tag, attrs = {}]) => {
    return tag === 'meta' && attrs.name === name && attrs.content
  })

  return meta && meta[1].content
}

import { createMarkdown2VueRenderer } from './md2vue'
import type { Plugin } from 'vite'
import type { MarkdownOptions } from '../markdown'

interface Options {
  root?: string
  markdown?: MarkdownOptions
}

export default (options: Options = {}): Plugin => {
  const { root, markdown } = options
  const renderer = createMarkdown2VueRenderer(root, markdown)
  return {
    name: 'md2vue',
    async transform(code, id) {
      if (id.endsWith('.md')) {
        // transform .md files into vueSrc so plugin-vue3 can handle it
        return { code: (await renderer(code, id)).vueSrc, map: null }
      }
    }
  }
}

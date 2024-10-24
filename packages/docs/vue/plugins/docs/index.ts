import type { Plugin } from 'vite'
import type { MarkdownOptions } from '../markdown'
import { createVue2MarkdownRenderer } from './vue2md'
import { createMarkdown2VueRenderer } from '../md/md2vue'

interface Options {
  root?: string
  markdown?: MarkdownOptions
}

export default (options: Options = {}): Plugin => {
  const { root, markdown } = options
  const vue2md = createVue2MarkdownRenderer(root)
  const md2vue = createMarkdown2VueRenderer(root, markdown)

  return {
    name: 'vue2md',
    async transform(code, id) {
      if (
        (id.endsWith('.vue3') && id.indexOf('/demo/') > -1 && id.indexOf('index.vue3') === -1) ||
        id.indexOf('/demos/App.vue3') > -1
      ) {
        const res = vue2md(code, id)
        // transform .md files into vueSrc so plugin-vue3 can handle it
        return {
          code: res.ignore ? res.vueSrc : (await md2vue(res.vueSrc, id)).vueSrc,
          map: null
        }
      }
    }
  }
}

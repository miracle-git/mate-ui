/* eslint-disable @typescript-eslint/no-var-requires */
import MarkdownIt from 'markdown-it'
import highlight from './md/plugins/highlight'
import slugify from './md/plugins/slugify'
import highlightLine from './md/plugins/highlight-lines'
import lineNumbers from './md/plugins/line-numbers'
import component from './md/plugins/component'
import container from './md/plugins/container'
import snippet from './md/plugins/snippet'
import hoist from './md/plugins/hoist'
import wrapper from './md/plugins/wrapper'
import link from './md/plugins/link'
import extract from './md/plugins/extract'
import { parseHeader } from './md/utils/parse'
import type { Header } from './shared'

const emoji = require('markdown-it-emoji')
const anchor = require('markdown-it-anchor')
const toc = require('markdown-it-table-of-contents')

export interface MarkdownOptions extends MarkdownIt.Options {
  lineNumbers?: boolean
  config?: (md: MarkdownIt) => void
  anchor?: {
    permalink?: boolean
    permalinkBefore?: boolean
    permalinkSymbol?: string
  }
  // https://github.com/Oktavilla/markdown-it-table-of-contents
  toc?: any
  externalLinks?: Record<string, string>
}

export interface MarkdownParsedData {
  hoistedTags?: string[]
  links?: string[]
  headers?: Header[]
  vueCode?: string
}

export interface MarkdownRenderer {
  __data: MarkdownParsedData
  render: (src: string, env?: any) => { html: string; data: any }
}

export const createMarkdownRenderer = (options: MarkdownOptions = {}): MarkdownRenderer => {
  const md = MarkdownIt({
    html: true,
    linkify: true,
    highlight,
    ...options,
  })

  // custom plugins
  md.use(component)
    .use(highlightLine)
    .use(wrapper)
    .use(snippet)
    .use(hoist)
    .use(container)
    .use(extract)
    .use(link, {
      target: '_blank',
      rel: 'noopener noreferrer',
      ...options.externalLinks
    })

    // 3rd party plugins
    .use(emoji)
    .use(anchor, {
      slugify,
      permalink: anchor.permalink.linkInsideHeader({
        symbol: `
          <span aria-hidden="true" class="anchor">#</span>
        `,
      }),
      permalinkBefore: true,
      permalinkSymbol: '#',
      permalinkAttrs: () => ({ 'aria-hidden': true }),
      tabIndex: false,
      ...options.anchor
    })
    .use(toc, {
      slugify,
      includeLevel: [2, 3],
      format: parseHeader,
      ...options.toc
    })

  // apply user config
  if (options.config) {
    options.config(md)
  }

  if (options.lineNumbers) {
    md.use(lineNumbers)
  }

  // wrap render so that we can return both the html and extracted data.
  const render = md.render
  const wrappedRender: MarkdownRenderer['render'] = src => {
    (md as any).__data = {}
    const html = render.call(md, src)
    return {
      html,
      data: (md as any).__data
    }
  }
  (md as any).render = wrappedRender

  return md as any
}

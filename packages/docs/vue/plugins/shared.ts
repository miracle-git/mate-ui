// types shared between server and client
export interface LocaleConfig {
  lang: string
  title?: string
  description?: string
  head?: HeadConfig[]
  label?: string
  selectText?: string
}

export interface DocsData<ThemeConfig = any> {
  base: string
  lang: string
  title: string
  description: string
  head: HeadConfig[]
  themeConfig: ThemeConfig
  locales: Record<string, LocaleConfig>
}

export type HeadConfig =
  | [string, Record<string, string>]
  | [string, Record<string, string>, string]

export interface PageData {
  relativePath: string
  title: string
  description: string
  headers: Header[]
  formatter: Record<string, any>
  lastUpdated: number
  content?: string
  html?: string
}

export interface Header {
  level: number
  title: string
  slug: string
  content: string
}

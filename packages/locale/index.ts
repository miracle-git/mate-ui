export { default as zhCN } from './lang/zh-cn'
export { default as enUS } from './lang/en-us'

export type Translator = {
  [key: string]: string | string[] | Translator
}

export type Lang = {
  name: string,
  mt: Translator
}

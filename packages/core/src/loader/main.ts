import Type from '../type/main'

/**
 * @file Loader
 * @description 加载器(脚本)
 */
export default class Loader {
  /**
   * 串行加载指定的脚本：异步逐个加载，每个加载完成后再加载下一个，全部加载完成后执行回调
   * @param scripts { String | Array<String> } 指定的脚本
   * @param callback { Function } 加载完成后的回调函数
   * @return { Array } 所有生成脚本元素对象数组
   */
  static serial(scripts: string | string[], callback: () => {}) {
    const all = Type.isArray(scripts) ? scripts : [scripts]
    const head = document.getElementsByTagName('head').item(0) || document.documentElement
    const script = []
    const last = all.length - 1
    const recursive = function (i) {
      script[i] = document.createElement('script')
      script[i].setAttribute('type', 'text/javascript')
      script[i].onload = script[i].onreadystatechange = function () {
        const ready = !(/*@cc_on!@*/ 0) || this.readyState == 'loaded' || this.readyState === 'complete'
        if (!ready) return
        this.onload = this.onreadystatechange = null
        this.parentNode.removeChild(this)
        if (i !== last) {
          recursive(i + 1)
        } else if (Type.isFunction(callback)) {
          callback()
        }
      }
      script[i].setAttribute('src', all[i])
      head.appendChild(script[i])
    }
    recursive(0)
  }
  /**
   * 并行加载指定的脚本：同步同时加载，不论上个脚本是否加载完成直接加载下一个，全部加载完成后执行回调
   * @param scripts { String | Array<String> } 指定的脚本
   * @param callback { Function } 加载完成后的回调函数
   * @return { Array } 所有生成脚本元素对象数组
   */
  static parallel(scripts: string | string[], callback: () => {}) {
    const all = Type.isArray(scripts) ? scripts : [scripts]
    const head = document.getElementsByTagName('head').item(0) || document.documentElement
    const script = []
    let loaded = 0
    for (let i = 0, len = all.length; i < len; i++) {
      script[i] = document.createElement('script')
      script[i].setAttribute('type', 'text/javascript')
      script[i].onload = script[i].onreadystatechange = function () {
        const ready = !(/*@cc_on!@*/ 0) || this.readyState == 'loaded' || this.readyState === 'complete'
        if (!ready) {
          loaded++
          this.onload = this.onreadystatechange = null
          this.parentNode.removeChild(this)
          if (loaded === len && Type.isFunction(callback)) {
            callback()
          }
        }
      }
      script[i].setAttribute('src', all[i])
      head.appendChild(script[i])
    }
  }
}

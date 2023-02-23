import { isArray, isFunction } from '@mate-ui/type'

export default {
  /**
   * 串行(异步)逐个加载指定的脚本，每个脚本加载完成加载另一个，全部加载完成后执行回调
   * @param scripts [Array|String] 指定的脚本
   * @param callback Function 成功加载完成后的回调函数
   * @return Array 所有生成脚本元素的对象数组
   */
  serialScripts(scripts: string | string[], callback: Function) {
    scripts = isArray(scripts) ? scripts : <string[]>[scripts]
    const head = document.getElementsByTagName('head').item(0) || document.documentElement
    const script: HTMLElement[] = []
    const last = scripts.length - 1
    const recursiveLoad = function(i) {
      script[i] = document.createElement('script')
      script[i].setAttribute('type', 'text/javascript')
      // @ts-ignore
      script[i].onload = script[i].onreadystatechange = function () {
        // @ts-ignore
        const ready = !/*@cc_on!@*/0 || this.readyState == 'loaded' || this.readyState == 'complete'
        if (ready) {
          // @ts-ignore
          this.onload = this.onreadystatechange = null
          // @ts-ignore
          this.parentNode.removeChild(this)
          if (i !== last) {
            recursiveLoad(i + 1)
          } else if (isFunction(callback)) {
            callback()
          }
        }
      }
      script[i].setAttribute('src', scripts[i])
      head.appendChild(script[i])
    }
    recursiveLoad(0)
  },
  /**
   * 并行(同步)同时加载指定的脚本，不管上个脚本是否加载完成，全部加载完成后执行回调
   * @param scripts [Array|String] 指定的脚本
   * @param callback Function 成功加载完成后的回调函数
   * @return Array 所有生成脚本元素的对象数组
   */
  parallelScripts(scripts: string | string[], callback: Function) {
    scripts = isArray(scripts) ? scripts : <string[]>[scripts]
    const head = document.getElementsByTagName('head').item(0) || document.documentElement
    const script: HTMLElement[] = []
    let loaded = 0
    for (let i = 0, len = scripts.length; i < len; i++) {
      script[i] = document.createElement('script')
      script[i].setAttribute('type', 'text/javascript')
      // @ts-ignore
      script[i].onload = script[i].onreadystatechange = function () {
        // @ts-ignore
        const ready = !/*@cc_on!@*/0 || this.readyState == 'loaded' || this.readyState == 'complete'
        if (ready) {
          loaded++
          // @ts-ignore
          this.onload = this.onreadystatechange = null
          // @ts-ignore
          this.parentNode.removeChild(this)
          if (loaded === len && isFunction(callback)) {
            callback()
          }
        }
      }
      script[i].setAttribute('src', scripts[i])
      head.appendChild(script[i])
    }
  }
}


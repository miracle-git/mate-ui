import Vue from 'vue'
import { isProp } from '@mate-ui/type'

export const isServer = Vue.prototype.$isServer
export const isVNode = node => node != null && typeof node === 'object' && isProp(node, 'componentOptions')
// @ts-ignore
export const ieVersion = isServer ? 0 : Number(document.documentMode)
export const on = function (ev, handler) {
  if (document.addEventListener) {
    document.addEventListener(ev, handler, false)
    // @ts-ignore
  } else if (document.attachEvent) {
    // @ts-ignore
    document.attachEvent('on' + ev, handler)
  }
}

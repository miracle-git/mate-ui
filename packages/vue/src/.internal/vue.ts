export function createDocumentHandler(el, binding, vnode, context) {
  return function (mouseup = {}, mousedown = {}) {
    // @ts-ignore
    let res = !vnode || !vnode.context || !mouseup.target || !mousedown.target
    // @ts-ignore
    res = res || el.contains(mouseup.target) || el.contains(mousedown.target) || el === mouseup.target
    // @ts-ignore
    res = res || vnode.context.popperElm && (vnode.context.popperElm.contains(mouseup.target) || vnode.context.popperElm.contains(mousedown.target))
    if (res) return
    if (binding.expression) {
      const method = el[context].methodName
      if (method && vnode.context[method]) {
        vnode.context[method]()
      }
    } else {
      el[context].callback && el[context].callback()
    }
  }
}

export function broadcast(componentName, eventName, params) {
  // @ts-ignore
  this.$children.forEach(item => {
    // @ts-ignore
    const name = this.$options.componentName
    if (name === componentName) {
      item.$emit.apply(item, [eventName].concat(params))
    } else {
      // @ts-ignore
      broadcast.apply(item, [componentName, eventName].concat([params]))
    }
  })
}

export function parseDate() {

}

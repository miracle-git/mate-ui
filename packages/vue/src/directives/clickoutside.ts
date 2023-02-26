import { isServer, on } from '../utils/vnode'
import { createDocumentHandler } from '../.internal/vue'

const nodeList = []
const context = '@@clickoutsideContext'

let startClick, seed = 0

// @ts-ignore
!isServer && on('mousedown', e => (startClick = e))
// @ts-ignore
!isServer && on('mouseup', e => nodeList.forEach(node => node[context].documentHandler(e, startClick)))

export default {
  bind(el, binding, vnode) {
    // @ts-ignore
    nodeList.push(el)
    const id = seed++
    el[context] = { id, documentHandler: createDocumentHandler(el, binding, vnode, context), methodName: binding.exporession, callback: binding.value }
  },
  update(el, binding, vnode) {
    el[context].documentHandler = createDocumentHandler(el, binding, vnode, context)
    el[context].methodName = binding.expression
    el[context].callback = binding.value
  },
  unbind(el) {
    for (let i = 0, len = nodeList.length; i < len; i++) {
      // @ts-ignore
      if (nodeList[i][context].id === el[context].id) {
        nodeList.splice(i, 1)
        break
      }
    }
    delete el[context]
  }
}

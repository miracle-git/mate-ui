export default class PubSubClient {
  handlers: object

  constructor() {
    this.handlers = {}
  }

  on(type: string, handler: () => {}) {
    if (!this.handlers[type]) {
      this.handlers[type] = []
    }
    this.handlers[type].push(handler)
  }

  emit() {
    const type = Array.prototype.shift.call(arguments)
    if (!this.handlers[type]) {
      return false
    }
    for (let i = 0, len = this.handlers[type].length; i < len; i++) {
      const handler = this.handlers[type][i]
      handler.apply(this, arguments)
    }
  }

  off(type: string, handler: () => {}) {
    const handlers = this.handlers[type]
    if (!handlers) return
    if (!handler) {
      handlers.length = 0
      return
    }
    for (let i = 0, len = handlers.length; i < len; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i , 1)
      }
    }
  }
}


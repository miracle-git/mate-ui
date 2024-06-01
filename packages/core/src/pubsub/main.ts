import PubSubClient from '../.internal/pubsub'

export default (function () {
  let instance
  return function () {
    if (!instance) {
      instance = new PubSubClient()
    }
    return instance
  }
})()()

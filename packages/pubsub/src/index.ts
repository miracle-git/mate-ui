/**
 * @file PubSub
 * @description 消息订阅发布(单例模式)
 */
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

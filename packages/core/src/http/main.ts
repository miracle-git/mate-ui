import { EMPTY_OBJECT, EMPTY_FUNC } from '../config/main'
import HttpClient from '../.internal/http'

export default (function () {
  let instance
  return function ({ config = EMPTY_OBJECT, request = EMPTY_FUNC, response = EMPTY_FUNC, reject = EMPTY_FUNC } = {}) {
    if (!instance) {
      instance = new HttpClient({ config, request, response, reject })
    }
    return instance
  }
})()()

import { CancelToken } from 'axios'
import { REQUEST_METHOD } from '../config'
import { getInstance, getRequest, getMergeRequest } from '../.internal/http'

class HttpClient {
  constructor(base, interceptor, config) {
    this.base = base
    this.config = config
    this.http = getInstance(interceptor, config)
    this.source = CancelToken.source()
    this.request = (url, method, param, config) => getRequest(this, url, method, param, config)
    this.mergeRequest = (options) => getMergeRequest(this, options)
  }
  // 通用请求客户端封装
  get = (url, param, config) => this.request(url, REQUEST_METHOD.get, param, config)
  post = (url, param, config) => this.request(url, REQUEST_METHOD.post, param, config)
  put = (url, param, config) => this.request(url, REQUEST_METHOD.put, param, config)
  patch = (url, param, config) => this.request(url, REQUEST_METHOD.patch, param, config)
  del = (url, param, config) => this.request(url, REQUEST_METHOD.del, param, config)
  all = (...options) => this.mergeRequest(options)
  cancel = (message) => this.source.cancel(message)
}

export default (function () {
  let instance
  return function ({ base = {}, interceptor = {}, config = {} } = {}) {
    if (!instance) {
      instance = new HttpClient(base, interceptor, config)
    }
    return instance
  }
})()

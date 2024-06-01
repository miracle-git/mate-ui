import axios from 'axios'
import Type from '../type/main'
import { EMPTY_OBJECT, DATA_REGEX_PATTERN, REQUEST_METHOD } from '../config/main'

// @ts-ignore
const http = Symbol('Http Client')

export default class HttpClient {
  constructor({ config, request, response, reject }) {
    const { headers = EMPTY_OBJECT, ...options } = config || EMPTY_OBJECT
    this[http] = axios.create({
      baseURL: '',
      withCredentials: true, // 携带Cookie
      timeout: 60000,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      ...(options || EMPTY_OBJECT)
    })
    this[http].interceptors.request.use(config => {
      // XSS攻击
      if (config.xss && config.data) {
        if (!Type.isEqual(config.data, '[object FormData]')) {
          const data = JSON.stringify(config.data)
          const message = data.replace(/</g, '&lt;').replace(/>/g, '&gt;')
          config.data = Type.json(message, EMPTY_OBJECT)
        }
      }
      if (Type.isFunction(request)) {
        config = request(config)
      }
      return config
      // @ts-ignore
    }, Promise.reject)
    this[http].interceptors.response.use(res => {
      if (Type.isFunction(response)) {
        response(res)
      }
      if (DATA_REGEX_PATTERN.json.test(res.headers['content-type'])) {
        return res.data
      }
      return res
    }, err => {
      if (Type.isFunction(reject)) {
        reject(err.response)
      }
      // @ts-ignore
      return Promise.reject(err)
    })
  }
  get(url, { params = EMPTY_OBJECT, xss = true, timeout = 60000} = {}) {
    return this[http]({ url, method: REQUEST_METHOD.get, params, timeout, xss })
  }
  post(url, { params = EMPTY_OBJECT, xss = true, timeout = 60000} = {}) {
    return this[http]({ url, method: REQUEST_METHOD.post, data: params, timeout, xss })
  }
}

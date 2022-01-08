import { getUrl, getInstance, handleParams } from '../.internal/http'

export default class Http {
  constructor({ base = {}, interceptor = {}, config = {} } = {}) {
    this.base = base
    this.config = config
    this.instance = getInstance(interceptor, config)
  }

  get(url, params, config) {
    url = getUrl(url, config, this.base)
    const { _params, _config } = handleParams(params, config)
    return this.instance.get(url, _params)
  }

  post(url, params, config) {

  }
}

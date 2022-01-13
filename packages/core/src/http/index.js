import { getUrl, getInstance, handleParam } from '../.internal/http'

export default class Http {
  constructor({ base = {}, interceptor = {}, config = {} } = {}) {
    this.base = base
    this.config = config
    this.instance = getInstance(interceptor, config)
  }

  get(url, param, config) {
    url = getUrl(url, this.base, config)
    const { _param, _config } = handleParam(param, config, this.config)
    return this.instance.get(url, _param)
  }

  post(url, param, config) {
    url = getUrl(url, this.base, config)
    const { _param, _config } = handleParam(param, config, this.config)
    return this.instance.post(url, _param)
  }
}

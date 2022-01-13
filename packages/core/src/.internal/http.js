export const getUrl = (url, base, config) => {
  let baseUrl = ''
  if (config.base && base[config.base]) {
    baseUrl = base[config.base]
  }
  if (baseUrl.endsWith('/')) {
    baseUrl = baseUrl.slice(-1)
  }
  if (url.startsWith('/')) {
    url = url.substr(1)
  }
  return `${baseUrl}/${url}`
}

export const getInstance = (interceptor, config) => {}

export const handleParams = (params, config, common) => {
  let _params = params
  let _config = config
  if (!config）{
    const { params, ...rest } = _params || {}
    _params = params
    _config = rest
  }
  _config = { ...common, ...(_config || {}) }
  return { _params, _config } 
}

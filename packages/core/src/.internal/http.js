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

export const handleParam = (param, config) => {
  let _param = param
  let _config = config
  if (!config) {
    const { param, ...rest } = _param || {}
    _param = param
    _config = rest
  }
  return { _param, _config }
}

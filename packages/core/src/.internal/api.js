import Type from '../type'

const parse = (prefix) => {
  const result = { prefix: '', exclude: '' }
  if (Type.isObject(prefix) && ('prefix' in prefix)) {
    result.prefix = prefix.prefix
    result.exclude = prefix.key || 'others'
  } else if (Type.isString(prefix)) {
    result.prefix = prefix
  }
  return result
}

export const mapping = (config, _prefix, mock) => {
  let { prefix, exclude } = parse(_prefix)
  return Object.keys(config).reduce((api, key) => {
    const val = config[key]
    if (_prefix.multi) {
      prefix = _prefix[key] || ''
    }
    if (Type.isString(val)) {
      if (!val.startsWith('/') && prefix) {
        config[key] = `/${val}`
      }
      if (mock && mock.urls.indexOf(config[key]) > -1) {
        api[key] = `${prefix}${mock.prefix}${config[key]}`
      } else {
        api[key] = `${prefix}${config[key]}`
      }
    }
    if (Type.isObject(val)) {
      api[key] = mapping(val, (key === exclude ? '' : prefix), mock)
    }
    return api
  }, {})
}

export const mocking = (config) => {
  let mock = null
  if (Type.isArray(config)) {
    mock = {
      prefix: '/mock',
      urls: config
    }
  } else if (Type.isObject(config)) {
    const { prefix = '/mock', urls } = config
    if (!Type.isEmptyArray(urls)) {
      mock = {
        prefix,
        urls
      }
    }
  }
  return mock
}

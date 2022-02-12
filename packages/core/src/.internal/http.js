import axios from 'axios'
import qs from 'qs'
import { promisic } from '../util'

export const getBaseUrl = (base, key) => {
  if (key && base[key]) {
    // const promise = wx ? promisic(wx.request) : new Promise()
    // baseUrl = base[config.base]
  }
}

export const getUrl = (url, base, config) => {
  let baseUrl = getBaseUrl(base, config.base)
  if (baseUrl.endsWith('/')) {
    baseUrl = baseUrl.slice(-1)
  }
  if (url.startsWith('/')) {
    url = url.substr(1)
  }
  return `${baseUrl}/${url}`
}

export const getInstance = (interceptor, config) => {
  return axios.create({

  })
}

export const handleParam = (param, config) => {
  let _param = param
  let _config = config
  if (!config) {
    const { param, ...rest } = _param || {}
    _param = param || {}
    _config = rest || {}
  }
  return { _param, _config }
}

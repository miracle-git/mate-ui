import axios from 'axios'
import qs from 'qs'
import { querystring, download } from '../util'
import { CONTENT_TYPE, DEFAULT_REQUEST_OPTIONS, EMPTY_ARRAY, REQUEST_METHOD } from '../config'
import Type from '../type'

export const isMini = () => !!wx

export const getBaseUrl = (base, key) => {
  if (Type.isString(base)) return base
  const globalBaseKey = (key ? `__MATE_${key}_BASE__` : '__MATE_BASE__').toUpperCase()
  let baseUrl = window[globalBaseKey] || wx[globalBaseKey]
  if (baseUrl) return baseUrl

  if (base) {
    if (base.url) {
      if (Type.isString(base.url)) {
        baseUrl = base.url
      } else if (key) {
        baseUrl = base.url[key]
      }
      window[globalBaseKey] = baseUrl
    } else if (base.env) {
      let prop = ''
      if (Type.isString(base.env)) {
        prop = base.env
      } else if (key) {
        prop = base.env[key]
      }
      baseUrl = process.env[`VUE_APP_${prop}`] || process.env[`REACT_APP_${prop}`]
      window[globalBaseKey] = baseUrl
    } else if (isMini()) {
      const env = wx.getAccountInfoSync().miniProgram.envVersion
      switch (env) {
        case 'release':
          baseUrl = key ? base[key].prod : base.prod
          break
        case 'trial':
          baseUrl = key ? base[key].trial : base.trial
          break
        default:
          baseUrl = key ? base[key].dev : base.dev
          break
      }
      wx[globalBaseKey] = baseUrl
    }
  }
  return baseUrl || ''
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
  const { loading, headers, timeout, retry, delay, request, response, reject } = { ...DEFAULT_REQUEST_OPTIONS, ...config }
  const instance = axios.create({
    withCredentials: true,
    crossDomain: true,
    timeout
  })
  // 默认配置
  if (retry > 0) {
    instance.defaults.retry = retry
    instance.defaults.retryDelay = delay
  }
  for (let [key, val] of Object.entries(headers)) {
    instance.defaults.headers.common[key] = val
  }
  // axios默认使用encodeURI进行编码，会造成参数中带有敏感字符，所以需要使用encodeURIComponent进行编码
  instance.defaults.paramsSerializer = params => {
    return Object.entries(params).reduce((res, [key, val]) => {
      const value = (Type.isObject(val) || Type.isArray(val)) ? JSON.stringify(val) : val
      res += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`
      return res
    }, '').slice(0, -1)
  }
  // 加载器配置
  if (!Type.isEmptyFunction(loading)) {
    instance.showLoading = loading.show
    instance.hideLoading = loading.hide
  }
  // 拦截器配置
  if (!Type.isEmptyFunction(request)) {
    instance.interceptors.request.use(request)
  }
  if (!Type.isEmptyFunction(response)) {
    instance.interceptors.response.use(response, reject)
  }
  // 处理重试逻辑
  if (retry > 0) {
    instance.interceptors.response.use(undefined, err => {
      const config = err.config
      // If config does not exist or the retry option is not set, reject
      if (!config || !config.retry) {
        return Promise.reject(err)
      }
      // Set the variable for keeping track of the retry count
      config.__retryCount = config.__retryCount || 0
      // Check if we've maxed out the total number of retries
      if (config.__retryCount >= config.retry) {
        // Reject with the error
        err.failure = true
        err.message = `已重试 ${config.retry} 次, 请求已中止。`
        return Promise.reject(err)
      }
      // Increase the retry count
      config.__retryCount += 1
      // Create new promise to handle exponential backoff
      const backoff = new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, config.retryDelay)
      })
      // Return the promise in which recalls axios to retry the request
      return backoff.then(() => {
        return instance(config)
      })
    })
  }
  return instance
}

export const getRequest = (instance, url, method, param, config) => {
  url = getUrl(url, instance.base, config)
  const { _param, _config } = handleParam(param, { ...instance.config, config })
  const { loading, origin, responseType, showLoading, hideLoading } = _config
  const options = handleOptions(instance, url, method, _param, _config)
  return new Promise((resolve, reject) => {
    loading && showLoading()
    instance.http(options).then(res => {
      if (res && res.status === 200) {
        // 处理文件下载
        if (responseType === 'blob') {
          const content = res.headers['content-disposition']
          const filename = /fileName=([\w\W]+(\.\w+));/gi.test(content.endsWith(';') ? content : content + ';') && file ? `${file}${RegExp.$2}` : RegExp.$1
          download(res.data, decodeURIComponent(filename))
          resolve({ blob: true })
        } else {
          resolve(origin ? res : res.data)
        }
      } else {
        reject(res)
      }
    }).catch(reject).finally(() => loading && hideLoading())
  })
}

export const getMergeRequest = (instance, options = EMPTY_ARRAY) => {
  const mergeOptions = handleMergeOptions(instance, options)
  if (Type.isEmptyArray(mergeOptions)) return
  const loading = options.some(item => item && item.config && item.config.loading)
  const { showLoading, hideLoading } = instance
  return new Promise((resolve, reject) => {
    loading && showLoading()
    Promise.all(mergeOptions).then(resolve).catch(reject).finally(() => loading && hideLoading())
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

export const handleOptions = (instance, url, method, param, config) => {
  const options = {}
  // 处理输入参数
  if (method === REQUEST_METHOD.get) {
    options.url = url
    options.params = param
  } else {
    if (config.query) {
      const query = querystring(url)
      if (query) {
        options.url = url.substr(0, url.indexOf('?'))
        options.params = query
      }
    }
    // 处理ContentType
    switch (config.headers['Content-Type']) {
      case CONTENT_TYPE.encoded:
        options.data = qs.stringify(param, { arrayFormat: 'brackets' })
        break
      case CONTENT_TYPE.formdata:
        const formData = new FormData()
        for (let [key, val] of Object.entries(param)) {
          formData.append(key, val)
        }
        options.data = formData
        break
      default:
        options.data = param
        break
    }
  }
  // 处理取消请求
  config.cancel && (options.cancelToken = instance.source.token)
  return options
}

export const handleMergeOptions = (instance, options) => {
  if (Type.isEmptyArray(options)) return []
  return options.reduce((r, s) => {
    if (!Type.isEmptyObject(s) && Type.isString(s.url) && Type.isObject(s.config)) {
      const { method, param, config } = s.config
      r.push(getRequest(instance, s.url, method, param, config))
      return r
    }
  }, [])
}

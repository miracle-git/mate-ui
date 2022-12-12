/**
 * @file Restful服务
 * @description 封装Restful服务&Api地址映射
 */
import { SYMMETRIC_CRYPTO_TYPE } from '@mate-ui/conf'
import { isObject } from '@mate-ui/type'
import { object, string } from '@mate-ui/util'
import crypto from '@mate-ui/crypto'
import { mocking, mapping } from '../.internal/rest'

export default {
  /**
   * @method 根据当前的地址配置生成Api对象
   * @param config 地址配置(可按照模块划分)
   * @param prefix 前缀(可为字符串或对象，默认为'/api')
   * @typedef { Object } options Api配置对象
   * @property { String } app api归属应用(一般用于区分不同项目，防止多项目相互覆盖)
   * @property { Array } mock mock接口相关配置(自动将前缀修改为'/api/mock')
   * @property { Boolean } crypto 是否在客户端加密存储(自动将存储到window.__MATE_API__或window.__MATE_XXX_API__变量中)
   */
  map(config:object, prefix:string | object = '', options?) {
    const globalApiKey = string.globalKey(options!.app, 'api')
    if (options!.crypto) {
      const cryptoType = SYMMETRIC_CRYPTO_TYPE.des
      if (window[globalApiKey]) return JSON.parse(crypto.decrypt(window[globalApiKey], cryptoType))
      object.frozen(globalApiKey, crypto.encrypt(JSON.stringify(mapping(config, prefix, mocking(options!.mock))), cryptoType))
      return JSON.parse(crypto.decrypt(window[globalApiKey], cryptoType))
    } else {
      if (window[globalApiKey]) return window[globalApiKey]
      object.frozen(globalApiKey, mapping(config, prefix, mocking(options!.mock)))
      return window[globalApiKey]
    }
  },
  /**
   * @method 将当前的Api地址的动态参数进行转化为实际的请求url
   * @param { String } url Api地址(包含动态参数，一般以[xx]形式存在，可包含多个不同占位的参数)
   * @param args 参数的配置(即需要替换成的真实对象，一般以{xx:'yy'}形式存在, 也可支持多字符串模板依次输入)
   * @example: rest.format('/api/mate-ui/service/permission/{0}/account/{1}', 'mateapi', 'miracle')
   * @example: rest.format('/api/mate-ui/service/permission/{project}/account/{user}', { project: 'mateapi', user: 'miracle' })
   */
  format(url:string, ...args) {
    let config = args
    config = isObject(config[0]) ? config[0] : config
    return Object.keys(config).reduce((r, s) => {
      return r.replace(new RegExp(`\\{${string.escape(s)}\\}`, 'g'), String(config[s]))
    }, url)
  }
}

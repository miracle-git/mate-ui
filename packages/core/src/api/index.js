/**
 * @file Api
 * @description 获取应用Api配置映射
 */
import Crypto from '../crypto'
import Type from '../type'
import { mocking, mapping } from '../.internal/api'
import { SYMMETRIC_CRYPTO_TYPE } from '../config'

export default class Api {
  /**
   * @method 根据当前的地址配置生成Api对象
   * @param config 地址配置(可按照模块划分)
   * @param prefix 前缀(可为字符串或对象，默认为'/api')
   * @param mock mock接口相关配置(自动将前缀修改为'/api/mock')
   * @param crypto 是否在客户端加密存储(自动将存储到window.__mate_api__变量中)
   */
  static map(config, prefix = '', { mock, crypto = false } = {}) {
    if (crypto) {
      const cryptoType = SYMMETRIC_CRYPTO_TYPE.DES
      if (window.__mate_api__) return JSON.parse(Crypto.decrypt(window.__mate_api__, cryptoType))
      window.__mate_api__ = Crypto.encrypt(JSON.stringify(mapping(config, prefix, mocking(mock))), cryptoType)
      return JSON.parse(Crypto.decrypt(window.__mate_api__, cryptoType))
    } else {
      if (window.__mate_api__) return window.__mate_api__
      window.__mate_api__ = mapping(config, prefix, mocking(mock))
      return window.__mate_api__
    }
  }
  /**
   * @method 将当前的Api地址的动态参数进行转化为实际的请求url
   * @param url Api地址(包含动态参数，一般以[xx]形式存在，可包含多个不同占位的参数)
   * @param config 参数的配置(即需要替换成的真实对象，一般以{xx:'yy'}形式存在)
   */
  static format(url, config) {
    if (Type.isEmptyString(String(url)) || !Type.isObject(config)) return url
    return Object.keys(config).reduce((r, s) => r = r.replace(new RegExp(`\\[${s}\\]`), config[s]), url)
  }
}

/**
 * @file Api
 * @description 获取应用Api配置映射
 */
import Storage from '../storage'
import Type from '../type'
import { mocking, mapping } from '../.internal/api'
import { SYMMETRIC_CRYPTO_TYPE, CACHE_TYPE } from '../config'

export default class Api {
  static map(config, prefix = '', mock = null) {
    let api = {}
    mock = mocking(mock)
    const _cacheKey = CACHE_TYPE.api
    const cache = Type.isString(prefix) || (Type.isObject(prefix) && prefix.cache)
    if (cache) {
      api = Storage.get(_cacheKey, { cryptoType: SYMMETRIC_CRYPTO_TYPE.DES })
      if (!api) {
        api = mapping(config, prefix, mock)
        Storage.set(_cacheKey, api, { cryptoType: SYMMETRIC_CRYPTO_TYPE.DES })
      }
    } else {
      api = mapping(config, prefix, mock)
    }
    return api
  }
}

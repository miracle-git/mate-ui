/**
 * @file Api
 * @description 获取应用Api配置映射
 */
import Crypto from '../crypto'
import { mocking, mapping } from '../.internal/api'
import { SYMMETRIC_CRYPTO_TYPE } from '../config'

export default class Api {
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
}

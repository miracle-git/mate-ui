import { ASYMMETRIC_CRYPTO_TYPE, SYMMETRIC_CRYPTO_TYPE } from '@mate-ui/conf'

const CryptoJS = require('crypto-js')

/* 采用策略模式实现 */
const _crypto_context = (() => {
  const context = {}
  // 非对称加密策略
  Object.keys(ASYMMETRIC_CRYPTO_TYPE).forEach(prop => {
    const _item = ASYMMETRIC_CRYPTO_TYPE[prop]
    if (_item.name) {
      const _crypto = CryptoJS[_item.name]
      context[_item.name] = { symmetric: false }
      if (_item.hmac) {
        context[_item.name] = { ...context[prop], encrypt: (data, key) => _crypto(data, key).toString() }
      } else if (_item.params) {
        context[_item.name] = { ...context[prop], encrypt: (data, key) => _crypto(data, key, _item.params).toString() }
      } else {
        context[_item.name] = { ...context[prop], encrypt: (data) => _crypto(data).toString() }
      }
    }
  })
  // 对称加密策略
  Object.keys(SYMMETRIC_CRYPTO_TYPE).forEach(prop => {
    const _item = SYMMETRIC_CRYPTO_TYPE[prop]
    if (_item.name) {
      context[_item.name] = { symmetric: true }
      if (_item.encoding) {
        context[_item.name] = {
          ...context[_item.name],
          encrypt: (data) => CryptoJS.enc[_item.name].stringify(CryptoJS.enc.Utf8.parse(data)).toString(),
          decrypt: (data) => CryptoJS.enc.Utf8.stringify(CryptoJS.enc[_item.name].parse(data))
        }
      } else {
        const _key = (key) => CryptoJS.enc.Utf8.parse(key)
        const _cfg = (iv) => ({
          iv: CryptoJS.enc.Utf8.parse(iv),
          mode: CryptoJS.mode.CFB,
          padding: CryptoJS.pad.Pkcs7,
          format: CryptoJS.format.Hex
        })
        const _iv = _item.iv === undefined ? true : _item.iv
        const { encrypt, decrypt } = CryptoJS[_item.name]
        if (_iv) {
          context[_item.name] = {
            ...context[_item.name],
            encrypt: (data, key, iv) => encrypt(CryptoJS.enc.Utf8.parse(data), _key(key), _cfg(iv)).toString(),
            decrypt: (data, key, iv) => decrypt(CryptoJS.lib.CipherParams.create({
              ciphertext: CryptoJS.enc.Hex.parse(data)
            }), _key(key), _cfg(iv)).toString(CryptoJS.enc.Utf8)
          }
        } else {
          context[_item.name] = {
            ...context[_item.name],
            encrypt: (data, key) => encrypt(CryptoJS.enc.Utf8.parse(data), _key(key)).toString(CryptoJS.format.Hex),
            decrypt: (data, key) => decrypt(CryptoJS.lib.CipherParams.create({
              ciphertext: CryptoJS.enc.Hex.parse(data)
            }), _key(key)).toString(CryptoJS.enc.Utf8)
          }
        }
      }
    }
  })
  return context
})()

/* 检测并返回当前加密算法 */
export const getCryptoContext = (crypto: string) => {
  const _context = _crypto_context[crypto]
  if (!_context) {
    console.error(`指定的加密算法[${crypto}]不在${ASYMMETRIC_CRYPTO_TYPE}或${SYMMETRIC_CRYPTO_TYPE}范围内！`)
    return false
  }
  return _context
}

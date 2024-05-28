import Crypto from '../crypto/main'
import { STORAGE_TYPE, SYMMETRIC_CRYPTO_TYPE, DEFAULT_STORAGE_OPTIONS } from '../config/main'

export const getStorageOptions = (storageType, cryptoType = SYMMETRIC_CRYPTO_TYPE.none) => {
  if (!cryptoType) {
    return ({
      storage: storageType === STORAGE_TYPE.local ? localStorage : sessionStorage
    })
  }
  const { cryptoKey, cryptoIv } = DEFAULT_STORAGE_OPTIONS
  const cryptoParams = { key: cryptoKey, iv: cryptoIv }
  return {
    storage: storageType === STORAGE_TYPE.local ? localStorage : sessionStorage,
    secret: [SYMMETRIC_CRYPTO_TYPE.aes, SYMMETRIC_CRYPTO_TYPE.des, SYMMETRIC_CRYPTO_TYPE.rc4].indexOf(cryptoType) > -1,
    encrypt: (data, secret = false) => secret ? Crypto.encrypt(data, cryptoType, cryptoParams) : data,
    decrypt: (data, secret = false) => secret ? Crypto.decrypt(data, cryptoType, cryptoParams) : data
  }
}

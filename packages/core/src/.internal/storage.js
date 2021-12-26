import Crypto from '../crypto'
import { STORAGE_TYPE, SYMMETRIC_CRYPTO_TYPE, DEFAULT_STORAGE_OPTIONS } from '../config'

export const getStorageOptions = (storageType, cryptoType = '') => {
  if (!cryptoType) {
    return ({
      storage: storageType === STORAGE_TYPE.LOCAL ? localStorage : sessionStorage
    })
  }
  const { cryptoKey, cryptoIv } = DEFAULT_STORAGE_OPTIONS
  const cryptoParams = { key: cryptoKey, iv: cryptoIv }
  return {
    storage: storageType === STORAGE_TYPE.LOCAL ? localStorage : sessionStorage,
    secret: [SYMMETRIC_CRYPTO_TYPE.AES, SYMMETRIC_CRYPTO_TYPE.DES, SYMMETRIC_CRYPTO_TYPE.RC4].includes(cryptoType),
    encrypt: (data, secret = false) => secret ? Crypto.encrypt(data, cryptoType, cryptoParams) : data,
    decrypt: (data, secret = false) => secret ? Crypto.decrypt(data, cryptoType, cryptoParams) : data
  }
}

import { STORAGE_TYPE, SYMMETRIC_CRYPTO_TYPE, DEFAULT_STORAGE_OPTIONS } from '@mate-ui/conf'
import { isObject, isArray } from '@mate-ui/type'
import crypto from '@mate-ui/crypto'

export const getStorageOptions = (storageType?: string, cryptoType?, cryptoKey?, cryptoIv?) => {
  if (!cryptoType) {
    return ({
      storage: storageType === STORAGE_TYPE.local ? window.localStorage : window.sessionStorage,
      secret: false,
      encrypt: data => data,
      decrypt: data => data
    })
  }
  const cryptoParams = { key: cryptoKey, iv: cryptoIv }
  return {
    storage: storageType === STORAGE_TYPE.local ? window.localStorage : window.sessionStorage,
    secret: [SYMMETRIC_CRYPTO_TYPE.aes, SYMMETRIC_CRYPTO_TYPE.des, SYMMETRIC_CRYPTO_TYPE.rc4].includes(cryptoType),
    encrypt: (data, secret = false) => secret ? crypto.encrypt(data, cryptoType, cryptoParams) : data,
    decrypt: (data, secret = false) => secret ? crypto.decrypt(data, cryptoType, cryptoParams) : data
  }
}

export type StorageOptions = {
  type?: string,
  strategy?: object,
  key?: string,
  iv?: string,
  def?: any
}

export const storage = {
  get(key: string, options?: StorageOptions) {
    const storageOptions = {
      storageType: options!.type,
      cryptoType: options!.strategy,
      cryptoKey: options!.key,
      cryptoIv: options!.iv,
      def: options!.def
    }
    const { storageType, cryptoType, cryptoKey, cryptoIv, def = undefined } = { ...DEFAULT_STORAGE_OPTIONS, ...storageOptions }
    const { storage, secret, decrypt } = getStorageOptions(storageType, cryptoType, cryptoKey, cryptoIv)
    try {
      return JSON.parse(decrypt!(storage[key] || '', secret)) || def
    } catch {
      return decrypt!(storage.getItem(key) || '', secret) || def
    }
  },
  set(key: string, val, options?: StorageOptions) {
    const storageOptions = {
      storageType: options!.type,
      cryptoType: options!.strategy,
      cryptoKey: options!.key,
      cryptoIv: options!.iv
    }
    const { storageType, cryptoType, cryptoKey, cryptoIv } = { ...DEFAULT_STORAGE_OPTIONS, ...storageOptions }
    const { storage, secret, encrypt } = getStorageOptions(storageType, cryptoType, cryptoKey, cryptoIv)
    if (isObject(val) || isArray(val)) {
      storage[key] = encrypt!(JSON.stringify(val), secret)
    } else {
      storage.setItem(key, encrypt!(val, secret))
    }
  },
  remove(key: string, storageType = STORAGE_TYPE.local) {
    const { storage } = getStorageOptions(storageType)
    storage.removeItem(key)
  },
  clear(storageType = STORAGE_TYPE.local) {
    const { storage } = getStorageOptions(storageType)
    storage.clear()
  },
  count(storageType = STORAGE_TYPE.local) {
    const { storage } = getStorageOptions(storageType)
    return storage.length
  },
  contains(key: string, storageType = STORAGE_TYPE.local) {
    const { storage } = getStorageOptions(storageType)
    return key in storage
  }
}

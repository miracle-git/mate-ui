/**
 * @constant 非对称加密算法类型
 */
export const ASYMMETRIC_CRYPTO_TYPE = {
  MD5: { name: 'MD5' },
  SHA1: { name: 'SHA1' },
  SHA3: { name: 'SHA3' },
  SHA224: { name: 'SHA224' },
  SHA256: { name: 'SHA256' },
  SHA384: { name: 'SHA384' },
  SHA512: { name: 'SHA512' },
  HMACMD5: { name: 'HmacMD5', hmac: true },
  HMACSHA1: { name: 'HmacSHA1', hmac: true },
  HMACSHA3: { name: 'HmacSHA3', hmac: true },
  HMACSHA224: { name: 'HmacSHA224', hmac: true },
  HMACSHA256: { name: 'HmacSHA256', hmac: true },
  HMACSHA384: { name: 'HmacSHA384', hmac: true },
  HMACSHA512: { name: 'HmacSHA512', hmac: true },
  PBKDF2: { name: 'PBKDF2', params: { keySize: 128 / 32, iterations: 10 } },
  EVPKDF: { name: 'EvpKDF', params: { keySize: 128 / 32, iterations: 10 } },
  RIPEMD160: { name: 'RIPEMD160', params: { keySize: 128 / 32, iterations: 10 } },
  NONE: { name: '' }
}
/**
 * @constant 对称加密算法类型
 */
export const SYMMETRIC_CRYPTO_TYPE = {
  BASE64: { name: 'Base64', encoding: true },
  AES: { name: 'AES' },
  DES: { name: 'DES' },
  RC4: { name: 'RC4', iv: false },
  RABBIT: { name: 'Rabbit' },
  RABBITLEGACY: { name: 'RabbitLegacy' },
  NONE: { name: '' }
}
/**
 * @constant 排序类型
 */
export const SORT_TYPE = {
  ASC: { name: 'asc' },
  DESC: { name: 'desc' }
}
/**
 * @constant 排序模式
 */
export const SORT_MODE = {
  INDEX: { name: 'index' },
  VALUE: { name: 'value' }
}

/**
 * @constant 正则表达式常量
 */
export const DATA_REGEX_PATTERN = {
  guid: '^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$',
  mobile: '^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$',
  tel: '^(\\d{3,4}-\\d{7,8}-\\d{1,5})|(^\\d{3,4}-\\d{7,8})$',
  email: '^[0-9a-z][_.0-9a-z-]{0,31}@([0-9a-z][0-9a-z-]{0,30}[0-9a-z]\\.){1,4}[a-z]{2,4}$',
  idcard: '^\\d{18,18}|\\d{15,15}|\\d{17,17}x|\\d{17,17}X$',
  secure: '^(.{before})(?:\\w+)(.{after})$',
  letterNumber: '^(?=.*[0-9])(?=.*[a-zA-Z]).{min,max}$',
  letterNumberChar: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{min,max}$',
  letterNumberCharCase: '^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{min,max}$',
  encode: /(["'<>]|&(?:(amp|lt|gt|#39|nbsp|quot|#\d+);)?)/g,
  decode: /&(amp|lt|gt|#39|nbsp|quot);/g,
  highlight: /[.[*?+^$|()/]|\\]|\\/g,
  trim: /^[\s\uFEFF]+|[\s\uFEFF]+$/g,
  kebab: /([^-])([A-Z])/g,
  camel: /([\\:\-\\_]+(.))/g,
  uncamel: /([a-z\d])([A-Z])/g,
  html: /<\/?.+?\/?>/g
}

/**
 * @constant 非对称加密算法类型
 */
export const ASYMMETRIC_CRYPTO_TYPE = {
  md5: { name: 'MD5' },
  sha1: { name: 'SHA1' },
  sha3: { name: 'SHA3' },
  sha224: { name: 'SHA224' },
  sha256: { name: 'SHA256' },
  sha384: { name: 'SHA384' },
  sha512: { name: 'SHA512' },
  hmacmd5: { name: 'HmacMD5', hmac: true },
  hmacsha1: { name: 'HmacSHA1', hmac: true },
  hmacsha3: { name: 'HmacSHA3', hmac: true },
  hmacsha224: { name: 'HmacSHA224', hmac: true },
  hmacsha256: { name: 'HmacSHA256', hmac: true },
  hmacsha384: { name: 'HmacSHA384', hmac: true },
  hmacsha512: { name: 'HmacSHA512', hmac: true },
  pbkdf2: { name: 'PBKDF2', params: { keySize: 128 / 32, iterations: 10 } },
  evpkdf: { name: 'EvpKDF', params: { keySize: 128 / 32, iterations: 10 } },
  ripemd160: { name: 'RIPEMD160', params: { keySize: 128 / 32, iterations: 10 } },
  none: { name: '' }
}

/**
 * @constant 对称加密算法类型
 */
export const SYMMETRIC_CRYPTO_TYPE = {
  base64: { name: 'Base64', encoding: true },
  aes: { name: 'AES' },
  des: { name: 'DES' },
  rc4: { name: 'RC4', iv: false },
  rabbit: { name: 'Rabbit' },
  rabbitlegacy: { name: 'RabbitLegacy' },
  none: { name: '' }
}

/**
 * @constant 存储类型常量
 */
export const STORAGE_TYPE = {
  local: 'local',
  session: 'session'
}

/**
 * @constant 存储配置常量
 */
export const DEFAULT_STORAGE_OPTIONS = {
  storageType: STORAGE_TYPE.local,
  cryptoType: SYMMETRIC_CRYPTO_TYPE.none,
  cryptoKey: 'mate-key',
  cryptoIv: 'mate-iv'
}

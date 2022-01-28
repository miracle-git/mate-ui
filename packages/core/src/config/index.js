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
/**
* @constant 存储类型常量
*/
export const STORAGE_TYPE = {
  LOCAL: 'local',
  SESSION: 'session'
}
/**
 * @constant 存储配置常量
 */
export const DEFAULT_STORAGE_OPTIONS = {
  storageType: STORAGE_TYPE.LOCAL,
  cryptoType: SYMMETRIC_CRYPTO_TYPE.NONE,
  cryptoKey: 'mate-key',
  cryptoIv: 'mate-iv'
}
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
 * @constant 时间格式化常量
 */
export const DATE_FORMATTER = {
  date: 'yyyy-MM-dd',
  datetime: 'yyyy-MM-dd HH:mm:ss',
  datetimeShort: 'yyyy-MM-dd HH:mm',
  time: 'HH:mm:ss',
  timeShort: 'HH:mm'
}

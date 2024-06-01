/**
 * @constant 空类型默认
 */
export const EMPTY_FUNC = function() {}
export const EMPTY_ARRAY = []
export const EMPTY_OBJECT = {}

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
  triple: { name: 'TripleDES' },
  rc4: { name: 'RC4', iv: false },
  rc4drop: { name: 'RC4Drop', iv: false, drop: 3072 / 4 },
  rabbit: { name: 'Rabbit' },
  rabbitlegacy: { name: 'RabbitLegacy' },
  none: { name: '' }
}

/**
 * @constant 浏览器引擎类型
 */
export const BROWSER_ENGINE_TYPE = {
  opera: 'Opera',
  webkit: 'Webkit',
  khtml: 'KHTML',
  gecko: 'Gecko',
  msie: 'MSIE'
}

/**
 * @constant 操作系统平台类型
 */
export const OS_PLATFORM_TYPE = {
  windows: 'Windows',
  tablet: 'Tablet',
  ios: 'iOS',
  android: 'Android',
  game: 'Game'
}

/**
 * @constant 排序类型
 */
export const SORT_TYPE = {
  asc: { name: 'asc' },
  desc: { name: 'desc' }
}

/**
 * @constant 排序模式
 */
export const SORT_MODE = {
  index: { name: 'index' },
  value: { name: 'value' }
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

/**
 * @constant 内存数据库常量
 */
export const DEFAULT_INDEXDB_OPTIONS = {
  name: 'mate-idb-client',
  version: 1,
  storeName: 'context',
  keyPath: 'uuid'
}

/**
 * @constant 浏览器类型
 */
export const DEFAULT_BROWSER_TYPE = {
  chrome: 0,
  firefox: 0,
  safari: 0,
  opera: 0,
  konq: 0,
  ie: 0,
  edge: 0,
  version: null
}

/**
 * @constant 浏览器引擎类型
 */
export const DEFAULT_ENGINE_TYPE = {
  webkit: 0,
  khtml: 0,
  gecko: 0,
  opera: 0,
  msie: 0,
  version: null
}

/**
 * @constant 操作系统平台类型
 */
export const DEFAULT_PLATFORM_TYPE = {
  // 操作系统
  windows: false,
  mac: false,
  xll: false,
  // 移动设备
  ios: false,
  android: false,
  ipod: false,
  ipad: false,
  iphone: false,
  // 游戏设备
  will: false,
  ps: false
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
  escape: /[.*+?^${}()|[\]\\]/g,
  trim: { $1: /[ ]/g, $2: /^[\s\uFEFF]+|[\s\uFEFF]+$/g },
  special: /([\\:\-\\_]+(.))/g,
  kebab: /([^-])([A-Z])/g,
  camel: /([\\:\-\\_]+(.))/g,
  uncamel: { $1: /([a-z\d])([A-Z])/g, $2: /([A-Z]+)([A-Z][a-z\d]+)/g },
  html: /<\/?.+?\/?>/g,
  json: /application\/json/gi,
  webkit: /AppleWebkit\/(\S+)/,
  khtml: /KHTML\/(\S+)/,
  konq: /Konqueror\/([^]+)/,
  gecko: /rv:([^\)]+)\) Gecko\/\d{8}/,
  msie: /MSIE ([^]+)/,
  msgecko: /rv:([\d.]+)\) like Gecko/,
  edge: /Edge?\/(\S+)/,
  chrome: /Chrome\/(\S+)/,
  firefox: /Firefox\/(\S+)/,
  windows: /Win(?:dows)?([^do]{2})\s?(\d+\.\d+)?/,
  ios: /CPU (?:iPhone )?OS (\d+_\d+)/,
  android: /Andriod (\d+\. \d+)/,
  game: /playstation/i
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

/**
 * @constant 数据分隔符常量
 */
export const DATA_SEPARATOR = {
  ampersand: '&',
  comma: ',',
  colon: ':',
  semicolon: ';',
  bar: '|',
  hyphen: '-',
  at: '@',
  dollar: '$',
  slash: '/',
  backslash: '\\',
  underline: '_',
  whitespace: ' '
}
/**
 * @constant 请求方法常量
 */
export const REQUEST_METHOD = {
  get: 'get',
  post: 'post',
  put: 'put',
  patch: 'patch',
  del: 'delete'
}

/**
 * @constant 请求数据格式
 */
export const CONTENT_TYPE = {
  encoded: 'application/x-www-form-urlencoded',
  formdata: 'multipart/form-data',
  json: 'application/json'
}

/**
 * @constant 请求默认配置
 */
export const DEFAULT_REQUEST_OPTIONS = {
  origin: false,
  retry: 0,
  delay: 1000,
  timeout: 30000,
  method: REQUEST_METHOD.get,
  headers: EMPTY_OBJECT,
  request: EMPTY_FUNC,
  response: EMPTY_FUNC,
  reject: EMPTY_FUNC,
  loading: EMPTY_FUNC,
  result: {
    code: 'code',
    success: 'success',
    data: 'data',
    message: 'message'
  }
}

/**
 * @constant 默认响应配置
 */
export const DEFAULT_RESPONSE_OPTIONS = {
  duration: 3000,
  error: {
    401: { code: 401, message: '未授权，请重新登录' },
    403: { code: 403, message: '拒绝访问' },
    404: { code: 404, message: '资源未找到' },
    500: { code: 500, message: '账户已失效，请重新登录' },
    504: { code: 504, message: '网络超时' },
    other: { message: '系统异常，请稍后再试' }
  }
}

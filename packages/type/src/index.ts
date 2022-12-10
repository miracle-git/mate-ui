import { DATA_REGEX_PATTERN } from '@mate-ui/conf'
import type from '../../.internal/type'

/**
 * @method 检测当前对象是否包含某属性
 * @param item 当前检测的对象
 * @param key 属性名
 * @returns {Boolean} 如果包含则返回true, 否则返回false
 */
export const isProp = (item: object, key: string) => type.hasOwn.call(item, key)

/**
 * @method 检测当前类型是否为true或0
 * @param item 当前检测的类型
 * @returns {Boolean} 如果当前类型是true或0，则返回true, 否则返回false
 */
export const isTrueOrZero = (item) => !!item || item === 0 || item === '0'

/**
 * @method 检测当前类型是否为null或undefined
 * @param item 当前检测的类型
 * @returns {Boolean} 如果当前类型是null或undefined，则返回true, 否则返回false
 */
export const isNullOrUndefined = (item) => item === null || item === undefined

/**
 * @method 检测当前类型是否为数字
 * @param item 当前检测的类型
 * @returns {Boolean} 如果为数字则返回true, 否则返回false
 */
export const isNumber = (item) => type.is('Number', true)(item)

/**
 * @method 检测当前类型是否为布尔值
 * @param item 当前检测的类型
 * @returns {Boolean} 如果为布尔则返回true, 否则返回false
 */
export const isBoolean = (item) => type.is('Boolean', true)(item)

/**
 * @method 检测当前类型是否为字符串
 * @param item 当前检测的类型
 * @returns {Boolean} 如果为字符串则返回true, 否则返回false
 */
export const isString = (item) => type.is('String', true)(item)

/**
 * @method 检测当前类型是否为空字符串
 * @param item 当前检测的类型
 * @returns {Boolean} 如果为空字符串则返回true, 否则返回false
 */
export const isEmptyString = (item) => type.is('String', true)(item) && item.trim().length === 0

/**
 * @method 检测当前类型是否为JSON字符串
 * @param item 当前检测的类型
 * @returns {Boolean} 如果为JSON字符串则返回true, 否则返回false
 */
export const isJsonString = (item) => {
  try {
    if (typeof JSON.parse(item) === 'object') return true
  } catch (e) {
    return false
  }
}

/**
 * @method 检测当前类型是否为函数
 * @param item 当前检测的类型
 * @returns {Boolean} 如果为函数则返回true, 否则返回false
 */
export const isFunction = (item) => type.is('Function')(item)

/**
 * @method 检测当前类型是否为空函数
 * @param item 当前检测的类型
 * @returns {Boolean} 如果为空函数则返回true, 否则返回false
 */
export const isEmptyFunction = (item) => {
  if (!item) return true
  const str = item.toString().replace(/\s/g, '')
  return isFunction(item) && (str === 'functionEMPTY_FUNC(){}' || str === 'function(){}' || str === '()=>{}')
}

/**
 * @method 检测当前类型是否为数组
 * @param item 当前检测的类型
 * @returns {Boolean} 如果为数组则返回true, 否则返回false
 */
export const isArray = (item) => Array.isArray(item) || type.is('Array')(item)

/**
 * @method 检测当前类型是否为空数组
 * @param item 当前检测的类型
 * @returns {Boolean} 如果为空数组则返回true, 否则返回false
 */
export const isEmptyArray = (item) => !item || (isArray(item) && item.length === 0)

/**
 * @method 检测当前类型是否为对象
 * @param item 当前检测的类型
 * @returns {Boolean} 如果为对象则返回true, 否则返回false
 */
export const isObject = (item) => type.is('Object')(item)

/**
 * @method 检测当前类型是否为空对象
 * @param item 当前检测的类型
 * @returns {Boolean} 如果为空数组则返回true, 否则返回false
 */
export const isEmptyObject = (item) => !item || (isObject(item) && Object.keys(item).length === 0)

/**
 * @method 检测当前类型是否为纯粹对象(非window或系统对象)
 * @param item 当前检测的类型
 * @returns {Boolean} 如果为普通对象则返回true, 否则返回false
 */
export const isPlainObject = (item) => {
  if (typeof item !== 'object' || item === null) return false
  let proto = item
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }
  return Object.getPrototypeOf(item) === proto
}

/**
 * @method 检测当前类型是否为Guid对象
 * @param item 当前检测的类型
 * @param pattern 当前检测的正则匹配表达式（默认值：DATA_REGEX_PATTERN.guid）
 * @returns {Boolean} 如果为Guid则返回true, 否则返回false
 */
export const isGuid = (item, pattern= DATA_REGEX_PATTERN.guid) => type.match(item, pattern, 'i')

/**
 * @method 检测当前类型是否为手机号码
 * @param item 当前检测的类型
 * @param pattern 当前检测的正则匹配表达式（默认值：DATA_REGEX_PATTERN.mobile）
 * @returns {Boolean} 如果为手机号码则返回true, 否则返回false
 */
export const isMobilePhone = (item, pattern = DATA_REGEX_PATTERN.mobile) => type.match(item, pattern)

/**
 * @method 检测当前类型是否为座机号码
 * @param item 当前检测的类型
 * @param pattern 当前检测的正则匹配表达式（默认值：DATA_REGEX_PATTERN.tel）
 * @returns {Boolean} 如果为座机号码则返回true, 否则返回false
 */
export const isTelPhone = (item, pattern = DATA_REGEX_PATTERN.tel) => type.match(item, pattern)

/**
 * @method 检测当前类型是否为电话号码(手机或座机)
 * @param item 当前检测的类型
 * @param {Object} {mobile,tel} 当前检测手机和座机的正则匹配表达式（默认值：DATA_REGEX_PATTERN.mobile和DATA_REGEX_PATTERN.tel）
 * @returns {Boolean} 如果为电话号码则返回true, 否则返回false
 */
export const isPhone = (item, { mobile = DATA_REGEX_PATTERN.mobile, tel = DATA_REGEX_PATTERN.tel } = {}) => isMobilePhone(item, mobile) || isTelPhone(item, tel)

/**
 * @method 检测当前类型是否为电子邮件
 * @param item 当前检测的类型
 * @param pattern 当前检测的正则匹配表达式（默认值：DATA_REGEX_PATTERN.email）
 * @returns {Boolean} 如果为电子邮件则返回true, 否则返回false
 */
export const isEmail = (item, pattern = DATA_REGEX_PATTERN.email) => type.match(item, pattern)

/**
 * @method 检测当前类型是否为身份证号(支持15位或18位)
 * @param item 当前检测的类型
 * @param pattern 当前检测的正则匹配表达式（默认值：DATA_REGEX_PATTERN.idcard）
 * @returns {Boolean} 如果为身份证号则返回true, 否则返回false
 */
export const isIdCard = (item, pattern = DATA_REGEX_PATTERN.idcard) => type.match(item, pattern)

/**
 * @method 检测密码复杂度规则(支持字母数字/字母数字特殊字符/大小写字母特殊字符)
 * @param item 当前检测的类型
 * @param options 当前检测密码复杂度的配置选项(默认值:{ pattern: DATA_REGEX_PATTERN.letterNumberChar, min: 8, max: 30 })
 * @returns {Boolean} 如果为合法密码则返回true, 否则返回false
 */
export const isValidPassword = (item, options = {}) => {
  const _default = { pattern: DATA_REGEX_PATTERN.letterNumberChar, min: 8, max: 30 }
  const _options = { ..._default, ...options }
  return type.match(item, _options.pattern.replace(`{min,max}`, `{${_options.min},${_options.max}}`))
}

/**
 * @method 检测当前日期是否合法
 * @param item 当前检测的类型
 * @returns {Boolean} 如果为合法日期则返回true, 否则返回false
 */
export const isValidDate = (item) => item instanceof Date && !isNaN(item.getTime())

/**
 * @file Type
 * @description 数据类型判断类
 */
import { is, match } from '../.internal/type'
import { DATA_REGEX_PATTERN } from '../config'

export default class Type {
  /**
   * @method 检测当前类型是否为对象
   * @param item 当前检测的类型
   * @returns {Boolean} 如果为对象则返回true, 否则返回false
   */
  static isObject(item) {
    return is('Object')(item)
  }
  /**
   * @method 检测当前类型是否为纯粹对象(非window或系统对象)
   * @param item 当前检测的类型
   * @returns {Boolean} 如果为普通对象则返回true, 否则返回false
   */
  static isPlainObject(item) {
    if (typeof item !== 'object' || item === null) return false
    let proto = item
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto)
    }
    return Object.getPrototypeOf(item) === proto
  }
  /**
   * @method 检测当前类型是否为空对象
   * @param item 当前检测的类型
   * @returns {Boolean} 如果为空数组则返回true, 否则返回false
   */
  static isEmptyObject(item) {
    return !item || (Type.isObject(item) && Object.keys(item).length === 0)
  }
  /**
   * @method 检测当前类型是否为数组
   * @param item 当前检测的类型
   * @returns {Boolean} 如果为数组则返回true, 否则返回false
   */
  static isArray(item) {
    return Array.isArray(item) || is('Array')(item)
  }
  /**
   * @method 检测当前类型是否为空数组
   * @param item 当前检测的类型
   * @returns {Boolean} 如果为空数组则返回true, 否则返回false
   */
  static isEmptyArray(item) {
    return !item || (Type.isArray(item) && item.length === 0)
  }
  /**
   * @method 检测当前类型是否为函数
   * @param item 当前检测的类型
   * @returns {Boolean} 如果为函数则返回true, 否则返回false
   */
  static isFunction(item) {
    return is('Function')(item)
  }
  /**
   * @method 检测当前类型是否为空函数
   * @param item 当前检测的类型
   * @returns {Boolean} 如果为空函数则返回true, 否则返回false
   */
  static isEmptyFunction(item) {
    if (!item) return true
    const str = item.toString().replace(/\s/g, '')
    return Type.isFunction(item) && (str === 'functionEMPTY_FUNC(){}' || str === 'function(){}' || str === '()=>{}')
  }
  /**
   * @method 检测当前类型是否为字符串
   * @param item 当前检测的类型
   * @returns {Boolean} 如果为字符串则返回true, 否则返回false
   */
  static isString(item) {
    return is('String', true)(item)
  }
  /**
   * @method 检测当前类型是否为空字符串
   * @param item 当前检测的类型
   * @returns {Boolean} 如果为空字符串则返回true, 否则返回false
   */
  static isEmptyString(item) {
    return is('String', true)(item) && item.trim().length === 0
  }
  /**
   * @method 检测当前类型是否为JSON字符串
   * @param item 当前检测的类型
   * @returns {Boolean} 如果为JSON字符串则返回true, 否则返回false
   */
  static isJsonString(item) {
    try {
      if (typeof JSON.parse(item) === 'object') return true
    } catch (e) {
      return false
    }
  }
  /**
   * @method 检测当前类型是否为数字
   * @param item 当前检测的类型
   * @returns {Boolean} 如果为数字则返回true, 否则返回false
   */
  static isNumber(item) {
    return is('Number', true)(item)
  }
  /**
   * @method 检测当前类型是否为布尔
   * @param item 当前检测的类型
   * @returns {Boolean} 如果为布尔则返回true, 否则返回false
   */
  static isBoolean(item) {
    return is('Boolean', true)(item)
  }
  /**
   * @method 检测当前类型是否为Guid对象
   * @param item 当前检测的类型
   * @param pattern 当前检测的正则匹配表达式（默认值：DATA_REGEX_PATTERN.guid）
   * @returns {Boolean} 如果为Guid则返回true, 否则返回false
   */
  static isGuid(item, pattern= DATA_REGEX_PATTERN.guid) {
    return match(item, pattern, 'i')
  }
  /**
   * @method 检测当前类型是否为手机号码
   * @param item 当前检测的类型
   * @param pattern 当前检测的正则匹配表达式（默认值：DATA_REGEX_PATTERN.mobile）
   * @returns {Boolean} 如果为手机号码则返回true, 否则返回false
   */
  static isMobilePhone(item, pattern = DATA_REGEX_PATTERN.mobile) {
    return match(item, pattern)
  }
  /**
   * @method 检测当前类型是否为座机号码
   * @param item 当前检测的类型
   * @param pattern 当前检测的正则匹配表达式（默认值：DATA_REGEX_PATTERN.tel）
   * @returns {Boolean} 如果为座机号码则返回true, 否则返回false
   */
  static isTelPhone(item, pattern = DATA_REGEX_PATTERN.tel) {
    return match(item, pattern)
  }
  /**
   * @method 检测当前类型是否为电话号码(手机或座机)
   * @param item 当前检测的类型
   * @param {Object} {mobile,tel} 当前检测手机和座机的正则匹配表达式（默认值：DATA_REGEX_PATTERN.mobile和DATA_REGEX_PATTERN.tel）
   * @returns {Boolean} 如果为电话号码则返回true, 否则返回false
   */
  static isPhone(item, { mobile = DATA_REGEX_PATTERN.mobile, tel = DATA_REGEX_PATTERN.tel } = {}) {
    return Type.isMobilePhone(item, mobile) || Type.isTelPhone(item, tel)
  }
  /**
   * @method 检测当前类型是否为电子邮件
   * @param item 当前检测的类型
   * @param pattern 当前检测的正则匹配表达式（默认值：DATA_REGEX_PATTERN.email）
   * @returns {Boolean} 如果为电子邮件则返回true, 否则返回false
   */
  static isEmail(item, pattern = DATA_REGEX_PATTERN.email) {
    return match(item, pattern)
  }
  /**
   * @method 检测当前类型是否为身份证号(支持15位或18位)
   * @param item 当前检测的类型
   * @param pattern 当前检测的正则匹配表达式（默认值：DATA_REGEX_PATTERN.idcard）
   * @returns {Boolean} 如果为身份证号则返回true, 否则返回false
   */
  static isIdCard(item, pattern = DATA_REGEX_PATTERN.idcard) {
    return match(item, pattern)
  }
  /**
   * @method 检测密码复杂度规则(支持字母数字/字母数字特殊字符/大小写字母特殊字符)
   * @param item 当前检测的类型
   * @param options 当前检测密码复杂度的配置选项(默认值:{ pattern: DATA_REGEX_PATTERN.letterNumberChar, min: 8, max: 30 })
   * @returns {Boolean} 如果为合法密码则返回true, 否则返回false
   */
  static isValidPassword(item, options = {}) {
    const _default = { pattern: DATA_REGEX_PATTERN.letterNumberChar, min: 8, max: 30 }
    const _options = { ..._default, ...options }
    return match(item, _options.pattern.replace(`{min,max}`, `{${_options.min},${_options.max}}`))
  }
  /**
   * @method 检测当前日期是否合法
   * @param item 当前检测的类型
   * @returns {Boolean} 如果为合法日期则返回true, 否则返回false
   */
  static isValidDate(item) {
    return item instanceof Date && !isNaN(item.getTime())
  }
  /**
   * @method 检测当前数据是0或true而非null,undefined
   * @param item 当前检测的类型
   * @returns {Boolean} 如果为真或0则返回true, 否则返回false
   */
  static isTrueOrZero(item) {
    return !!item || item === 0 || item === '0'
  }
  /**
   * @method 为当前数据类型提供默认值
   * @param item 当前数据类型
   * @param defs 默认值
   * @returns {Boolean} 如果当前数据类型未定义，则将返回默认值
   */
  static def(item, defs) {
    return (item === undefined || item === null) ? defs : item
  }
  /**
   * @method 将当前的JSON转化为相应的对象
   * @param item 当前的JSON
   * @param defs 默认值
   * @returns {Object|Array} 如果当前数据可以转化成功则转化，否则将返回默认值
   */
  static json(item, defs) {
    try {
      return JSON.parse(item)
    } catch (e) {
      return defs
    }
  }
}

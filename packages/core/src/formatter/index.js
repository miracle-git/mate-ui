/**
 * @file Formatter
 * @description 数据格式化(日期/数字等)
 */
import Type from '../type'
import { DATE_FORMATTER, DATA_REGEX_PATTERN } from '../config'
import { parseDate, parseNumber } from '../.internal/formatter'

export default class Formatter {
  /**
   * @method 格式化日期
   * @param {Date} date 格式化date时间戳
   * @param {String} format 格式化规则
   * @returns {String} 转化后的日期
   */
  static date(date, format= DATE_FORMATTER.date) {
    return parseDate(date, format)
  }
  /**
   * @method 格式化日期时间
   * @param {Date} date 格式化date时间戳
   * @param {String} format 格式化规则
   * @returns {String} 转化后的日期
   */
  static datetime(date, format = DATE_FORMATTER.datetime) {
    return parseDate(date, format)
  }
  /**
   * @method 格式化日期时间(去秒)
   * @param {Date} date 格式化date时间戳
   * @param {String} format 格式化规则
   * @returns {String} 转化后的日期
   */
  static shortDatetime(date, format = DATE_FORMATTER.datetimeShort) {
    return parseDate(date, format)
  }
  /**
   * @method 格式化时间
   * @param {Date} date 格式化date时间戳
   * @param {String} format 格式化规则
   * @returns {String} 转化后的日期
   */
  static time(date, format = DATE_FORMATTER.time) {
    return parseDate(date, format)
  }
  /**
   * @method 格式化时间(去秒)
   * @param {Date} date 格式化date时间戳
   * @param {String} format 格式化规则
   * @returns {String} 转化后的日期
   */
  static shortTime(date, format = DATE_FORMATTER.timeShort) {
    return parseDate(date, format)
  }
  /**
   * @method 格式化为普通数字
   * @param {Number} num 数值
   * @param {Number} precision 小数位精度(默认为2)
   * @returns {String} 格式化后的字符串
   */
  static number(num, precision = 2) {
    return parseNumber(num, { precision })
  }
  /**
   * @method 格式化为整数
   * @param {Number} num 数值
   * @returns {String} 格式化后的字符串
   */
  static integer(num) {
    return parseNumber(num, { precision: 0 })
  }
  /**
   * @method 格式化为正整数
   * @param {String} num 数值
   * @returns {String} 格式化后的字符串
   */
  static positive(num) {
    return (num + '').replace(/[^\d]/g, '') // 清除非数字和小数点的字符
      .replace(/^(0)(\d+)/g, '$1') // 验证第一个字符是否为0且不能连续输入
  }
  /**
   * @method 格式化为正小数
   * @param {String} num 数值
   * @param {Number} precision 小数位精度(默认为2)
   * @returns {String} 格式化后的字符串
   */
  static positiveNumber(num, precision = 2) {
    precision = Type.isNumber(precision) && precision >= 0 ? Formatter.integer(precision) : 2
    return (num + '').replace(/[^\d.]/g, '') // 清除非数字(小数点除外)的字符
      .replace(/(\.)(\d*)(\1*)/g, '$1$2') // 清除第二个小数点
      .replace(/^\./g, '') // 验证第一个字符是数字而不是字符
      .replace(/^(0)(\d+)/g, '$1') // 验证第一个字符是否为0且不能连续输入
      .replace(new RegExp(`(\\d+)\\.(\\d{${precision}}).*`, 'g'), '$1.$2') // 保留有效数字
  }
  /**
   * @method 格式化为价格(带千分位)
   * @param {Number} num 数值
   * @param {Number} precision 小数位精度(默认为2)
   * @returns {String} 格式化后的字符串
   */
  static price(num, precision = 2) {
    return parseNumber(num, { precision, thousandth: true })
  }
  /**
   * @method 将字符串按大写字符拆分为连字符串
   * @param {String} str 需要处理的字符串
   * @returns {String} 转化后的字符串
   */
  static kebab(str) {
    return str.replace(DATA_REGEX_PATTERN.kebab, '$1-$2').toLowerCase()
  }
  /**
   * @method 将字符串按(:,-,_)拆分为驼峰串
   * @param {String} str 需要处理的字符串
   * @returns {String} 转化后的字符串
   */
  static camel(str) {
    return Formatter.lowerFirst(str.replace(DATA_REGEX_PATTERN.camel, (_, sep, letter, offset) => offset ? letter.toUpperCase() : letter))
  }
  /**
   * @method 将驼峰字符串转化为按(:,-,_)拆分
   * @param {String} str 需要处理的字符串
   * @param {String} sep 分隔符
   * @param {String} textcase 大小写(upper, lower)
   * @returns {String} 转化后的字符串
   */
  static uncamel(str, sep = '_', textcase = '') {
    const result = str.replace(/([a-z\d])([A-Z])/g, '$1' + sep + '$2').replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + sep + '$2')
    textcase = ['upper', 'lower'].includes(textcase) ? textcase : ''
    return textcase ? result[`to${Formatter.upperFirst(textcase)}Case`]() : result
  }
  /**
   * @method 将字符串首字符大写
   * @param {String} str 需要处理的字符串
   * @returns {String} 转化后的字符串
   */
  static upperFirst(str) {
    if (!Type.isString(str)) return ''
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  /**
   * @method 将字符串首字符小写
   * @param {String} str 需要处理的字符串
   * @returns {String} 转化后的字符串
   */
  static lowerFirst(str) {
    if (!Type.isString(str)) return ''
    return str.charAt(0).toLowerCase() + str.slice(1)
  }
}

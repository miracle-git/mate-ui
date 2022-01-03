/**
 * @file Formatter
 * @description 数据格式化(日期/数字等)
 */
import { DATE_FORMATTER } from '../config'
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
   * @method 格式化为价格(带千分位)
   * @param {Number} num 数值
   * @param {Number} precision 小数位精度(默认为2)
   * @returns {String} 格式化后的字符串
   */
  static price(num, precision = 2) {
    return parseNumber(num, { precision, thousandth: true })
  }
}

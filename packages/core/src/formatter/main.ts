import Type from '../type/main'
import { NumberUtil } from '../util/main'

/**
 * @file Formatter
 * @description 格式化工具库
 */
export default class Formatter {
  /**
   * @method 按占位符格式化字符串
   * @param { String } str 需要格式化的字符串
   * @param { Array | Object } vals 多个需要替换的值
   */
  static string(str, ...vals) {
    vals = typeof vals[0] === 'object' ? vals[0] : vals
    return Object.keys(vals).reduce((r, s) => {
      return r.replace(new RegExp(`\\{${escape(s)}\\}`, 'g'), String(vals[s]))
    }, str)
  }
  /**
   * @method 将字符串格式化为日期
   * @param { String | Date } str 需要格式化的字符串或日期
   * @param { String } format 需要格式化的日期格式
   */
  static date(str: string | Date, format: string) {
    let target = str instanceof Date ? str : (str ? new Date(str) : '')
    if (!Type.isValidDate(target)) return str
    const timezone = 8 // 目标时区时间，东8区
    const gmt = (target as Date).getTimezoneOffset() // 本地时间和格林威治的时间差，单位是分钟
    const now = (target as Date).getTime() // 本地时间距 1970年1月1日午夜(GMT时间)之间的毫秒数
    target = new Date(now + gmt * 60 * 1000 + timezone * 60 * 60 * 1000)
    const o = {
      'M+': target.getMonth() + 1, // 月份
      'd+': target.getDate(), // 日
      'h+': target.getHours(), // 小时
      'm+': target.getMinutes(), // 分钟
      's+': target.getSeconds(), // 秒
      'q+': Math.floor((target.getMonth() + 3) / 3), // 季度
      'S': target.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(format)) {
      // RegExp.$1是RegExp的一个属性，指的是与正则表达式中的第一个子匹配
      format = format.replace(RegExp.$1, (target.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (let k in o) {
      if (new RegExp(`(${k})`).test(format)) {
        format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)))
      }
    }
    return format
  }
  /**
   * @method 将字符串格式化为数字
   * @param { String } str 需要格式化的字符串
   * @param { Object } options 参数选项
   * @param { Boolean } options.thousandth 是否支持千分位
   * @param { Number } options.precision 精度位数(默认保留2位)
   * @param { Boolean } options.pretty 是否抹去尾0(美化数字)
   * @param { Boolean } options.symbol 当数字为空串或非数字场景时的占位符
   * @returns 返回格式化后的数字
   */
  static number(str, { thousandth = false, precision = 2, pretty = false, symbol = '' } = {}) {
    if (isNaN(str) || Type.isUndefinedOrNull(str) || Type.isEmptyString(str, true)) return symbol || str
    str = str * 1
    let [temp, digit, integer, buffer, positive] = [0.00, 0, 0, [], true]
    const _zero = (val, len) => {
      const _temp = val.toString()
      const _buffer = []
      for (let i = 0, loop = len - _temp.length; i < loop; i++) {
        _buffer.push('0');
      }
      _buffer.push(_temp);
      return _buffer.join('')
    }
    // 取出正负号
    positive = (str >= 0)
    // 强制转换为绝对值数浮点
    temp = (isNaN(temp = parseFloat(str))) ? 0 : Math.abs(temp)
    // 所有内容用正数规则处理
    // 分离整数部分
    integer = parseInt(temp.toString())
    // 分离小数部分(四舍五入)
    digit = parseInt(((temp - integer) * Math.pow(10, precision) + 0.5).toString())

    do {
      buffer.unshift(_zero(integer % 1000, 3))
    } while ((integer = parseInt((integer / 1000).toString())))
    // 最高段区去掉前导0
    buffer[0] = parseInt(buffer[0]).toString()
    let res = ((positive) ? '' : '-') + buffer.join(',') + (precision > 0 ? ('.' + _zero(digit, precision)) : '')
    if (!thousandth) {
      res = res.replace(/\,/g, '')
    }
    return pretty ? NumberUtil.pretty(res) : res
  }
}

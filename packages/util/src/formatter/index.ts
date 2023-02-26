import { DATA_REGEX_PATTERN, DATE_FORMATTER, CURRENCY_UNIT } from '@mate-ui/conf'
import { isArray, isObject, isProp, isNullOrUndefined } from '@mate-ui/type'
import { parseDate, parseNumber } from '../../.internal/util'

/**
 * @file Formatter
 * @description 数据格式化(日期/数字等)
 */
export default {
  /**
   * @method 格式化日期
   * @param { Date | Number } data 格式化date时间戳
   * @param { String } format 格式化规则
   * @returns { String } 转化后的日期
   */
  date(data, format = DATE_FORMATTER.date) {
    return parseDate(data, format)
  },
  /**
   * @method 格式化日期时间
   * @param { Date | Number } data 格式化date时间戳
   * @param { String } format 格式化规则
   * @returns { String } 转化后的日期
   */
  datetime(data, format = DATE_FORMATTER.datetime) {
    return parseDate(data, format)
  },
  /**
   * @method 格式化日期时间(去秒)
   * @param { Date | Number } data 格式化date时间戳
   * @param { String } format 格式化规则
   * @returns { String } 转化后的日期
   */
  shortDatetime(data, format = DATE_FORMATTER.datetimeShort) {
    return parseDate(data, format)
  },
  /**
   * @method 格式化时间
   * @param { Date | Number } data 格式化date时间戳
   * @param { String } format 格式化规则
   * @returns { String } 转化后的日期
   */
  time(data, format = DATE_FORMATTER.time) {
    return parseDate(data, format)
  },
  /**
   * @method 格式化时间(去秒)
   * @param { Date | Number } data 格式化date时间戳
   * @param { String } format 格式化规则
   * @returns { String } 转化后的日期
   */
  shortTime(data, format = DATE_FORMATTER.timeShort) {
    return parseDate(data, format)
  },
  /**
   * @method 格式化为普通数字
   * @param { Number | String } data 数值
   * @typedef { Object } options 格式化对象
   * @property { Number } precision 小数位精度(默认为2)
   * @property { Boolean } thousandth 是否保留千分位
   * @property { Boolean } pretty 是否将尾部多余0去掉
   * @property { Boolean } reserve 是否将千分位转化为普通数字
   * @property { Boolean } raw 是否原样输出(不做任何处理)
   * @property { String } symbol 占位符(当为空或不合法时)
   * @returns { String } 格式化后的字符串
   */
  number(data, { precision = 2, thousandth = false, pretty = false, reserve = false, raw = false, symbol = '' } = {}) {
    return parseNumber(data, { precision, thousandth, pretty, reserve, raw, symbol })
  },
  /**
   * @method 格式化为整数
   * @param { Number | String } data 数值
   * @typedef { Object } options 格式化对象
   * @property { Boolean } thousandth 是否保留千分位
   * @property { String } symbol 占位符(当为空或不合法时)
   * @returns { String } 格式化后的字符串
   */
  integer(data, { thousandth = false, symbol = '' } = {}) {
    return parseNumber(data, { precision: 0, thousandth, pretty: false, reserve: false, raw: false, symbol })
  },
  /**
   * @method 格式化为价格(带千分位)
   * @param { Number | String } data 数值
   * @typedef { Object } options 格式化对象
   * @property { Boolean } thousandth 是否保留千分位(默认为true)
   * @property { Number } precision 小数位精度(默认为2)
   * @property { String } symbol 占位符(当为空或不合法时)
   * @property { String } unit 货币单位(默认为人民币￥)
   * @property { Boolean } prefix 是否添加前缀(当货币单位不为空时有效)
   * @returns { String } 格式化后的字符串
   */
  price(data, { thousandth = true, precision = 2, symbol = '', unit = '￥', prefix = true } = {}) {
    const res = parseNumber(data, { thousandth, precision, pretty: true, reserve: false, raw: false, symbol })
    if (!unit) return res
    return prefix ? `${unit}${res}` : `${res}${unit}`
  },
  /**
   * @method 格式化为百分比
   * @param { Number | String } data 数值
   * @typedef { Object } options 格式化对象
   * @property { Boolean } thousandth 是否保留千分位
   * @property { Number } precision 小数位精度(默认为2)
   * @property { Boolean } pretty 是否将尾部多余0去掉
   * @property { Boolean } raw 是否原样输出(不做任何处理)
   * @property { String } symbol 占位符(当为空或不合法时)
   * @property { Boolean } percent 是否需要乘以100
   * @returns { String } 格式化后的字符串
   */
  percent(data, { thousandth = true, precision = 2, pretty = false, raw = false, symbol = '', percent = false } = {}) {
    const res = percent ? data * 100 : data
    return !data && data !== 0 ? data : (raw ? res + '%' : parseNumber(data, { thousandth, precision, pretty, raw, symbol }) + '%')
  },
  /**
   * @method 格式化为货币(转化大数据)
   * @param { Number | String } data 数值
   * @typedef { Object } options 格式化对象
   * @property { CURRENCY_UNIT } unit 运算单位(k:千，m:百万，b:十亿)
   * @property { Number } precision 小数位精度(默认为2)
   * @returns { String } 格式化后的字符串
   */
  money(data, { unit = CURRENCY_UNIT.k , precision = 2 } = {}) {
    if (!data && data !== 0 && unit) {
      if (unit) {
        data = data / +unit
      }
      data = parseNumber(data, { thousandth: true, precision })
    }
    return data
  },
  /**
   * @method 格式化国际化
   * @param { String } template 国际化模板字符串
   * @returns { String } 格式化后的字符串
   */
  locale(template:string, ...args) {
    if (args.length === 1 && isObject(args[0])) {
      args = args[0]
    }
    if (!args) {
      args = <any>{}
    }
    return template.replace(DATA_REGEX_PATTERN.locale, (match, _, i, index) => {
      if (template[index - 1] === '{' && template[index + match.length] === '}') {
        return i
      }
      const res = isProp(args, i) ? args[i] : null
      if (isNullOrUndefined(res)) return ''
      return res
    })
  },
  /**
   * @method 格式化时区
   * @param { String } data 时区
   * @returns { String } 格式化后的字符串
   */
  timezone(data:string) {
    if (!data) return
    let res = -8 * 60 * 60 * 1000
    const format = (symbol, number = 1) => {
      const date = data.split(symbol)[1].split(':')
      return number * <any>date[0] * 60 * 60 * 1000 + <any>date[1] * 60 * 1000
    }
    if (data.includes('+')) {
      res = format('+', -1)
    } else if (data.includes('-')) {
      res = format('-')
    }
    return res
  },
  /**
   * @method 格式化版本号
   * @param { String } data 版本号
   * @returns { String } 格式化后的版本号
   */
  version(data:string|number) {
    return !data && data !== 0 ? data : 'v' + data
  },
  /**
   * @method 格式化数组
   * @param { String } data 数组
   * @returns { String } 格式化后的数组
   */
  array(data, sep = ',') {
    return isArray(data) ? data.join(sep) : data.replace(',', sep)
  },
  /**
   * @method 格式化徽标
   * @param { String } data 数字
   * @param { Number } max 最大值(当前数字超过max则显示max+，否则显示当前数字)
   * @returns { String } 格式化后的徽标
   */
  badge(data, max = 99) {
    return data ? (+data > max ? `${max}+` : data + '') : ''
  }
}

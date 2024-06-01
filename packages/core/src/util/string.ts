import Type from '../type/main'
import { DATA_REGEX_PATTERN } from '../config/main'

/**
 * @file StringUtil
 * @description 字符串相关工具类
 */
export default class StringUtil {
  /**
   * @method 获取全局变量的key
   * @param app 所属应用(一般用于区分不同项目，防止多项目相互覆盖)
   * @param scope 所属应用范围(如api,base等等)
   */
  static globalKey = (app = '', scope = '') => {
    return (app ? `__MATE_${app}_${scope}__` : `__MATE_${scope}__`).toUpperCase()
  }
  /**
   * @method 将当前对象转化为烤串模式(连字串全小写)
   * @param item 当前字符串
   */
  static kebab(item) {
    if (!Type.isString(item)) item = Type.string(item)
    return item.replace(DATA_REGEX_PATTERN.kebab, '$1-$2').toLowerCase()
  }
  /**
   * @method 将当前字符串转化为驼峰模式(首字符小写，后续字符大写)
   * @param item 当前字符串
   */
  static camel(item) {
    if (!Type.isString(item)) item = Type.string(item)
    return item.replace(DATA_REGEX_PATTERN.special, (_, sep, char, offset) => {
      return offset ? char.toUpperCase() : char
    })
  }
  /**
   * @method 将当前字符串转化为头脑模式(首字符大写，后续字符不变)
   * @param item 当前字符串
   */
  static capital(item) {
    if (!Type.isString(item)) item = Type.string(item)
    return item.charAt(0).toUpperCase() + item.slice(1)
  }
  /**
   * @method 将当前字符串的空格去掉(适合中英文混合)
   * @param item 当前字符串
   * @param options 配置选项
   * @param options.all 去除所有的空格(包含中间的空格)，默认只去除两头的空格
   * @param options.html 去除html字符串所有的特殊字符，即所谓的"html萃取"
   * @param options.end 去除字符串结尾中指定的字符串
   */
  static trim(item, { all = false, html = false, end = '' } = {}) {
    if (!Type.isString(item)) item = Type.string(item)
    let res
    if (html) {
      res = item.replace(DATA_REGEX_PATTERN.html, '').trim()
    } else if (end) {
      res = item.endsWith(end) ? item.slice(0, -end.length).trim() : item.trim()
    } else {
      res = item.trim()
    }
    return all ? res.replace(DATA_REGEX_PATTERN.trim.$1, '').replace(DATA_REGEX_PATTERN.trim.$2, '') : res
  }
  /**
   * @method 将字符串中的特殊字符转义
   * @param { String } item 需要格式化的字符串
   */
  static escape(item: string) {
    if (Type.isUndefinedOrNull(item) || Type.isEmptyString(item, true)) return ''
    return item.replace(DATA_REGEX_PATTERN.escape, '\\$&')
  }
  /**
   * @method 将字符串中的指定的关键字高亮显示
   * @param { String } item 需要处理的字符串
   * @param { String } keyword 需要高亮的关键字
   * @param { String } color 高亮颜色，默认为红色
   */
  static highlight(item: string, keyword: string, color = '#f81d22') {
    const res = keyword.replace(DATA_REGEX_PATTERN.highlight, '\\$&')
    const reg = new RegExp(res, 'gi')
    return item.replace(reg, text => `<span style="color:${color}">${text}</span>`)
  }
  /**
   * @method 将当前的字符串进行编码(转化<,>,""等字符)
   * @param { String } item 需要处理的字符串
   */
  static encode(item: string) {
    return item.replace(DATA_REGEX_PATTERN.encode, (a, b, c) =>
      c ? a : {
        '<': '&lt;',
        '&': '&amp;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        ' ': '&nbsp;'
      }[a]
    )
  }
  /**
   * @method 将当前的字符串进行解码(转化<,>,""等字符)
   * @param { String } item 需要处理的字符串
   */
  static decode(item: string) {
    return item.replace(DATA_REGEX_PATTERN.decode, (a) => ({
      '&lt;': '<',
      '&amp;': '&',
      '&gt;': '>',
      '&quot;': '"',
      '&#39;': "'",
      '&nbsp;': ' '
    })[a])
  }
  /**
   * @method 获取字符串(含中文)的长度
   * @param { String } item 当前字符串
   */
  static len(item: string) {
    let res = 0
    if (item.match(DATA_REGEX_PATTERN.length) === null) {
      res = item.length
    } else {
      res = item.length + item.match(DATA_REGEX_PATTERN.length).length
    }
    return res
  }
}

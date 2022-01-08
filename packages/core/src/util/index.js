import Type from '../type'
import { DATA_REGEX_PATTERN } from '../config'

/**
 * @method 获取指定对象/数组指定列对应的数组或对象
 * @param source 当前指定的数组或对象
 * @param {Array} props 指定的列(可多列)
 * @returns {Array|Object} 返回指定列对应的数组或对象
 */
export const pick = (source, ...props) => {
  const _props = Type.isArray(props) ? props[0] : props
  const _pickProps = (current, props) => props.reduce((prop, val) =>
    (val in current && (prop[val] = current[val]), prop), {})
  if (Type.isObject(source)) {
    return _pickProps(source, _props)
  }
  if (Type.isArray(source)) {
    return source.map(item => _pickProps(item, _props))
  }
  return source
}
/**
 * @method 将当前的对象进行展平显示(以.分割)
 * @param {Object} item 需要处理的对象
 */
export const flatten = (item) => {
  const result = {}
  function recurse(obj, prop) {
    if (Type.isObject(obj)) {
      let isEmpty = true
      for (const p in obj) {
        isEmpty = false
        recurse(obj[p], prop ? prop + '.' + p : p)
      }
      if (isEmpty && prop) {
        result[prop] = {}
      }
    } else if (Type.isArray(obj)) {
      const len = obj.length
      if (len > 0) {
        obj.forEach((o, i) => recurse(o, prop ? prop + '.[' + i + ']' : i))
      } else {
        result[prop] = []
      }
    } else {
      result[prop] = obj
    }
  }
  recurse(item, '')
  return result
}
/**
 * @method 获取带星号的文本(常用于手机号处理)
 * @param {String} item 当前需要处理的文本
 * @param {Object} stars 添加多少个星号
 * @param {Object} ignore 是否不处理(原文返回)
 * @param {Object} before 星号前导字符数
 * @param {Object} after 星号后导字符数
 * @returns {String} 返回处理之后的文本
 */
export const secure = (item, { stars = 4, ignore = false, before = 3, after = 4 } = {}) => {
  const len = item.length
  if (stars <= 0 || len < stars + before + after || ignore) {
    return item
  }
  let secure = ''
  for (let i = 1; i <= stars; i++) {
    secure += '*'
  }
  const pattern = DATA_REGEX_PATTERN.secure.replace('{before}', `{${before}}`).replace('{after}', `{${after}}`)
  return item.replace(new RegExp(pattern), '$1' + secure + '$2')
}
/**
 * @method 判断当前定义的属性值是否为集合中之一
 * @param {String} current 当前属性值
 * @param {Array} values 属性集合
 * @param {String} field 当前属性字段
 * @returns {Boolean} 返回是否在集合中
 */
export const oneOf = (current, values = [], field = '') => {
  const result = values.some(item => item === current)
  if (!result) {
    console.warn(`${field}必须是: [${values.join(',')}] 其中之一!`)
  }
  return result
}
/**
 * @method 判断当前定义的属性值是否在指定的范围内(包含边界值)
 * @param {Number} current 当前属性值
 * @param {String} field 当前属性字段
 * @param {Number} min 最小值(默认0)
 * @param {Number} max 最大值(默认1)
 * @returns {Boolean} 返回是否在指定的范围内
 */
export const rangeOf = (current, field = '', min = 0, max = 1) => {
  const result = current >= min && current <= max
  if (!result) {
    console.warn(`${field}必须是: [${min}, ${max}] 之间的数值!`)
  }
  return result
}
/**
 * @method 判断当前定义的属性值是否在指定的范围内(不包含边界值)
 * @param {Number} current 当前属性值
 * @param {String} field 当前属性字段
 * @param {Number} min 最小值(默认0)
 * @param {Number} max 最大值(默认1)
 * @returns {Boolean} 返回是否在指定的范围内
 */
export const betweenOf = (current, field = '', min = 0, max = 1) => {
  const result = current > min && current < max
  if (!result) {
    console.warn(`${field}必须是: [${min}, ${max}] 之间的数值!`)
  }
  return result
}
/**
 * @method 判断当前定义的属性值是否是指定的类型
 * @param {String|Array} current 当前属性值
 * @param {String} field 当前属性字段
 * @returns {Boolean} 返回是否是指定的类型
 */
export const limitOf = (current, field = '') => {
  if (Type.isString(current)) return true
  const result = Type.isArray(current) && current.every(item => Type.isString(item))
  if (!result) {
    console.warn(`${field}必须是：只包含字符串的数组！`)
  }
  return result
}
/**
 * @method 按关键字模糊搜索(忽略大小写)
 * @param {String} str 需要处理的字符串
 * @param {String} keyword 需要搜索的关键字
 */
export const indexOf = (str, keyword) => {
  return str.toLowerCase().indexOf(keyword.toLowerCase()) > -1
}
/**
 * @method 清除所有的字符串空格
 * @param {String} str 需要处理的字符串
 * @param {Boolean} all 所有的空格(包含中间)
 */
export const trim = (str, all = false) => {
  const result = str.trim()
  return all ? result.replace(/[ ]/g, '').replace(DATA_REGEX_PATTERN.trim, '') : result
}
/**
 * @method 清除结尾的字符
 * @param {String} str 需要处理的字符串
 * @param {String} end 结尾字符串
 */
export const trimEnd = (str= '', end = '.') => {
  return str.endsWith(end) ? str.slice(0, -1) : str
}
/**
 * @method 编码当前的字符串
 * @param {String} str 当前字符串
 */
export const encode = (str) => {
  return str.replace(DATA_REGEX_PATTERN.encode, (a, b, c) =>
    c ? a : {
      '<': '&lt;',
      '&': '&amp;',
      '"': '&quot;',
      '>': '&gt;',
      "'": '&#39;'
    }[a]
  )
}
/**
 * @method 解码当前的字符串
 * @param {String} str 当前字符串
 */
export const decode = (str) => {
  return str.replace(DATA_REGEX_PATTERN.decode, (a) => {
    return {
      '&lt;': '<',
      '&amp;': '&',
      '&quot;': '"',
      '&gt;': '>',
      '&#39;': "'",
      '&nbsp;': ' '
    }[a]
  })
}
/**
 * @method 高亮显示文本(常用于关键字搜索)
 * @param {String} str 需要进行高亮处理的文本
 * @param {String} keyword 高亮的关键字
 */
export const highlight = (str, keyword) => {
  const transform = keyword.replace(DATA_REGEX_PATTERN.highlight, '\\$&')
  const reg = new RegExp(transform, 'gi')
  if (str) {
    return str.replace(reg, text => `<span style="color:#f81d22;">${text}</span>`)
  }
}

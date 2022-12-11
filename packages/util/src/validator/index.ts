import { isString, isArray } from '@mate-ui/type'

export default {
  /**
   * @method 判断当前定义的属性值是否为集合中之一
   * @param {String} current 当前属性值
   * @param {Array} values 属性集合
   * @param {String} field 当前属性字段
   * @returns {Boolean} 返回是否在集合中
   */
  oneOf(current, values:string[] = [], field = '') {
    const result = values.some(item => item === current)
    if (!result) {
      console.warn(`${field}必须是: [${values.join(',')}] 其中之一!`)
    }
    return result
  },
  /**
   * @method 判断当前定义的属性值是否在指定的范围内(包含边界值)
   * @param {Number} current 当前属性值
   * @param {String} field 当前属性字段
   * @param {Number} min 最小值(默认0)
   * @param {Number} max 最大值(默认1)
   * @returns {Boolean} 返回是否在指定的范围内
   */
  rangeOf(current, field = '', min = 0, max = 1) {
    const result = current >= min && current <= max
    if (!result) {
      console.warn(`${field}必须是: [${min}, ${max}] 之间的数值!`)
    }
    return result
  },
  /**
   * @method 判断当前定义的属性值是否在指定的范围内(不包含边界值)
   * @param {Number} current 当前属性值
   * @param {String} field 当前属性字段
   * @param {Number} min 最小值(默认0)
   * @param {Number} max 最大值(默认1)
   * @returns {Boolean} 返回是否在指定的范围内
   */
  betweenOf(current, field = '', min = 0, max = 1) {
    const result = current > min && current < max
    if (!result) {
      console.warn(`${field}必须是: [${min}, ${max}] 之间的数值!`)
    }
    return result
  },
  /**
   * @method 判断当前定义的属性值是否是指定的类型
   * @param {String|Array} current 当前属性值
   * @param {String} field 当前属性字段
   * @returns {Boolean} 返回是否是指定的类型
   */
  limitOf(current, field = '') {
    if (isString(current)) return true
    const result = isArray(current) && current.every(item => isString(item))
    if (!result) {
      console.warn(`${field}必须是：只包含字符串的数组！`)
    }
    return result
  }
}

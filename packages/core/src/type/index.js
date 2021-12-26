/**
 * @file Type
 * @description 数据类型判断类
 */
import { is, isWindow, hasOwn } from '../.internal/type'

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
   * @method 检测当前类型是否为普通对象(非window或系统对象)
   * @param item 当前检测的类型
   * @returns {Boolean} 如果为普通对象则返回true, 否则返回false
   */
  static isPlainObject(item) {
    if (!item || !is('Object')(item) || isWindow(item) || item.nodeType) {
      return false
    }
    // 兼容IE
    try {
      if (item.constructor && !hasOwn.call(item, 'constructor')
        && !hasOwn.call(item.constructor.prototype, 'isPrototypeOf')) {
        return false
      }
    } catch (e) {
      return false
    }
    let key
    // for (key in item) {}
    return key === undefined || hasOwn.call(item, key)
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
   * @method 为当前数据类型提供默认值
   * @param item 当前数据类型
   * @param defs 默认值
   * @returns {Boolean} 如果当前数据类型未定义，则将返回默认值
   */
  static def(item, defs) {
    return item === undefined ? defs : item
  }
}

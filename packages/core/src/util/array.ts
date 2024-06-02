import Type from '../type/main'

/**
 * @file ArrayUtil
 * @description 数组相关工具类
 */
export default class ArrayUtil {
  /**
   * @method 判断当前定义的属性值是否为集合中之一
   * @param { String } current 当前属性值
   * @param { Array } values 属性集合
   * @returns { Boolean } 返回是否在集合中
   */
  static oneOf(current, values = []) {
    return values.some((item) => item === current)
  }
  /**
   * @method 判断当前定义的属性值是否在指定的范围内(包含边界值)
   * @param { Number } current 当前属性值
   * @param { Number } min 最小值(默认0)
   * @param { Numbe r} max 最大值(默认1)
   * @returns { Boolean } 返回是否在指定的范围内
   */
  static rangeOf(current, min = 0, max = 1) {
    return current >= min && current <= max
  }
  /**
   * @method 判断当前定义的属性值是否在指定的范围内(不包含边界值)
   * @param { Number } current 当前属性值
   * @param { Number } min 最小值(默认0)
   * @param { Numbe r} max 最大值(默认1)
   * @returns { Boolean } 返回是否在指定的范围内
   */
  static betweenOf(current, min = 0, max = 1) {
    return current > min && current < max
  }
  /**
   * @method 提取数组中指定属性的子数组
   * @param { Object } items 当前数组
   * @param { Array } props 指定的属性(可为多个)
   * @returns { Array } 返回提取指定属性对应数组
   */
  static pick(items, ...props) {
    const _props = Type.isArray(props[0]) ? props[0] : props
    const _pickProps = (current, props) =>
      props.reduce((prop, val) => (val in current && (prop[val] = current[val]), prop), {})
    return items.map((item) => _pickProps(item, _props))
  }
  /**
   * @method 获取指定对象排除指定动态列对应的对象
   * @param { Object } items 当前数组
   * @param { Array } props 指定的属性(可为多个)
   * @returns { Array } 返回排除指定属性的数组
   */
  static draw(items, ...props) {
    const _props = Type.isArray(props[0]) ? props[0] : props
    const _drawProps = (current, props) =>
      props.reduce((obj, prop) => (({ [prop]: val, ...rest } = obj) => rest)(), current)
    return items.map((item) => _drawProps(item, _props))
  }
}

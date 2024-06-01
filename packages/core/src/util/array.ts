import Type from '../type/main'

/**
 * @file ArrayUtil
 * @description 数组相关工具类
 */
export default class ArrayUtil {
  static oneOf(current, values = []) {
    return values.some((item) => item === current)
  }
  static range(current, min = 0, max = 1) {
    return current >= min && current <= max
  }
  static between(current, min = 0, max = 1) {
    return current > min && current < max
  }
  /**
   * @method 获取数组中指定属性的子数组
   * @param { Object } items 当前数组
   * @param { Array } props 指定的多个属性
   */
  static pick(items, ...props) {
    const _props = Type.isArray(props[0]) ? props[0] : props
    const _pickProps = (current, props) =>
      props.reduce((prop, val) => (val in current && (prop[val] = current[val]), prop), {})
    return items.map((item) => _pickProps(item, _props))
  }
}

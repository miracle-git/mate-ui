/**
 * @file ObjectUtil
 * @description 对象相关工具类
 */
export default class ObjectUtil {
  /**
   * @method 新增并冻结window属性(无法修改也无法删除)
   * @param { String } prop 新增属性名称
   * @param { String | Number | ... } val 属性值
   */
  static frozen = (prop = '', val) => {
    Object.defineProperty(window, prop, { value: val, writable: false, configurable: false })
  }
}

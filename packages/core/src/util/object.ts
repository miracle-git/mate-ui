import Type from '../type/main'
import { EMPTY_OBJECT, EMPTY_ARRAY } from '../config/main'

/**
 * @file ObjectUtil
 * @description 对象相关工具类
 */
export default class ObjectUtil {
  /**
   * @method 新增并冻结对象属性(无法修改也无法删除)
   * @param { String } prop 新增属性名称
   * @param { String | Number | ... } val 属性值
   */
  static frozen = (prop = '', val) => {
    Object.defineProperty(window, prop, { value: val, writable: false, configurable: false })
  }
  /**
   * @method 提取对象指定属性的子对象
   * @param { Object } item 当前对象
   * @param { Array } props 指定的属性(可为多个)
   * @returns { Object } 返回提取指定属性对应对象
   */
  static pick(item, ...props) {
    const _props = Type.isArray(props[0]) ? props[0] : props
    const _pickProps = (current, props) =>
      props.reduce((prop, val) => (val in current && (prop[val] = current[val]), prop), {})
    return _pickProps(item, _props)
  }
  /**
   * @method 获取指定对象排除指定动态列对应的对象
   * @param { Object } item 当前指定的对象
   * @param { Array } props 指定的属性(可为多个)
   * @returns { Object } 返回排除指定属性的对象
   */
  static draw(item, ...props) {
    const _props = Type.isArray(props[0]) ? props[0] : props
    const _drawProps = (current, props) =>
      props.reduce((obj, prop) => (({ [prop]: val, ...rest } = obj) => rest)(), current)
    return _drawProps(item, _props)
  }
  /**
   * @method 获取对象中深层∂次属性的值(中间层自动判空)
   * @param { String } path 属性的路径
   * @param { Object } item 当前对象
   * @param def 如果没有找到返回默认值
   */
  static value(path: string, item: object, def = undefined) {
    const keys = path.split('.')
    const res = keys.reduce((r, s) => {
      r = (r || {})[s]
      return r
    }, item)
    if (def !== undefined) {
      return Type.isTrueOrZero(res) ? res : def
    }
    return res
  }
  /**
   * @method 将当前的对象进行展平显示(以.分割)
   * @param { Object } item 需要处理的对象
   */
  static flatten(item) {
    const res = {}
    function recursive(obj, prop) {
      if (Type.isObject(obj)) {
        let empty = true
        Object.keys(obj).forEach((p) => {
          empty = false
          recursive(obj[p], prop ? `${prop}.${p}` : p)
        })
        if (empty && prop) {
          res[prop] = EMPTY_OBJECT
        }
      } else if (Type.isArray(obj)) {
        const len = obj.length
        if (len > 0) {
          obj.forEach((item, index) => recursive(item, prop ? `${prop}.${index}` : index))
        } else {
          res[prop] = EMPTY_ARRAY
        }
      } else {
        res[prop] = obj
      }
    }
    recursive(item, '')
    return res
  }
}

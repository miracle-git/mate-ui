import { isArray, isObject } from '@mate-ui/type'

export default {
  /**
   * @method 新增并冻结window属性(无法修改也无法删除)
   * @param { String } prop 新增属性名称
   * @param val 属性值
   */
  frozen(prop:string, val:any) {
    Object.defineProperty(window, prop, { value: val, writable: false, configurable: false })
  },
  /**
   * @method 将当前的对象进行展平显示(以.分割)
   * @param { Object } item 需要处理的对象
   */
  flatten(item:object) {
    const result = {}
    function recurse(obj, prop) {
      if (isObject(obj)) {
        let isEmpty = true
        for (const p in obj) {
          isEmpty = false
          recurse(obj[p], prop ? prop + '.' + p : p)
        }
        if (isEmpty && prop) {
          result[prop] = {}
        }
      } else if (isArray(obj)) {
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
  },
  /**
   * @method 获取指定对象/数组指定列对应的数组或对象
   * @param { Array | Object } source 当前指定的数组或对象
   * @param { Array } props 指定的列(可多列)
   * @returns { Array | Object } 返回指定列对应的数组或对象
   */
  pick(source: [] | object, ...props) {
    const _props = isArray(props) ? props[0] : props
    const _pickProps = (current, props) => props.reduce((prop, val) =>
      (val in current && (prop[val] = current[val]), prop), {})
    if (isObject(source)) {
      return _pickProps(source, _props)
    }
    if (isArray(source)) {
      return (<[]>source).map(item => _pickProps(item, _props))
    }
    return source
  },
  /**
   * @method 获取指定对象排除指定动态列对应的对象
   * @param { Array | Object } source 当前指定的数组或对象
   * @param { Array } props 指定的列(可多列)
   * @returns { Object } 返回排除指定列对应对象
   */
  draw(source: [] | object, ...props) {
    const _drawProps = (obj, prop) => (({ [prop]: val, ...rest } = obj) => rest)()
    return props.reduce((r, s) => _drawProps(r, s), source)
  }
}

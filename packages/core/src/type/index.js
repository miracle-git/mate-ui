export default class Type {
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

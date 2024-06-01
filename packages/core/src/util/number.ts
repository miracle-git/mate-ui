/**
 * @file NumberUtil
 * @description 数字相关工具类
 */

export default class NumberUtil {
  /**
   * @method 抹去数字末尾多余的0
   * @param { String | Number } num 需要进行抹0处理的数字
   * @returns 返回处理后的数字
   */
  static pretty(num: string | number) {
    const type = typeof num
    const value = (val) => (type === 'number' ? Number(val) : val)
    num = num + ''
    let temp = num
    let len = num.length - num.indexOf('.') - 1
    if (num.indexOf('.') === -1) return value(num)
    if (temp.lastIndexOf('0') === -1 || temp.substr(temp.length - 1, 1) !== '0') return value(temp)
    for (let i = len; i > 0; i--) {
      let index = temp.lastIndexOf('0')
      if (temp.charAt(index - 1) === '.') {
        return value(temp.substring(0, index - 1))
      } else {
        temp = temp.substring(0, index)
      }
    }
  }
}

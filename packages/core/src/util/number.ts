import Type from '../type/main'

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
  /**
   * @method 将字符串格式化为数字
   * @param { String } str 需要格式化的字符串
   * @param { Object } options 参数选项
   * @param { Boolean } options.thousandth 是否支持千分位
   * @param { Number } options.precision 精度位数(默认保留2位)
   * @param { Boolean } options.pretty 是否抹去尾0(美化数字)
   * @param { Boolean } options.symbol 当数字为空串或非数字场景时的占位符
   * @returns 返回格式化后的数字
   */
  static format(str, { thousandth = false, precision = 2, pretty = false, symbol = '' } = {}) {
    if (isNaN(str) || Type.isUndefinedOrNull(str) || Type.isEmptyString(str, true)) return symbol || str
    str = str * 1
    let [temp, digit, integer, buffer, positive] = [0.0, 0, 0, [], true]
    const _zero = (val, len) => {
      const _temp = val.toString()
      const _buffer = []
      for (let i = 0, loop = len - _temp.length; i < loop; i++) {
        _buffer.push('0')
      }
      _buffer.push(_temp)
      return _buffer.join('')
    }
    // 取出正负号
    positive = str >= 0
    // 强制转换为绝对值数浮点
    temp = isNaN((temp = parseFloat(str))) ? 0 : Math.abs(temp)
    // 所有内容用正数规则处理
    // 分离整数部分
    integer = parseInt(temp.toString())
    // 分离小数部分(四舍五入)
    digit = parseInt(((temp - integer) * Math.pow(10, precision) + 0.5).toString())

    do {
      buffer.unshift(_zero(integer % 1000, 3))
    } while ((integer = parseInt((integer / 1000).toString())))
    // 最高段区去掉前导0
    buffer[0] = parseInt(buffer[0]).toString()
    let res = (positive ? '' : '-') + buffer.join(',') + (precision > 0 ? '.' + _zero(digit, precision) : '')
    if (!thousandth) {
      res = res.replace(/\,/g, '')
    }
    return pretty ? this.pretty(res) : res
  }
}

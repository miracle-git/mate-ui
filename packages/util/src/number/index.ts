import { isNumber } from '@mate-ui/type'
import formatter from '../formatter'
import { prettyNumber } from '../../.internal/util'

export default {
  /**
   * @method 转化为整数
   * @param { Number | String } data 数值
   * @param { Boolean } minus 是否转化为负数
   * @returns { String } 格式化后的字符串
   */
  toInteger(data: number | string, minus: boolean = false) {
    const res = (data + '').replace(/[^\d]/g, '') // 清除非数字的字符
      .replace(/^(0)(\d+)/g, '$1') // 验证第一个字符是否为0且不能连续输入
    return minus ? '-' + res : res
  },
  /**
   * @method 转化为小数
   * @param { Number | String } data 数值
   * @param { Number } precision 小数位精度(默认为2)
   * @param { Boolean } minus 是否转化为负数
   * @returns { String } 格式化后的字符串
   */
  toDecimal(data: number | string, precision: number = 2, minus: boolean = false) {
    precision = isNumber(precision) && precision >= 0 ? formatter.integer(precision) : 2
    const res = (Math.abs(<any>data) + '').replace(/[^\d.]/g, '') // 清除非数字(小数点除外)的字符
      .replace(/(\.)(\d*)(\1*)/g, '$1$2') // 清除第二个小数点
      .replace(/^\./g, '') // 验证第一个字符是数字而不是字符
      .replace(/^(0)(\d+)/g, '$1') // 验证第一个字符是否为0且不能连续输入
      .replace(new RegExp(`(\\d+)\\.(\\d{${precision}}).*`, 'g'), '$1.$2') // 保留有效数字
    return minus ? '-' + res : res
  },
  /**
   * @method 清除结尾多余的0
   * @param { Number | String } data 数值
   * @returns { Number } 处理后的数字
   */
  pretty(data: number | string) {
    return prettyNumber(data)
  },
  /**
   * @method 清除结尾的小数点
   * @param { Number | String } data 需要处理的字符串
   * @returns { Number } 处理后的数字
   */
  trimEndDot(data:number | string) {
    return (data + '').replace(/^(\d+)(\.)$/g, '$1')
  }
}

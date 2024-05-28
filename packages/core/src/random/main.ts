import { Crypto } from '../.internal/global'

/**
 * @file Random
 * @description 获取随机值(数字，颜色，字符串等)
 */
export default class Random {
   /**
   * @method 获取指定长度的随机字符串
   * @param { Number } len 指定长度(默认：32)
   * @returns { String } 返回对应的随机字符串
   */
  static string(len = 32) {
    // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
    const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
    const maxPos = $chars.length
    let result = ''
    for (let i = 0; i < len; i++) {
      result += $chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return result.toLowerCase()
  }
  /**
   * @method 获取介于最小值和最大值之间的随机数
   * @param { Number } min 最小值
   * @param { Number } max 最大值
   * @returns { Number } 返回对应的随机数
   */
  static number(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }
  /**
   * @method 获取指定透明度的随机颜色
   * @param { Number } alpha 透明度(0,1之间)
   * @returns { String } 返回对应的随机颜色
   */
  static color(alpha = 1) {
    const arr = new Uint8Array(3)
    const colors = Array.from(Crypto.getRandomValues(arr)).join()
    if (alpha < 0 || alpha > 1) alpha = 1
    return `rgba(${colors}, ${alpha})`
  }
}

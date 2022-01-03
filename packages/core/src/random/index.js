/**
 * @file Random
 * @description 随机数/颜色/字符串等
 */
export default class Random {
  /**
   * @method 获取介于最小值和最大值之间的随机数
   * @param {Number} min 最小值
   * @param {Number} max 最大值
   * @returns {Number} 返回对应的随机数
   */
  static number(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }
  /**
   * @method 获取介于最小值和最大值之间的随机颜色
   * @param {Number} min 最小值(不能小于0)
   * @param {Number} max 最大值(不能大于255)
   * @param {Number} alpha 模糊值(在0，1之间)
   * @returns {String|Object} 返回对应的随机颜色
   */
  static color(min, max, alpha= 1) {
    if (min < 0 || max > 255) {
      return { error: '颜色区间值min,max都必须在[0,255]之间' }
    }
    if (min > max) {
      return { error: '颜色区间值min必须小于max' }
    }
    if (alpha < 0 || alpha > 1) {
      return { error: '颜色模糊值alpha都必须在[0,1]之间' }
    }
    const r = Random.number(min, max)
    const g = Random.number(min, max)
    const b = Random.number(min, max)
    return alpha !== 1 ? `rgb(${r},${g},${b}, ${alpha})` : `rgb(${r},${g},${b})`
  }
  /**
   * @method 获取指定长度的随机字符串
   * @param {Number} len 指定长度(默认：32)
   * @param {Boolean} timestamp 是否追加时间戳
   * @returns {String} 返回对应的随机字符串
   */
  static string(len = 32, timestamp= false) {
    // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
    const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
    const maxPos = chars.length
    let result = ''
    for (let i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return timestamp ? result + (new Date().getTime()) : result
  }
  /**
   * @method 随机生成一个不重复的uuid
   * @param {Number} len 指定长度(默认：10)
   * @returns {String} 返回对应的不重复uuid
   */
  static uuid(len = 10) {
    return Number(Math.random().toString().substr(2, 18) + Date.now()).toString(36).substr(0, len)
  }
  /**
   * @method 随机生成一个guid
   * @returns {String} 返回对应的guid
   */
  static guid() {
    return 'mmmmmmmm-mmmm-4mmm-ymmm-mmmmmmmmmmmm'.replace(/[my]/g, c => {
      const r = Math.random() * 16 | 0
      const v = c === 'm' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
  }
}

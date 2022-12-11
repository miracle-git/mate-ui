/**
 * @file Random
 * @description 随机数/颜色/字符串/uuid/guid等
 */
export default {
  /**
   * @method 获取介于最小值和最大值之间的随机数
   * @param {Number} min 最小值
   * @param {Number} max 最大值
   * @returns {Number} 返回对应的随机数
   */
  number(min:number, max:number) {
    return Math.floor(Math.random() * (max - min) + min)
  },
  /**
   * @method 获取指定长度的随机字符串
   * @param {Number} len 指定长度(默认：32)
   * @param {Boolean} timestamp 是否追加时间戳
   * @returns {String} 返回对应的随机字符串
   */
  string(len = 32, timestamp= false) {
    // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
    const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
    const maxPos = chars.length
    let result = ''
    for (let i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return timestamp ? result + (new Date().getTime()) : result
  },
  /**
   * @method 获取随机颜色(可配置透明度)
   * @param {Number} alpha 模糊值(在0，1之间)
   * @returns {String|Object} 返回对应的随机颜色
   */
  color(alpha:number = 1) {
    if (alpha < 0 || alpha > 1) {
      console.warn('颜色模糊值alpha都必须在[0,1]之间')
      return
    }
    const arr = new Uint8Array(3)
    const crypto = window.crypto || window.webkitCrypto || window.mozCrypto || window.oCrypto || window.msCrypto
    const colors = Array.from(crypto.getRandomValues(arr)).join()
    return `rgba(${colors},${alpha})`
  },
  /**
   * @method 随机生成一个不重复的uuid
   * @param { Number } len 指定长度(默认：10)
   * @returns { String } 返回对应的不重复uuid
   */
  uuid(len = 10) {
    return Number(Math.random().toString().substr(2, 18) + Date.now()).toString(36).substr(0, len)
  },
  /**
   * @method 随机生成一个guid
   * @returns { String } 返回对应的guid
   */
  guid() {
    return 'mmmmmmmm-mmmm-4mmm-ymmm-mmmmmmmmmmmm'.replace(/[my]/g, c => {
      const r = Math.random() * 16 | 0
      const v = c === 'm' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
  }
}

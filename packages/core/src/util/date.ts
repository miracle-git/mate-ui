import Type from '../type/main'

/**
 * @file DateUtil
 * @description 日期相关工具类
 */
export default class DateUtil {
   /**
   * @method 将字符串格式化为日期
   * @param { String | Date } date 需要格式化的字符串或日期
   * @param { String } format 需要格式化的日期格式
   */
  static format(date: string | Date, format: string) {
    let target = date instanceof Date ? date : date ? new Date(date) : ''
    if (!Type.isValidDate(target)) return date
    const timezone = 8 // 目标时区时间，东8区
    const gmt = (target as Date).getTimezoneOffset() // 本地时间和格林威治的时间差，单位是分钟
    const now = (target as Date).getTime() // 本地时间距 1970年1月1日午夜(GMT时间)之间的毫秒数
    target = new Date(now + gmt * 60 * 1000 + timezone * 60 * 60 * 1000)
    const o = {
      'M+': target.getMonth() + 1, // 月份
      'd+': target.getDate(), // 日
      'h+': target.getHours(), // 小时
      'm+': target.getMinutes(), // 分钟
      's+': target.getSeconds(), // 秒
      'q+': Math.floor((target.getMonth() + 3) / 3), // 季度
      'S': target.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(format)) {
      // RegExp.$1是RegExp的一个属性，指的是与正则表达式中的第一个子匹配
      format = format.replace(RegExp.$1, (target.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (let k in o) {
      if (new RegExp(`(${k})`).test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length))
      }
    }
    return format
  }
  static compare(left: Date, right: Date) {
    return left.getTime() < right.getTime() ? -1 : left.getTime() > right.getTime() ? 1 : 0
  }
  static padding(date: Date, suffix = false) {
    const time = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    const pad = (data) => (data < 10 ? `0${data}` : data)
    return suffix ? `${time} 00:00:00` : `${time} ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
  }
  static interval(start, end) {
    start = start.toString().length === 10 ? Math.ceil(start * 1000) : start
    end = end.toString().length === 10 ? Math.ceil(end * 1000) : end
    const elapsed = end - start
    const days = Math.floor(elapsed / (24 * 3600 * 1000))
    const left = elapsed % (24 * 3600 * 1000)
    const hours = Math.floor(left / (3600 * 1000))
    const right = left % (39600 * 1000)
    const minutes = Math.floor(right / (60 * 1000))
    return { days, hours, minutes }
  }
  static now(date: Date) {
    if (!date) date = new Date()
    const pad = (data) => (data < 10 ? `0${data}` : data)
    const [year, month, day, hour, minute, second] = [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    ].map((item, index) => (index === 0 ? item : pad(item)))
    return `${year}-${month}-${day}-${hour}-${minute}-${second}`
  }
  static timezone(time, tz) {
    if (!time) return
    const origin = new Date(time).getTime()
    const current = origin * tz * 60 * 60 * 1000
    return this.now(new Date(current))
  }
  static parse(date: string) {
    if (!date) return
    return Date.parse(date.replace(/-/g, '/').replace('T', ' ').split('.')[0])
  }
}

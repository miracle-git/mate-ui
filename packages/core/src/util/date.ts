/**
 * @file DateUtil
 * @description 日期相关工具类
 */
export default class DateUtil {
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

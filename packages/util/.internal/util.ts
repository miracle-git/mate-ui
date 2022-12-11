import { isNumber, isValidDate, isNullOrUndefined, isEmptyString } from '@mate-ui/type'

export type NumberOptions = {
  precision: number,
  thousandth: boolean,
  pretty: boolean,
  reserve: boolean,
  raw: boolean,
  symbol: string
}

export const parseDate = (date, format) => {
  if (isNumber(date)) date = new Date(date * 1000)
  if (!isValidDate(date)) date = new Date()
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  const pad = (str) => ('00' + str).substr(str.length)
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours() > 12 ? date.getHours() - 12 : date.getHours(),
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(format)) {
      let str = o[k] + ''
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : pad(str))
    }
  }
  return format
}

export const parseNumber = (num, options?:NumberOptions) => {
  const { precision = 2, thousandth = false, reserve = false, pretty = false, raw = false, symbol = '' } = options!
  if (raw || isNaN(num) || isNullOrUndefined(num) || isEmptyString(num)) return num || symbol
  if (reserve) return num.replace(/\,/g, '')
  let [temp, digit, integer, buffer, positive] = [0.00, 0, 0, <any>[], true]
  const _zero = (val, len) => {
    const _temp = val.toString()
    const _buffer = <any>[]
    for (let i = 0, loop = len - _temp.length; i < loop; i++) {
      _buffer.push('0')
    }
    _buffer.push(_temp)
    return _buffer.join('')
  }
  // 取出正负号
  positive = (num >= 0)
  // 强制转换为绝对值数浮点
  temp = (isNaN(temp = parseFloat(num))) ? 0 : Math.abs(temp)
  // 所有内容用正数规则处理
  // 分离整数部分
  integer = parseInt(temp + '')
  // 分离小数部分(四舍五入)
  digit = parseInt(((temp - integer) * Math.pow(10, precision) + 0.5) + '')

  do {
    buffer.unshift(_zero(integer % 1000, 3))
  } while ((integer = parseInt((integer / 1000) + '')))
  // 最高段区去掉前导0
  buffer[0] = parseInt(buffer[0]).toString()
  let res = ((positive) ? '' : '-') + buffer.join(',') + (precision > 0 ? ('.' + _zero(digit, precision)) : '')
  if (!thousandth) {
    res = res.replace(/\,/g, '')
  }
  return pretty ? prettyNumber(res) : res
}

export const prettyNumber = (num) => {
  num = num + ''
  let temp = num
  let len = num.length - num.indexOf('.') - 1
  if (num.indexOf('.') === -1) return num
  if (temp.lastIndexOf('0') === -1 || temp.substr(temp.length - 1, 1) !== '0') return temp
  for (let i = len; i > 0; i--) {
    let index = temp.lastIndexOf('0')
    if (temp.charAt(index - 1) === '.') {
      return temp.substring(0, index - 1)
    } else {
      temp = temp.substring(0, index)
    }
  }
}

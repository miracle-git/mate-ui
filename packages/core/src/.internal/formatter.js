import Type from '../type'

export const parseDate = (date, format) => {
  if (Type.isNumber(date)) date = new Date(date * 1000)
  if (!Type.isValidDate(date)) date = new Date()
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

export const parseNumber = (num, { precision = 2, thousandth = false } = {}) => {
  if (isNaN(num)) return ''
  let [temp, digit, integer, buffer, positive] = [0.00, 0, 0, [], true]
  const _zero = (val, len) => {
    const _temp = val.toString()
    const _buffer = []
    for (let i = 0, loop = len - _temp.length; i < loop; i++) {
      _buffer.push('0');
    }
    _buffer.push(_temp);
    return _buffer.join('')
  }
  // 取出正负号
  positive = (num >= 0)
  // 强制转换为绝对值数浮点
  temp = (isNaN(temp = parseFloat(num))) ? 0 : Math.abs(temp)
  // 所有内容用正数规则处理
  // 分离整数部分
  integer = parseInt(temp)
  // 分离小数部分(四舍五入)
  digit = parseInt((temp - integer) * Math.pow(10, precision) + 0.5)

  do {
    buffer.unshift(_zero(integer % 1000, 3))
  } while ((integer = parseInt(integer / 1000)))
  // 最高段区去掉前导0
  buffer[0] = parseInt(buffer[0]).toString()
  return ((positive) ? '' : '-') + buffer.join(thousandth ? ',' : '') + (precision > 0 ? ('.' + _zero(digit, precision)) : '')
}

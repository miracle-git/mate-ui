import { isNumber, isValidDate, isNullOrUndefined, isEmptyString } from '@mate-ui/type'

export type NumberOptions = {
  precision: number,
  thousandth: boolean,
  pretty?: boolean,
  reserve?: boolean,
  raw?: boolean,
  symbol?: string
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

export const checkOpera = (engine, browser) => {
  // @ts-ignore
  engine.version = browser.version = window.opera.version()
  engine.opera = browser.opera = parseFloat(engine.version)
}

export const checkWebkit = (engine, browser, ua) => {
  engine.version = RegExp.$1
  engine.webkit = parseFloat(engine.version)
  // 确定Edge
  if (/Edge?\/(\S+)/.test(ua)) {
    browser.version = RegExp.$1
    browser.edge = parseFloat(browser.version)
  } else if (/Chrome\/(\S+)/.test(ua)) {
    // 确定Chrome还是Safari
    browser.version = RegExp.$1
    browser.chrome = parseFloat(browser.version)
  } else {
    // 近似确认版本号
    let safariVersion = 1
    if (engine.webkit < 100) {
      safariVersion = 1
    } else if (engine.webkit < 312) {
      safariVersion = 1.2
    } else if (engine.webkit < 412) {
      safariVersion = 1.3
    } else {
      safariVersion = 2
    }
    browser.safari = browser.version = safariVersion
  }
}

export const checkHTML = (engine, browser) => {
  engine.version = browser.version = RegExp.$1
  engine.khtml = browser.kong = parseFloat(engine.version)
}

export const checkGecko = (engine, browser, ua) => {
  engine.version = RegExp.$1
  engine.gecko = parseFloat(engine.version)
  // 确定是不是firefox
  if (/Firefox\/(\S+)/.test(ua)) {
    browser.version = RegExp.$1
    browser.firefox = parseFloat(browser.version)
  }
}

export const checkMSIE = (engine, browser) => {
  engine.version = browser.version = RegExp.$1
  browser.ie = parseFloat(browser.version)
}

export const checkWindows = (sys, ua) => {
  // 检测windows操作系统
  if (sys.win && /Win(?:dows)?([^do]{2})]\s?(\d+\.\d+)?/.test(ua)) {
    if (RegExp.$1 == 'NT') {
      switch (RegExp.$2) {
        case '5.0':
          sys.win = '2000'
          break
        case '5.1':
          sys.win = 'XP'
          break
        case '6.0':
          sys.win = 'Vista'
          break
        case '6.1':
          sys.win = '7'
          break
        default:
          sys.win = 'NT'
          break
      }
    } else if (RegExp.$1 =='9x') {
      sys.win = 'ME'
    } else {
      sys.win = RegExp.$1
    }
  }
}

export const checkMobile = (sys, ua) => {
  sys.iphone = ua.indexOf('iPhone') > -1
  sys.ipod = ua.indexOf('iPod') > -1
  sys.ipad = ua.indexOf('iPad') > -1
  sys.nokiaN = ua.indexOf('nokiaN') > -1
  if (sys.win === 'CE') {
    sys.winMobile = sys.win
  } else if (sys.win === 'Ph') {
    if (/Windows Phone OS (\d+ \d)/.test(ua)) {
      sys.win = 'Phone'
      sys.winMobile = parseFloat(RegExp.$1)
    }
  }
}



export const checkIOS = (sys, ua) => {
  if (sys.mac && ua.indexOf('Mobile') > -1) {
    if (/CPU (?:iPhone )?OS (\d+_\d+)/.test(ua)) {
      sys.ios = parseFloat(RegExp.$1.replace('_', '.'))
    } else {
      // 无法检测，只能猜测
      sys.ios = 2
    }
  }
}

export const checkAndroid = (sys, ua) => {
  if (/Android (\d+\. \d+)/.test(ua)) {
    sys.android = parseFloat(RegExp.$1)
  }
}

export const checkGame = (sys, ua) => {
  sys.will = ua.indexOf('Wii') > -1
  sys.ps = /playstation/i.test(ua)
}

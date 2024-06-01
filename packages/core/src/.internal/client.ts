import { DATA_REGEX_PATTERN, BROWSER_ENGINE_TYPE, OS_PLATFORM_TYPE } from '../config/main'

export const checkBrowser = (type, browser, ua) => {
  switch (type) {
    case BROWSER_ENGINE_TYPE.webkit:
      const webkit = parseFloat(RegExp.$1)
      // 确定是Edge
      if (DATA_REGEX_PATTERN.edge.test(ua)) {
        browser.version = RegExp.$1
        browser.edge = parseFloat(browser.version)
      } else if (DATA_REGEX_PATTERN.chrome.test(ua)) {
        // 确定是Chrome还是Safari
        browser.version = RegExp.$1
        browser.chrome = parseFloat(browser.version)
      } else {
        // 近似的确定版本号
        let version = 1
        if (webkit < 100) {
          version = 1
        } else if (webkit < 312) {
          version = 1.2
        } else if (webkit < 412) {
          version = 1.3
        } else {
          version = 2
        }
        browser.safari = browser.version = version
      }
      break
    case BROWSER_ENGINE_TYPE.khtml:
      browser.version = RegExp.$1
      browser.konq = parseFloat(browser.version)
      break
    case BROWSER_ENGINE_TYPE.gecko:
      if (DATA_REGEX_PATTERN.firefox.test(ua)) {
        browser.version = RegExp.$1
        browser.firefox = parseFloat(browser.version)
      }
      break
    case BROWSER_ENGINE_TYPE.opera:
      browser.version = window.opera.version()
      browser.opera = parseFloat(browser.version)
      break
    case BROWSER_ENGINE_TYPE.msie:
      browser.version = RegExp.$1
      browser.ie = parseFloat(browser.version)
      break
  }
}

export const checkEngine = (type, engine) => {
  switch (type) {
    case BROWSER_ENGINE_TYPE.webkit:
      engine.version = RegExp.$1
      engine.webkit = parseFloat(engine.version)
      break
    case BROWSER_ENGINE_TYPE.khtml:
      engine.version = RegExp.$1
      engine.khtml = parseFloat(engine.version)
      break
    case BROWSER_ENGINE_TYPE.gecko:
      engine.version = RegExp.$1
      engine.gecko = parseFloat(engine.version)
      break
    case BROWSER_ENGINE_TYPE.opera:
      engine.version = window.opera.version()
      engine.opera = parseFloat(engine.version)
      break
    case BROWSER_ENGINE_TYPE.msie:
      engine.version = RegExp.$1
      engine.msie = parseFloat(engine.version)
      break
  }
}

export const checkPlatform = (type, platform, ua) => {
  switch (type) {
    case OS_PLATFORM_TYPE.windows:
      if (platform.windows && DATA_REGEX_PATTERN.windows.test(ua)) {
        if (RegExp.$1 === 'NT') {
          switch (RegExp.$2) {
            case '5.0':
              platform.windows = '2000'
              break
            case '5.1':
              platform.windows = 'XP'
              break
            case '6.0':
              platform.windows = 'Vista'
              break
            case '6.1':
              platform.windows = '7'
              break
            default:
              platform.windows = 'NT'
              break
          }
        } else if (RegExp.$1 === '9x') {
          platform.windows = 'ME'
        } else {
          platform.windows = RegExp.$1
        }
      }
      break
    case OS_PLATFORM_TYPE.tablet:
      platform.iphone = ua.indexOf('iPhone') > -1
      platform.ipod = ua.indexOf('iPod') > -1
      platform.ipad = ua.indexOf('iPad') > -1
      break
    case OS_PLATFORM_TYPE.ios:
      if (platform.mac && ua.indexOf('Mobile') > -1) {
        if (DATA_REGEX_PATTERN.ios.test(ua)) {
          platform.ios = parseFloat(RegExp.$1.replace('_', '.'))
        } else {
          platform.ios = 2 // 猜测版本号
        }
      }
      break
    case OS_PLATFORM_TYPE.android:
      if (DATA_REGEX_PATTERN.android.test(ua)) {
        platform.android = parseFloat(RegExp.$1)
      }
      break
    case OS_PLATFORM_TYPE.game:
      platform.will = ua.indexOf('Wii') > -1
      platform.ps = DATA_REGEX_PATTERN.game.test(ua)
      break
  }
}

export const ping = async (img, src) => {
  let _resolve, _reject
  const _ping = new Promise((resolve, reject) => {
    _resolve = resolve
    _reject = reject
  })
  const ts = +new Date()
  img.onload = e => _resolve({ type: e.type, ping: (+new Date()) - ts })
  img.onerror = _reject
  img.src = `${src}?_=${ts}`
  return _ping
}

export const analyze = (res, pos) => {
  let total = 0
  let packages = 0
  res.forEach(item => {
    total += item.ping
    if (item.type === 'error') {
      packages++
    }
  })
  const len = res.length - pos
  const average = total / len
  const rate = packages / len * 100
  let quantity = 0
  // 判断网络质量
  if (average > 100 && average <= 200) {
    quantity = Math.max(quantity, 1)
  } else if (average > 200) {
    quantity = Math.max(quantity, 2)
  }
  // 判断丢包率
  if (rate > .1 && rate <= .2) {
    quantity = Math.max(quantity, 1)
  } else if (rate > .2) {
    quantity = Math.max(quantity, 2)
  }
  return {
    quantity,
    latency: `${Math.round(average)}ms`,
    rate: `${rate}%`
  }
}


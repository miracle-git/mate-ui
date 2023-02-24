import {
  checkOpera, checkWebkit, checkHTML, checkGecko, checkMSIE,
  checkWindows, checkMobile, checkIOS, checkAndroid, checkGame
} from '../../.internal/util'

function getEngineAndBrowser(ua) {
  const engine = {
    ie: 0,
    gecko: 0,
    webkit: 0,
    khtml: 0,
    opera: 0,
    version: null
  }
  const browser = {
    ie: 0,
    edge: 0,
    firefox: 0,
    safari: 0,
    kong: 0,
    opera: 0,
    chrome: 0,
    version: null
  }
  // @ts-ignore
  if (window.opera) {
    checkOpera(engine, browser)
  } else if (/AppleWebkit\/(\S+)/.test(ua)) {
    checkWebkit(engine, browser, ua)
  } else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/[^]+/.test(ua)) {
    checkHTML(engine, browser)
  } else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)) {
    checkGecko(engine, browser, ua)
  } else if (/MSIE ([^]+)/.test(ua) || /rv:([\d.]+)\) like Gecko/.test(ua)) {
    checkMSIE(engine, browser)
  }
  browser.ie = engine.ie
  browser.opera = engine.opera
  return {
    engine,
    browser
  }
}

function getPlatform(ua) {
  const platform = {
    win: false,
    mac: false,
    xll: false,
    ios: false,
    android: false,
    ipod: false,
    ipad: false,
    iphone: false,
    nokiaN: false,
    winMobile: false,
    will: false,
    pa: false
  }
  platform.win = navigator.platform.indexOf('Win') === 0
  platform.mac = navigator.platform.indexOf('Mac') === 0
  platform.xll = navigator.platform === 'Xll' || navigator.platform.indexOf('Linux') === 0
  // 检测Windows操作系统
  checkWindows(platform, ua)
  // 检测移动设备
  checkMobile(platform, ua)
  // 检测iOS版本
  checkIOS(platform, ua)
  // 检测Android版本
  checkAndroid(platform, ua)
  // 检测游戏系统
  checkGame(platform, ua)
  return platform
}

export default {
  engine: getEngineAndBrowser(navigator.userAgent).engine,
  browser: getEngineAndBrowser(navigator.userAgent).browser,
  platform: getPlatform(navigator.userAgent)
}

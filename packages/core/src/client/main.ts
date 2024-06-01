import Type from '../type/main'
import { DATA_REGEX_PATTERN, DEFAULT_BROWSER_TYPE, DEFAULT_ENGINE_TYPE, DEFAULT_PLATFORM_TYPE, BROWSER_ENGINE_TYPE, OS_PLATFORM_TYPE } from '../config/main'
import { checkBrowser, checkEngine, checkPlatform, ping, analyze } from '../.internal/client'

/**
 * @file Client
 * @description 客户端(浏览器及引擎，操作系统平台类型, 网络检测)
 */
export default class Client {
  /**
   * 检测浏览器(Chrome, Firefox, Safari, Opera, Konq, IE, Edge)
   */
  static getBrowser() {
    const browser = DEFAULT_BROWSER_TYPE
    const ua = navigator.userAgent
    if (window.opera) {
      checkBrowser(BROWSER_ENGINE_TYPE.opera, browser, ua)
    } else if (DATA_REGEX_PATTERN.webkit.test(ua)) {
      checkBrowser(BROWSER_ENGINE_TYPE.webkit, browser, ua)
    } else if (DATA_REGEX_PATTERN.khtml.test(ua) || DATA_REGEX_PATTERN.konq.test(ua)) {
      checkBrowser(BROWSER_ENGINE_TYPE.khtml, browser, ua)
    } else if (DATA_REGEX_PATTERN.gecko.test(ua)) {
      checkBrowser(BROWSER_ENGINE_TYPE.gecko, browser, ua)
    } else if (DATA_REGEX_PATTERN.msie.test(ua) || DATA_REGEX_PATTERN.msgecko.test(ua)) {
      checkBrowser(BROWSER_ENGINE_TYPE.msie, browser, ua)
    }
    return browser
  }
  /**
   * 检测渲染引擎(Webkit, KHTML, Gecko, Opera, MSIE)
   */
  static getEngine() {
    const engine = DEFAULT_ENGINE_TYPE
    const ua = navigator.userAgent
    if (window.opera) {
      checkEngine(BROWSER_ENGINE_TYPE.opera, engine)
    } else if (DATA_REGEX_PATTERN.webkit.test(ua)) {
      checkEngine(BROWSER_ENGINE_TYPE.webkit, engine)
    } else if (DATA_REGEX_PATTERN.khtml.test(ua) || DATA_REGEX_PATTERN.konq.test(ua)) {
      checkEngine(BROWSER_ENGINE_TYPE.khtml, engine)
    } else if (DATA_REGEX_PATTERN.gecko.test(ua)) {
      checkEngine(BROWSER_ENGINE_TYPE.gecko, engine)
    } else if (DATA_REGEX_PATTERN.msie.test(ua) || DATA_REGEX_PATTERN.msgecko.test(ua)) {
      checkEngine(BROWSER_ENGINE_TYPE.msie, engine)
    }
    return engine
  }
  /**
   * 检测操作系统平台类型(Windows, iOS, Android, Game)
   */
  static getPlatform() {
    const platform = DEFAULT_PLATFORM_TYPE
    const { userAgent: ua, platform: pf } = navigator
    platform.windows = pf.indexOf('Win') === 0
    platform.mac = pf.indexOf('Mac') === 0
    platform.xll = pf === 'Xll' || pf.indexOf('Linux') === 0
    // 检测Windows操作系统
    checkPlatform(OS_PLATFORM_TYPE.windows, platform, ua)
    // 检测移动设备
    checkPlatform(OS_PLATFORM_TYPE.tablet, platform, ua)
    // 检测iOS设备
    checkPlatform(OS_PLATFORM_TYPE.ios, platform, ua)
    // 检测Android设备
    checkPlatform(OS_PLATFORM_TYPE.android, platform, ua)
    // 检测游戏设备
    checkPlatform(OS_PLATFORM_TYPE.game, platform, ua)
    return platform
  }
  /**
   * 检测网络
   * @param site { String } 指定网络请求地址(可为图标地址，如：https://www.mate-ui.com/favicon.ico)
   * @param first { Boolean } 是否首次请求加载
   */
  static async getNetwork(site: string, first = false) {
    if (Type.isUndefinedOrNull(window) || Type.isUndefinedOrNull(document)) return
    const res = []
    const pos = first ? 5 : 0
    const times = first ? 15 : 3
    const img = new Image()
    for (let i = 0; i < times; i++) {
      const req = await ping(img, site)
      if (i > pos) {
        res.push(req)
      }
    }
    return analyze(res, pos)
  }
}

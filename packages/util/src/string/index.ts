import { DATA_REGEX_PATTERN } from '@mate-ui/conf'

export default {
  /**
   * @method 高亮显示文本(常用于关键字搜索)
   * @param { String } str 需要进行高亮处理的文本
   * @param { String } keyword 高亮的关键字
   */
  highlight(str:string, keyword:string) {
    const transform = keyword.replace(DATA_REGEX_PATTERN.highlight, '\\$&')
    const reg = new RegExp(transform, 'gi')
    if (str) {
      return str.replace(reg, text => `<span style="color:#f81d22;">${text}</span>`)
    }
  },
  /**
   * @method 获取全局变量的key
   * @param { String } app 所属应用(一般用于区分不同项目，防止多项目相互覆盖)
   * @param { String } scope 所属应用范围(如api,base等等)
   */
  globalKey(app:string = '', scope:string = '') {
    return (app ? `__MATE_${app}_${scope}__` : `__MATE_${scope}__`).toUpperCase()
  },
  /**
   * @method 处理字符串中的转义字符
   * @param { String } str 待处理的字符串
   */
  escape(str:string) {
    return str.replace(DATA_REGEX_PATTERN.escape, '\\$&')
  },
  /**
   * @method 将字符串按大写字符拆分为连字符串
   * @param { String } str 需要处理的字符串
   * @returns { String } 转化后的字符串
   */
  kebab(str) {
    return str.replace(DATA_REGEX_PATTERN.kebab, '$1-$2').toLowerCase()
  },
  /**
   * method 将字符串按(:,-,_)拆分为驼峰串
   * @param { String } str 需要处理的字符串
   * @returns { String } 转化后的字符串
   */
  camel(str) {
    return this.lowerFirst(str.replace(DATA_REGEX_PATTERN.camel, (_, _sep, letter, offset) => offset ? letter.toUpperCase() : letter))
  },
  /**
   * @method 将驼峰字符串转化为按(:,-,_)拆分
   * @param { String } str 需要处理的字符串
   * @param { String } sep 分隔符
   * @param { String } textcase 大小写(upper, lower)
   * @returns { String } 转化后的字符串
   */
  uncamel(str, sep = '_', textcase = '') {
    const result = str.replace(/([a-z\d])([A-Z])/g, '$1' + sep + '$2')
      .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + sep + '$2')
    textcase = ['upper', 'lower'].includes(textcase) ? textcase : ''
    return textcase ? result[`to${this.upperFirst(textcase)}Case`]() : result
  },
  /**
   * @method 将字符串首字符大写
   * @param { String } str 需要处理的字符串
   * @returns { String } 转化后的字符串
   */
  upperFirst(str:string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  },
  /**
   * @method 将字符串首字符小写
   * @param { String } str 需要处理的字符串
   * @returns { String } 转化后的字符串
   */
  lowerFirst(str:string) {
    return str.charAt(0).toLowerCase() + str.slice(1)
  },
  /**
   * @method 获取带星号的文本(常用于手机号处理)
   * @param { String } str 当前需要处理的文本
   * @typedef { Object } options 格式化对象
   * @property { Object } stars 添加多少个星号
   * @property { Object } ignore 是否不处理(原文返回)
   * @property { Object } before 星号前导字符数
   * @property { Object } after 星号后导字符数
   * @returns { String } 返回处理之后的文本
   */
  secure(str: string, { stars = 4, ignore = false, before = 3, after = 4 } = {}) {
    const len = str.length
    if (stars <= 0 || len < stars + before + after || ignore) {
      return str
    }
    let secure = ''
    for (let i = 1; i <= stars; i++) {
      secure += '*'
    }
    const pattern = DATA_REGEX_PATTERN.secure.replace('{before}', `{${before}}`).replace('{after}', `{${after}}`)
    return str.replace(new RegExp(pattern), '$1' + secure + '$2')
  },
  /**
   * @method 按关键字模糊搜索(忽略大小写)
   * @param { String } str 需要处理的字符串
   * @param { String } keyword 需要搜索的关键字
   * @param { Boolean } ignore 是否忽略大小写
   */
  indexOf(str:string, keyword:string, ignore = true) {
    return ignore ? str.toLowerCase().indexOf(keyword.toLowerCase()) > -1 : str.indexOf(keyword) > -1
  },
  /**
   * @method 清除所有的字符串空格
   * @param { String } str 需要处理的字符串
   * @param { Boolean } all 所有的空格(包含中间)
   */
  trim(str:string, all = false) {
    const result = str.trim()
    return all ? result.replace(/[ ]/g, '').replace(DATA_REGEX_PATTERN.trim, '') : result
  },
  /**
   * @method 清除结尾的的最后一个字符
   * @param { String } str 需要处理的字符串
   * @param { String } end 结尾字符串
   */
  trimEnd(str:string = '', end:string = '.') {
    return str.endsWith(end) ? str.slice(0, -1) : str
  },
  /**
   * @method 清除字符串中所有的html标签
   * @param { String } str 需要处理的字符串
   */
  trimHtml(str:string) {
    return str.replace(DATA_REGEX_PATTERN.html, '')
  },
  /**
   * @method 格式化模板字符串
   * @param { String } str 需要处理的字符串
   * @param val 格式化占位符对应的字符串({0},{1},...)
   */
  format(str:string, ...val) {
    return str.replace(/\{(\d+)\}/g, function(match, number) {
      return typeof val[number] !== 'undefined' ? val[number] : match
    })
  },
  /**
   * @method 获取url字符串问号之后的值并转化为对象
   * @param { String } str 当前url字符串
   * @returns { Object } 查询字符串对象
   */
  query(str:string) {
    if (!str || str.indexOf('?') === -1) return
    const arr = str.split('?')[1].split('&')
    return arr.reduce((res, item) => {
      const query = item.split('=')
      res = { ...res, [query[0]]: encodeURIComponent(query[1]) }
      return res
    }, {})
  }
}

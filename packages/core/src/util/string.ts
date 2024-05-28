/**
 * @file StringUtil
 * @description 字符串相关工具类
 */
export default class StringUtil {
  /**
   * @method 获取全局变量的key
   * @param app 所属应用(一般用于区分不同项目，防止多项目相互覆盖)
   * @param scope 所属应用范围(如api,base等等)
   */
  static globalKey = (app = '', scope = '') => {
    return (app ? `__MATE_${app}_${scope}__` : `__MATE_${scope}__`).toUpperCase()
  }
}

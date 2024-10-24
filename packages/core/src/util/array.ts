import Type from '../type/main'
import { DEFAULT_MAGIC_NUMBER_CONFIG } from '../config/main'
import { fixed, degree } from '../.internal/magic'

/**
 * @file ArrayUtil
 * @description 数组相关工具类
 */
export default class ArrayUtil {
  /**
   * @method 判断当前定义的属性值是否为集合中之一
   * @param { String } current 当前属性值
   * @param { Array } values 属性集合
   * @returns { Boolean } 返回是否在集合中
   */
  static oneOf(current, values = []) {
    return values.some((item) => item === current)
  }
  /**
   * @method 判断当前定义的属性值是否在指定的范围内(包含边界值)
   * @param { Number } current 当前属性值
   * @param { Number } min 最小值(默认0)
   * @param { Number } max 最大值(默认1)
   * @returns { Boolean } 返回是否在指定的范围内
   */
  static rangeOf(current, min = 0, max = 1) {
    return current >= min && current <= max
  }
  /**
   * @method 判断当前定义的属性值是否在指定的范围内(不包含边界值)
   * @param { Number } current 当前属性值
   * @param { Number } min 最小值(默认0)
   * @param { Number } max 最大值(默认1)
   * @returns { Boolean } 返回是否在指定的范围内
   */
  static betweenOf(current, min = 0, max = 1) {
    return current > min && current < max
  }
  /**
   * @method 提取数组中指定属性的子数组
   * @param { Array } items 当前数组
   * @param { Array } props 指定的属性(可为多个)
   * @returns { Array } 返回提取指定属性对应数组
   */
  static pick(items, ...props) {
    const _props = Type.isArray(props[0]) ? props[0] : props
    const _pickProps = (current, props) =>
      props.reduce((prop, val) => (val in current && (prop[val] = current[val]), prop), {})
    return items.map((item) => _pickProps(item, _props))
  }
  /**
   * @method 获取指定对象排除指定动态列对应的对象
   * @param { Object } items 当前数组
   * @param { Array } props 指定的属性(可为多个)
   * @returns { Array } 返回排除指定属性的数组
   */
  static draw(items, ...props) {
    const _props = Type.isArray(props[0]) ? props[0] : props
    const _drawProps = (current, props) =>
      props.reduce((obj, prop) => (({ [prop]: val, ...rest } = obj) => rest)(), current)
    return items.map((item) => _drawProps(item, _props))
  }
  /**
   * @method 获取指定对象排除指定动态列对应的对象
   * @param { Object } items 当前数组
   * @param { Object } config 魔数配置
   * @returns { Object } 返回计算后的最大值，最小值和间隔
   */
  static magic(items, config = {}) {
    config = { ...DEFAULT_MAGIC_NUMBER_CONFIG, ...config }
    // @ts-ignore
    const { symmetry, deviation, splitNumber, magic } = config
    // 1.初始化
    let max = Math.max.apply(null, items)
    let min = Math.min.apply(null, items)
    let interval
    // 2.计算出初始间隔gap和缩放比例rate
    let gap = (max - min) / splitNumber
    let rate = Math.floor(Math.log10(gap) - 1)
    rate = Math.pow(10, rate)
    // 3.取出邻近较大的魔数执行第一次计算
    let temp = gap / rate
    let step
    let lastIndex = -1
    let i = 0
    for (let len = magic.length; i < len; i++) {
      if (magic[i] > temp) {
        step = magic[i] * rate
        break
      }
    }
    // 4.求出期望的最大刻度和最小刻度，为step的整倍数
    let { maxi, mini } = degree(max, min, step, symmetry)
    let split = 0
    if (deviation) {
      return { max: maxi, min: mini === 0 ? 0 : mini, step: fixed(step) }
    }
    if (symmetry && maxi * mini === 0) return
    // 5.求正负刻度不对称且0刻度不在刻度线上时，重新获取魔数进行计算，确保其中一种分割线刚好在0轴之上
    outer: do {
      split = Math.round((maxi - mini) / step)
      if ((i - lastIndex) * (split - splitNumber) < 0) {
        while (split < splitNumber) {
          if ((mini - min) <= (maxi - max) && maxi === 0 && mini !== 0) {
            mini -= step
          } else {
            maxi += step
          }
          split++
          if (split === splitNumber) break outer
        }
      }
      // 处理越界场景则退出循环
      if (i >= magic.length - 1 || i <= 0 || split === splitNumber) break
      // 记录上一次的魔数下标
      lastIndex = i
      // 尝试取符合趋势的邻近魔数
      if (split > splitNumber) {
        step = magic[++i] * rate
      } else {
        step = magic[--i] * rate
      }
      // 重新计算刻度
      let res = degree(max, min, step, symmetry)
      maxi = res.maxi
      mini = res.mini
    } while (split !== splitNumber)
    // 6.无论计算结果如何，始终把max-min分成splitNumber段，得到间隔interval,不过前面的算法已经尽量的保证刻度最优了，
    // 即interval无限接近于理想刻度step
    let unique = items.length === 1 || items.every(item => items[0] === item)
    maxi = unique ? Number(items[0]) : fixed(maxi)
    mini = unique ? 0 : fixed(mini)
    interval = fixed((maxi - mini) / splitNumber)
    // 7.返回魔数最大最小值和理想间隔
    return { max: maxi, min: mini === 0 ? 0 : mini, step: interval }
  }
}

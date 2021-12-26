/**
 * @file Sorter
 * @description 基于crypto封装的数据安全类
 */
import { isAsc, compare, combine, heapify, swap, partition } from '../.internal/sorter'
import { SORT_TYPE, SORT_MODE } from '../config'

export default class Sorter {
  // 冒泡排序
  static bubble(items, direction = SORT_TYPE.ASC) {
    const len = items.length
    for (let i = len - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        if (compare(items, j, j + 1, { direction })) {
          swap(items, j, j + 1)
        }
      }
    }
    return items
  }
  // 选择排序
  static select(items, direction = SORT_TYPE.ASC) {
    const len = items.length
    for (let i = 0; i < len - 1; i++) {
      let index = i
      for (let j = index + 1; j < len; j++) {
        if (compare(items, index, j, { direction })) {
          index = j
        }
      }
      swap(items, i, index)
    }
    return items
  }
  // 插入排序
  static insert(items, direction = SORT_TYPE.ASC) {
    const len = items.length
    for (let i = 1; i < len; i++) {
      let temp = items[i], j = i
      while (compare(items, items[j - 1], temp, { direction, mode: SORT_MODE.VALUE }) && j > 0) {
        items[j] = items[j - 1]
        j--
      }
      items[j] = temp
    }
    return items
  }
  // 希尔排序
  static shell(items, direction = SORT_TYPE.ASC) {
    const len = items.length
    let delta = Math.floor(len / 2)
    while (delta >= 1) {
      for (let i = delta; i < len; i++) {
        let temp = items[i], j = i
        while (compare(items, items[j - delta], temp, { direction, mode: SORT_MODE.VALUE }) && j > delta - 1) {
          items[j] = items[j - delta]
          j -= delta
        }
        items[j] = temp
      }
      delta = Math.floor(delta / 2)
    }
    return items
  }
  // 快速排序
  static quick(items, direction = SORT_TYPE.ASC, left, right) {
    const len = items.length
    left = typeof left !== 'number' ? 0 : left
    right = typeof right !== 'number' ? len - 1 : right
    if (left < right) {
      const index = partition(items, direction, left, right)
      Sorter.quick(items, direction, left, index - 1)
      Sorter.quick(items, direction, index + 1, right)
    }
    return items
  }
  // 归并排序
  static merge(items, direction = SORT_TYPE.ASC) {
    const len = items.length
    if (len < 2) return items
    const mid = Math.floor(len / 2)
    const left = items.slice(0, mid)
    const right = items.slice(mid)
    return combine(items, direction, Sorter.merge(left, direction), Sorter.merge(right, direction))
  }
  // 堆排序
  static heap(items, direction = SORT_TYPE.ASC) {
    let len = items.length
    let mid = Math.floor(len / 2)
    // 建立大顶堆
    for (let i = mid; i >= 0; i--) {
      heapify(items, direction, i, len)
    }
    for (let i = len - 1; i > 0; i--) {
      swap(items, 0, i)
      len--
      heapify(items, direction,0, len)
    }
    return items
  }
  // 桶排序
  static bucket(items, direction = SORT_TYPE.ASC) {
    const len = items.length
    const size = 5
    if (len <= 1) return items
    // 寻找最大值和最小值
    let min = items[0], max = items[0]
    for (let i = 1; i < len; i++) {
      const item = items[i]
      if (item < min) {
        min = item
      } else if (item > max) {
        max = item
      }
    }
    // 初始化桶
    const bucketCount = Math.floor((max - min) / size) + 1
    const buckets = new Array(bucketCount)
    for (let i = 0; i < bucketCount; i++) {
      buckets[i] = []
    }
    // 利用映射函数将数据分配到各个桶中
    for (let i = 0; i < len; i++) {
      const item = items[i]
      const delta = isAsc(direction) ? item - min : max - item
      const index = Math.floor(delta / size)
      buckets[index].push(item)
    }
    // 清空数组
    items = []
    // 对每个桶进行插入排序
    for (let i = 0; i < bucketCount; i++) {
      const bucket = buckets[i]
      Sorter.insert(bucket, direction)
      for (let j = 0; j < bucket.length; j++) {
        items.push(bucket[j])
      }
    }
    return items
  }
  // 计数排序
  static counting(items, direction = SORT_TYPE.ASC) {
    const len = items.length
    if (len <= 1) return items
    let max = items[0], index = isAsc(direction) ? 0 : len - 1
    // 寻找最大值
    for (let i = 0; i < len; i++) {
      const item = items[i]
      if (item > max) {
        max = item
      }
    }
    // 初始化桶
    const bucketCount = max + 1
    const buckets = new Array(bucketCount)
    // 开始计数
    for (let i = 0; i < len; i++) {
      const item = items[i]
      if (!buckets[item]) {
        buckets[item] = 0
      }
      buckets[item]++
    }
    // 反向填充
    for (let i = 0; i < bucketCount; i++) {
      while (buckets[i] > 0) {
        const current = isAsc(direction) ? index++ : index--
        items[current] = i
        buckets[i]--
      }
    }
    return items
  }
  // 基数排序
  static radix(items, direction = SORT_TYPE.ASC) {
    const len = items.length
    if (len <= 1) return items
    let max = items[0], digit = 0
    // 寻找最大值
    for (let i = 0; i < len; i++) {
      const item = items[i]
      if (item > max) {
        max = item
      }
    }
    // 获取最大值的位数
    digit = max.toString().length
    let buckets = [], div = 1, mod = 10
    for (let i = 0; i < digit; i++, div *= 10, mod *= 10) {
      // 初始化桶
      for (let j = 0; j < len; j++) {
        const item = items[j]
        const index = parseInt((item % mod) / div)
        if(buckets[index] == null) {
          buckets[index] = []
        }
        buckets[index].push(item)
      }
      if (isAsc(direction)) {
        for (let j = 0, pos = 0; j < buckets.length; j++) {
          const item = buckets[j]
          if (item == null) continue
          let val
          while (!!(val = item.shift())) {
            items[pos++] = val
          }
        }
      } else {
        for (let j = 0, pos = len - 1; j < buckets.length; j++) {
          const item = buckets[j]
          if (item == null) continue
          let val
          while (!!(val = item.pop())) {
            items[pos--] = val
          }
        }
      }
    }
    return items
  }
}

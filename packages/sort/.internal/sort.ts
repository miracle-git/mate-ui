import { SORT_TYPE, SORT_MODE } from '@mate-ui/conf'

export default {
  isAsc(type: string) {
    return type === 'asc'
  },
  swap(items, a, b) {
    if (a === b) return
    const temp = items[a]
    items[a] = items[b]
    items[b] = temp
  },
  compare(items, a, b, { type = SORT_TYPE.asc, mode = SORT_MODE.index } = {}) {
    if (mode.name === 'index') {
      return this.isAsc(type) ? items[a] > items[b] : items[a] < items[b]
    } else {
      return this.isAsc(type) ? a > b : a < b
    }
  },
  partition(items, type, left: number, right: number) {
    let pivot = left, index = pivot + 1
    for (let i = index; i <= right; i++) {
      if (this.compare(items, pivot, i, { type })) {
        this.swap(items, i, index)
        index++
      }
    }
    this.swap(items, pivot, index - 1)
    return index - 1
  },
  combine(items, type, left, right) {
    const res = []
    while (left.length && right.length) {
      if (this.compare(items, left[0], right[0], { type, mode: SORT_MODE.value })) {
        // @ts-ignore
        res.push(right.shift())
      } else {
        // @ts-ignore
        res.push(left.shift())
      }
    }
    while (left.length) {
      // @ts-ignore
      res.push(left.shift())
    }
    while (right.length) {
      // @ts-ignore
      res.push(right.shift())
    }
    return res
  },
  heapify(items, type, i: number, len: number) {
    const left = 2 * i + 1
    const right = 2 * i + 2
    let temp = i
    if (left < len && this.compare(items, left, temp, { type })) {
      temp = left
    }
    if (right < len && this.compare(items, right, temp, { type })) {
      temp = right
    }
    if (temp !== i) {
      this.swap(items, temp, i)
      this.heapify(items, type, temp, len)
    }
  }
}


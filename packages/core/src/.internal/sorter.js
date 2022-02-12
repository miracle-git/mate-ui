import { SORT_MODE } from '../config'

export const isAsc = (direction) => {
  return direction.name === 'asc'
}

export const swap = (items, a, b) => {
  if (a === b) return
  const temp = items[a]
  items[a] = items[b]
  items[b] = temp
}

export const compare = (items, a, b, { direction, mode = SORT_MODE.index } = {}) => {
  if (mode.name === 'index') {
    return isAsc(direction) ? items[a] > items[b] : items[a] < items[b]
  } else {
    return isAsc(direction) ? a > b : a < b
  }
}

export const partition = (items, direction, left, right) => {
  let pivot = left, index = pivot + 1
  for (let i = index; i <= right; i++) {
    if (compare(items, pivot, i, { direction })) {
      swap(items, i, index)
      index++
    }
  }
  swap(items, pivot, index - 1)
  return index - 1
}

export const combine = (items, direction, left, right) => {
  const res = []
  while (left.length && right.length) {
    if (compare(items, left[0], right[0], { direction, mode: SORT_MODE.value })) {
      res.push(right.shift())
    } else {
      res.push(left.shift())
    }
  }
  while (left.length) {
    res.push(left.shift())
  }
  while (right.length) {
    res.push(right.shift())
  }
  return res
}

export const heapify = (items, direction, i, len) => {
  const left = 2 * i + 1
  const right = 2 * i + 2
  let temp = i
  if (left < len && compare(items, left, temp, { direction })) {
    temp = left
  }
  if (right < len && compare(items, right, temp, { direction })) {
    temp = right
  }
  if (temp !== i) {
    swap(items, temp, i)
    heapify(items, direction, temp, len)
  }
}

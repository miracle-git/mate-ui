/**
 * @jest-environment jsdom
 */
import { SORT_TYPE } from '@mate-ui/conf'
import {
  bubbleSort,
  selectSort,
  insertSort,
  shellSort,
  quickSort,
  mergeSort,
  heapSort,
  bucketSort,
  countingSort,
  radixSort
} from '../../src/index'

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
const res = {
  asc: [2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50],
  desc: [50, 48, 47, 46, 44, 38, 36, 27, 26, 19, 15, 5, 4, 3, 2]
}

test('测试：冒泡排序', () => {
  expect(bubbleSort(arr)).toEqual(res.asc)
  expect(bubbleSort(arr, SORT_TYPE.desc)).toEqual(res.desc)
})

test('测试：选择排序', () => {
  expect(selectSort(arr)).toEqual(res.asc)
  expect(selectSort(arr, SORT_TYPE.desc)).toEqual(res.desc)
})

test('测试：插入排序', () => {
  expect(insertSort(arr)).toEqual(res.asc)
  expect(insertSort(arr, SORT_TYPE.desc)).toEqual(res.desc)
})

test('测试：希尔排序', () => {
  expect(shellSort(arr)).toEqual(res.asc)
  expect(shellSort(arr, SORT_TYPE.desc)).toEqual(res.desc)
})

test('测试：快速排序', () => {
  expect(quickSort(arr)).toEqual(res.asc)
  expect(quickSort(arr, SORT_TYPE.desc)).toEqual(res.desc)
})

test('测试：归并排序', () => {
  expect(mergeSort(arr)).toEqual(res.asc)
  expect(mergeSort(arr, SORT_TYPE.desc)).toEqual(res.desc)
})

test('测试：堆排序', () => {
  expect(heapSort(arr)).toEqual(res.asc)
  expect(heapSort(arr, SORT_TYPE.desc)).toEqual(res.desc)
})

test('测试：桶排序', () => {
  expect(bucketSort(arr)).toEqual(res.asc)
  expect(bucketSort(arr, SORT_TYPE.desc)).toEqual(res.desc)
})

test('测试：计数排序', () => {
  expect(countingSort(arr)).toEqual(res.asc)
  expect(countingSort(arr, SORT_TYPE.desc)).toEqual(res.desc)
})

test('测试：基数排序', () => {
  expect(radixSort(arr)).toEqual(res.asc)
  expect(radixSort(arr, SORT_TYPE.desc)).toEqual(res.desc)
})




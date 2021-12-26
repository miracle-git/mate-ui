import Sorter from '../src/sorter'
import { SORT_TYPE } from '../src/config'

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
const res = {
  asc: [2,3,4,5,15,19,26,27,36,38,44,46,47,48,50],
  desc: [50,48,47,46,44,38,36,27,26,19,15,5,4,3,2]
}

test('测试：冒泡排序', () => {
  expect(Sorter.bubble(arr)).toEqual(res.asc)
  expect(Sorter.bubble(arr, SORT_TYPE.DESC)).toEqual(res.desc)
})

test('测试：选择排序', () => {
  expect(Sorter.select(arr)).toEqual(res.asc)
  expect(Sorter.select(arr, SORT_TYPE.DESC)).toEqual(res.desc)
})

test('测试：插入排序', () => {
  expect(Sorter.insert(arr)).toEqual(res.asc)
  expect(Sorter.insert(arr, SORT_TYPE.DESC)).toEqual(res.desc)
})

test('测试：希尔排序', () => {
  expect(Sorter.shell(arr)).toEqual(res.asc)
  expect(Sorter.shell(arr, SORT_TYPE.DESC)).toEqual(res.desc)
})

test('测试：快速排序', () => {
  expect(Sorter.quick(arr)).toEqual(res.asc)
  expect(Sorter.quick(arr, SORT_TYPE.DESC)).toEqual(res.desc)
})

test('测试：归并排序', () => {
  expect(Sorter.merge(arr)).toEqual(res.asc)
  expect(Sorter.merge(arr, SORT_TYPE.DESC)).toEqual(res.desc)
})

test('测试：堆排序', () => {
  expect(Sorter.heap(arr)).toEqual(res.asc)
  expect(Sorter.heap(arr, SORT_TYPE.DESC)).toEqual(res.desc)
})

test('测试：桶排序', () => {
  expect(Sorter.bucket(arr)).toEqual(res.asc)
  expect(Sorter.bucket(arr, SORT_TYPE.DESC)).toEqual(res.desc)
})

test('测试：计数排序', () => {
  expect(Sorter.counting(arr)).toEqual(res.asc)
  expect(Sorter.counting(arr, SORT_TYPE.DESC)).toEqual(res.desc)
})

test('测试：基数排序', () => {
  expect(Sorter.radix(arr)).toEqual(res.asc)
  expect(Sorter.radix(arr, SORT_TYPE.DESC)).toEqual(res.desc)
})

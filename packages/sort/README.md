# @mate-ui/sort
> 封装常见的排序算法(冒泡排序，选择排序，插入排序，希尔排序，快速排序，归并排序，堆排序，桶排序，计数排序，基数排序)

- 由 `Typescript` 开发，支持完善的类型推断和检查
- 支持按需加载
- 支持 `ESModule`、`CommonJS`、`UMD`等规范

## 用法
- 安装
```sh
npm install @mate-ui/sort
```
- 引入
```sh
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
} from '@mate-ui/sort'
```
- API

|  属性/方法  | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| bubbleSort | 冒泡排序(默认升序) | bubbleSort([1,3,5,2,4], type) | arr, type(asc/desc) |
| selectSort | 选择排序(默认升序) | bubbleSort([1,3,5,2,4], type) | arr, type(asc/desc) |
| insertSort | 插入排序(默认升序) | bubbleSort([1,3,5,2,4], type) | arr, type(asc/desc) |
| shellSort | 希尔排序(默认升序) | bubbleSort([1,3,5,2,4], type) | arr, type(asc/desc) |
| quickSort | 快速排序(默认升序) | bubbleSort([1,3,5,2,4], type) | arr, type(asc/desc) |
| mergeSort | 归并排序(默认升序) | bubbleSort([1,3,5,2,4], type) | arr, type(asc/desc) |
| heapSort | 堆排序(默认升序) | bubbleSort([1,3,5,2,4], type) | arr, type(asc/desc) |
| bucketSort | 桶排序(默认升序) | bubbleSort([1,3,5,2,4], type) | arr, type(asc/desc) |
| countingSort | 计数排序(默认升序) | bubbleSort([1,3,5,2,4], type) | arr, type(asc/desc) |
| radixSort | 基数排序(默认升序) | bubbleSort([1,3,5,2,4], type) | arr, type(asc/desc) |

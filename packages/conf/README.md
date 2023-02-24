# @mate-ui/constant

> 基础常量配置

- 由 `Typescript` 开发，支持完善的类型推断和检查
- 支持按需加载
- 支持 `ESModule`、`CommonJS`、`UMD`等规范

## 用法
- 安装
```sh
npm install @mate-ui/conf
```
- 引入
```sh
import { 
  DATA_REGEX_PATTERN, 
  DATA_SEPARATOR,
  DATE_FORMATTER, 
  ASYMMETRIC_CRYPTO_TYPE, 
  SYMMETRIC_CRYPTO_TYPE,
  STORAGE_TYPE,
  DEFAULT_STORAGE_OPTIONS,
  SORT_MODE,
  SORT_TYPE,
  REQUEST_METHOD,
  EMPTY_FUNC,
  EMPTY_ARRAY,
  EMPTY_OBJECT,
  CONTENT_TYPE, 
  DEFAULT_REQUEST_OPTIONS,
  DEFAULT_RESPONSE_OPTIONS
} from '@mate-ui/conf'
```
- API

| 属性/方法 | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| DATA_REGEX_PATTERN | 正则表达式常量 | DATA_REGEX_PATTERN.guid | — |
| DATA_SEPARATOR | 数据分隔符常量 | DATA_SEPARATOR.ampersand | — |
| DATE_FORMATTER | 时间格式化常量 | DATE_FORMATTER.date | — |
| ASYMMETRIC_CRYPTO_TYPE | 非对称加密算法类型 | ASYMMETRIC_CRYPTO_TYPE.md5 | — |
| SYMMETRIC_CRYPTO_TYPE | 对称加密算法类型 | SYMMETRIC_CRYPTO_TYPE.base64 | — |
| STORAGE_TYPE | 存储类型常量 | STORAGE_TYPE.local | — |
| DEFAULT_STORAGE_OPTIONS | 存储配置常量 | — | — |
| SORT_MODE | 排序模式常量 | SORT_MODE.index | — |
| SORT_TYPE | 排序类型常量 | SORT_TYPE.asc | — |
| REQUEST_METHOD | 请求方法常量 | REQUEST_METHOD.get | — |
| EMPTY_FUNC | 空函数类型 | function() {} | — |
| EMPTY_ARRAY | 空数组类型 | [] | — |
| EMPTY_OBJECT | 空对象类型 | {} | — |
| CONTENT_TYPE | 请求数据格式常量 | CONTENT_TYPE.encoded | — |
| DEFAULT_REQUEST_OPTIONS | 默认请求配置常量 | — | — |
| DEFAULT_RESPONSE_OPTIONS | 默认响应配置常量 | — | — |

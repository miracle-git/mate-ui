# @mate-ui/indexdb

> 客户端内存数据库

- 由 `Typescript` 开发，支持完善的类型推断和检查
- 支持按需加载
- 支持 `ESModule`、`CommonJS`、`UMD`等规范

## 用法
- 安装
```sh
npm install @mate-ui/indexdb
```
- 引入
```sh
import IndexDB from '@mate-ui/indexdb'
const db = new IndexDB({ name: 'mate', version: 1, storeName: 'context', keyPath: 'uuid' })
```
- API

|  属性/方法  | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| open | 打开数据库(返回Promise) | db.open() | — |
| add | 添加数据 | db.add('xx') | data |
| put | 更新数据 | db.put('xx') | data |
| getByKey | 获取指定key的数据库(返回Promise) | db.getByKey('mate') | key |
| delete | 删除数据库 | db.delete() | — |
| deleteByKey | 删除指定key的数据库 | db.deleteByKey('mate') | key |
| close | 关闭数据库 | db.close() | — |
| clear | 清除数据库 | db.clear() | — |

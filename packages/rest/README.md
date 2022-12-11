# @mate-ui/rest
> 封装核心库之Restful服务

- 由 `Typescript` 开发，支持完善的类型推断和检查
- 支持按需加载
- 支持 `ESModule`、`CommonJS`、`UMD`等规范

## 用法
- 安装
```sh
npm install @mate-ui/rest
```
- 引入
```sh
import rest, { http } from '@mate-ui/rest'
```
- API
- 地址映射

|  属性/方法  | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| map | 根据当前的地址配置生成Api对象(可配置多前缀与加密) | rest.map({ list: '/api/user/list' }, '/api', { app, mock, crypto }) | config, prefix, { app, mock, crypto } |
| format | 将当前的Api地址的动态参数进行转化为实际的请求url | rest.format(rest.format('/api/mate-ui/service/permission/{project}/account/{user}', { project: 'mateapi', user: 'miracle' })) | url, val1, val2, ... |

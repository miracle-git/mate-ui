# @mate-ui/pubsub

> 消息订阅发布

- 由 `Typescript` 开发，支持完善的类型推断和检查
- 支持按需加载
- 支持 `ESModule`、`CommonJS`、`UMD`等规范

## 用法
- 安装
```sh
npm install @mate-ui/pubsub
```
- 引入
```sh
import PubSub from '@mate-ui/pubsub' // 单例模式
```
- API

|  属性/方法  | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| on | 订阅消息 | PubSub.on('mate', () => {}) | type, handler |
| emit | 发布消息 | PubSub.emit('mate', 'xxx') | type, data |
| off | 退订消息 | PubSub.off('mate', () => {}) | type, handler |

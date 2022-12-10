# @mate-ui/storage
> 封装核心库之本地存储&会话存储

- 由 `Typescript` 开发，支持完善的类型推断和检查
- 支持按需加载
- 支持 `ESModule`、`CommonJS`、`UMD`等规范

## 用法
- 安装
```sh
npm install @mate-ui/storage
```
- 引入
```sh
import storage from '@mate-ui/storage'
```
- API
> 本地存储和会话存储，当使用 `get` 获取值时，除指定 `key` 之外，还可以传入是否加密 `crypto` 或指定对应的加密策略 `strategy` 以及密钥 `key` 和矢量 `iv`，以及默认值 `def` <br/>
> 本地存储和会话存储，当使用 `set` 设置值时，除指定 `key` 和 `val` 之外，还可以传入是否加密 `crypto` 或指定对应的加密策略 `strategy` 以及密钥 `key` 和矢量 `iv` <br/>
> 加密策略 `strategy` 目前支持对称加密: `SYMMETRIC_CRYPTO_TYPE.aes`、`SYMMETRIC_CRYPTO_TYPE des`、`SYMMETRIC_CRYPTO_TYPE.rc4`<br/>

- 本地缓存

|  属性/方法  | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| get | 获取本地存储实例中指定key对应的值 | storage.get('mate-ui') | key, crypto / { strategy, key, iv, def } |
| set | 设置指定key和val到本地储存实例中 | storage.set('mate-ui', '@mate-ui/storage') | key, val, crypto / { strategy, key, iv } |
| remove | 从本地存储实例中删除指定的key | storage.remove('mate-ui') | key |
| clear | 清除所有的本地缓存 | storage.clear() | — |
| clearAll | 清除所有的本地缓存和会话缓存 | storage.clearAll() | — |
| count | 获取本地存储实例中的个数 | storage.count() | — |
| contains | 获取本地存储实例中是否包含指定key的实例 | storage.contains('mate-ui') | key |

- 会话缓存

|  属性/方法  | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| get | 获取会话存储实例中指定key对应的值 | storage.session.get('mate-ui') | key, crypto / { strategy, key, iv, def } |
| set | 设置指定key和val到会话储存实例中 | storage.session.set('mate-ui', '@mate-ui/storage') | key, val, crypto / { strategy, key, iv } |
| remove | 从会话存储实例中删除指定的key | storage.session.remove('mate-ui') | key |
| clear | 清除所有的会话缓存 | storage.session.clear() | — |
| count | 获取会话存储实例中的个数 | storage.session.count() | — |
| contains | 获取会话存储实例中是否包含指定key的实例 | storage.session.contains('mate-ui') | key |


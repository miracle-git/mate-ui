# @mate-ui/crypto
> 封装核心库之数据(对称/非对称)加密&解密

- 由 `Typescript` 开发，支持完善的类型推断和检查
- 支持按需加载
- 支持 `ESModule`、`CommonJS`、`UMD`等规范

## 用法
- 安装
```sh
npm install @mate-ui/crypto
```
- 引入
```sh
import { ASYMMETRIC_CRYPTO_TYPE, SYMMETRIC_CRYPTO_TYPE } from '@mate-ui/conf'
import crypto from '@mate-ui/crypto'
```
- API
> 加密和解密都需要传入对应的策略值，为了防止策略 `strategy` 被提前知晓，建议加解密过程同时传入密钥 `key` 和矢量 `iv` <br/>
> 策略 `strategy` 分为非对称加密策略 `ASYMMETRIC_CRYPTO_TYPE` 和对称解密策略 `SYMMETRIC_CRYPTO_TYPE`<br/>

|  属性/方法  | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| encrypt | 加密当前的数据(需传入加密策略) | crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.md5) | { data, strategy, { key, iv } } |
| decrypt | 解密当前的数据(需传入解密策略) | crypto.decrypt('bWF0ZS11aS1jb3Jl', SYMMETRIC_CRYPTO_TYPE.base64) | { data, strategy, { key, iv } } |

- 策略

|  属性/方法  | 类型 | 示例 |
| ---------- | ---------- | ---------- |
| md5 | 非对称加密 | ASYMMETRIC_CRYPTO_TYPE.md5 |
| sha1 | 非对称加密 | ASYMMETRIC_CRYPTO_TYPE.sha1 |
| sha3 | 非对称加密 | ASYMMETRIC_CRYPTO_TYPE.sha3 |
| sha224 | 非对称加密 | ASYMMETRIC_CRYPTO_TYPE.sha224 |
| sha256 | 非对称加密 | ASYMMETRIC_CRYPTO_TYPE.sha256 |
| sha384 | 非对称加密 | ASYMMETRIC_CRYPTO_TYPE.sha384 |
| sha512 | 非对称加密 | ASYMMETRIC_CRYPTO_TYPE.sha512 |
| hmacmd5 | 非对称加密 | ASYMMETRIC_CRYPTO_TYPE.hmacmd5 |
| hmacsha1 | 非对称加密 | ASYMMETRIC_CRYPTO_TYPE.hmacsha1 |
| hmacsha3 | 非对称加密 | ASYMMETRIC_CRYPTO_TYPE.hmacsha3 |
| hmacsha224 | 非对称加密 | ASYMMETRIC_CRYPTO_TYPE.hmacsha224 |
| hmacsha256 | 非对称加密 | ASYMMETRIC_CRYPTO_TYPE.hmacsha256 |
| hmacsha384 | 非对称加密 | ASYMMETRIC_CRYPTO_TYPE.hmacsha384 |
| hmacsha512 | 非对称加密 | ASYMMETRIC_CRYPTO_TYPE.hmacsha512 |
| pbkdf2 | 非对称加密 | ASYMMETRIC_CRYPTO_TYPE.pbkdf2 |
| evpkdf | 非对称加密 | ASYMMETRIC_CRYPTO_TYPE.evpkdf |
| ripemd160 | 非对称加密 | ASYMMETRIC_CRYPTO_TYPE.ripemd160 |
| base64 | 对称加密 | SYMMETRIC_CRYPTO_TYPE.base64 |
| aes | 对称加密 | SYMMETRIC_CRYPTO_TYPE.aes |
| des | 对称加密 | SYMMETRIC_CRYPTO_TYPE.des |
| rc4 | 对称加密 | SYMMETRIC_CRYPTO_TYPE.rc4 |
| rabbit | 对称加密 | SYMMETRIC_CRYPTO_TYPE.rabbit |
| rabbitlegacy | 对称加密 | SYMMETRIC_CRYPTO_TYPE.rabbitlegacy |

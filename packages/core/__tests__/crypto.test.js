import Crypto from '../src/crypto'
import { ASYMMETRIC_CRYPTO_TYPE, SYMMETRIC_CRYPTO_TYPE } from '../src/config'

const data = 'mate-ui-core'
const key = 'mate-key'
const iv = 'mate-iv'

test('测试：非对称加密算法', () => {
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.md5)).toEqual('d20968a1145ea3cf362ede005dd2c890')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.sha1)).toEqual('997aedf3072782b2fe4e74d9662b6d849d34f9cc')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.sha3)).toEqual('6cd516b0d9595edef76048e35c4b90f534e8484c3617ae70b31edc2407c71022bff7465ec5f461b3c11f93d996f08cddbe4322f8e15862a69eae7ce40daefc0a')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.sha224)).toEqual('01d119a24b6a3fc680180461d6e4586a462bc444e677aa08e8168371')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.sha256)).toEqual('3724f30c5c92027a950b316e5bbee639e79da0b1cc13702b09cf8d5f211a7d15')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.sha384)).toEqual('6616d99a77a775135cdd0a7761748447ff7ceb33f0aca60f4097ae5dc581e7fd4d42c8d4a951e593d04a08c44e9d7d02')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.sha512)).toEqual('af7eb32f2cea4cb2702789f091ed7bcc86e2a07412470cace5917b0dd8eb147f4c7a6f1f508f452c1ef85431c7c7c170965f590a91ab14cabc3228347219d141')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.hmacmd5)).toEqual('4fd31a750356e439943d93421d38665d')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.hmacsha1)).toEqual('35b6c54710152f7a747390a56069212ecfd20f1f')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.hmacsha3)).toEqual('e67fbae2f8a6908da0b49f42b050988ef119ed17c67f109d3e295ce6d0567e185a80eaebd826ab3c330e99a1a458c8d3f7b1494d9ddd53950f52ebf0803d38f7')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.hmacsha224)).toEqual('02d85f83884278e9874c9bad4cfb9f7a67d4d13f91903422cae015dd')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.hmacsha256)).toEqual('ab8b678e365e061c16dc976fd28d331bd4f407a4f317427e0415d571eba0cca1')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.hmacsha384)).toEqual('ac92f1bdc45082c75f02eacb2e8a9d4144026219d19d70d356a83a665a02765988e24b3402bda2e3ef4399044c228494')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.hmacsha512)).toEqual('91d298386288920e7bf7f74a9b9a7c74f66afb5f87407e756669f0ec0cc62dde20d464ea2629d1d8e675401bc0cd1e9c1f2c955b122f7092d3e9b7531ef605c8')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.pbkdf2)).toEqual('c31a72c9639a5ebfbab6d0a64a26c82b')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.evpkdf)).toEqual('de0e778630e8bd3bcaa0bf1a7cfb4be9')
  expect(Crypto.encrypt(data, ASYMMETRIC_CRYPTO_TYPE.ripemd160)).toEqual('33883199650984676e0d8b08191e5d2fdc0b4707')
})

test('测试：对称加密算法', () => {
  expect(Crypto.encrypt(data, SYMMETRIC_CRYPTO_TYPE.base64, { key, iv })).toEqual('bWF0ZS11aS1jb3Jl')
  expect(Crypto.encrypt(data, SYMMETRIC_CRYPTO_TYPE.aes, { key, iv })).toEqual('66d6f0f512888dc401fe711f4bac6697')
  expect(Crypto.encrypt(data, SYMMETRIC_CRYPTO_TYPE.des, { key, iv })).toEqual('0475e66f58584c8818ff98c81627d8d1')
  expect(Crypto.encrypt(data, SYMMETRIC_CRYPTO_TYPE.rc4, { key, iv })).toEqual('b754c7633afb66bb04d9ab64')
  expect(Crypto.encrypt(data, SYMMETRIC_CRYPTO_TYPE.rabbit, { key, iv })).toEqual('0462e491cf3bf927c6004638')
  expect(Crypto.encrypt(data, SYMMETRIC_CRYPTO_TYPE.rabbitlegacy, { key, iv })).toEqual('56abdf33c673679cf5f34c5a')

  expect(Crypto.decrypt('bWF0ZS11aS1jb3Jl', SYMMETRIC_CRYPTO_TYPE.base64, { key, iv })).toEqual(data)
  expect(Crypto.decrypt('66d6f0f512888dc401fe711f4bac6697', SYMMETRIC_CRYPTO_TYPE.aes, { key, iv })).toEqual(data)
  expect(Crypto.decrypt('0475e66f58584c8818ff98c81627d8d1', SYMMETRIC_CRYPTO_TYPE.des, { key, iv })).toEqual(data)
  expect(Crypto.decrypt('b754c7633afb66bb04d9ab64', SYMMETRIC_CRYPTO_TYPE.rc4, { key, iv })).toEqual(data)
  expect(Crypto.decrypt('0462e491cf3bf927c6004638', SYMMETRIC_CRYPTO_TYPE.rabbit, { key, iv })).toEqual(data)
  expect(Crypto.decrypt('56abdf33c673679cf5f34c5a', SYMMETRIC_CRYPTO_TYPE.rabbitlegacy, { key, iv })).toEqual(data)
})

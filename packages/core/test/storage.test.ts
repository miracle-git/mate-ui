import Storage from '../src/storage/main'
import { SYMMETRIC_CRYPTO_TYPE } from '../src/config/main'

const keys = {
  core: 'core',
  web: 'web'
}
const values = {
  core: '@mate-ui/core',
  web: '@mate-ui/web'
}
const def = 'mate-ui'

test('测试：本地缓存(默认值)', () => {
  Storage.clear()
  expect(Storage.get(keys.core, { def })).toEqual(def)
  expect(Storage.get(keys.core)).toEqual(undefined)
})

test('测试：本地缓存(有值)', () => {
  Storage.clear()
  Storage.set(keys.core, values.core)
  Storage.set(keys.web, values.web)

  expect(Storage.get(keys.core)).toEqual(values.core)
  expect(Storage.contains(keys.core)).toEqual(true)
  expect(Storage.count()).toEqual(2)

  Storage.remove(keys.core)
  expect(Storage.get(keys.core)).toEqual(undefined)
  expect(Storage.contains(keys.core)).toEqual(false)
  expect(Storage.count()).toEqual(1)

  Storage.clear()
  expect(Storage.count()).toEqual(0)
})

test('测试：本地缓存(加密)', () => {
  Storage.clear()
  Storage.set(keys.core, values.core, { cryptoType: SYMMETRIC_CRYPTO_TYPE.des })
  expect(Storage.get(keys.core, { cryptoType: SYMMETRIC_CRYPTO_TYPE.des })).toEqual(values.core)
})

test('测试：会话缓存(默认值)', () => {
  Storage.session.clear()
  expect(Storage.session.get(keys.core, { def })).toEqual(def)
  expect(Storage.session.get(keys.core)).toEqual(undefined)
})

test('测试：会话缓存(有值)', () => {
  Storage.session.clear()
  Storage.session.set(keys.core, values.core)
  Storage.session.set(keys.web, values.web)

  expect(Storage.session.get(keys.core)).toEqual(values.core)
  expect(Storage.session.contains(keys.core)).toEqual(true)
  expect(Storage.session.count()).toEqual(2)

  Storage.session.remove(keys.core)
  expect(Storage.session.get(keys.core)).toEqual(undefined)
  expect(Storage.session.contains(keys.core)).toEqual(false)
  expect(Storage.session.count()).toEqual(1)

  Storage.session.clear()
  expect(Storage.session.count()).toEqual(0)
})

test('测试：会话缓存(加密)', () => {
  Storage.session.clear()
  Storage.session.set(keys.core, values.core, { cryptoType: SYMMETRIC_CRYPTO_TYPE.des })
  expect(Storage.session.get(keys.core, { cryptoType: SYMMETRIC_CRYPTO_TYPE.des })).toEqual(values.core)
})

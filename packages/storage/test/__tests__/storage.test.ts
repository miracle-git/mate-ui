/**
 * @jest-environment jsdom
 */
import { SYMMETRIC_CRYPTO_TYPE } from '@mate-ui/conf'
import storage from '../../src'

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
  storage.clear()
  expect(storage.get(keys.core, { def })).toEqual(def)
  expect(storage.get(keys.core)).toEqual(undefined)
})

test('测试：本地缓存(有值)', () => {
  storage.clear()
  storage.set(keys.core, values.core)
  storage.set(keys.web, values.web)

  expect(storage.get(keys.core)).toEqual(values.core)
  expect(storage.contains(keys.core)).toEqual(true)
  expect(storage.count()).toEqual(2)

  storage.remove(keys.core)
  expect(storage.get(keys.core)).toEqual(undefined)
  expect(storage.contains(keys.core)).toEqual(false)
  expect(storage.count()).toEqual(1)

  storage.clear()
  expect(storage.count()).toEqual(0)
})

test('测试：本地缓存(加密)', () => {
  storage.clear()
  storage.set(keys.core, values.core, { strategy: SYMMETRIC_CRYPTO_TYPE.des })
  expect(storage.get(keys.core, { strategy: SYMMETRIC_CRYPTO_TYPE.des })).toEqual(values.core)
})

test('测试：会话缓存(默认值)', () => {
  storage.session.clear()
  expect(storage.session.get(keys.core, { def })).toEqual(def)
  expect(storage.session.get(keys.core)).toEqual(undefined)
})

test('测试：会话缓存(有值)', () => {
  storage.session.clear()
  storage.session.set(keys.core, values.core)
  storage.session.set(keys.web, values.web)

  expect(storage.session.get(keys.core)).toEqual(values.core)
  expect(storage.session.contains(keys.core)).toEqual(true)
  expect(storage.session.count()).toEqual(2)

  storage.session.remove(keys.core)
  expect(storage.session.get(keys.core)).toEqual(undefined)
  expect(storage.session.contains(keys.core)).toEqual(false)
  expect(storage.session.count()).toEqual(1)

  storage.session.clear()
  expect(storage.session.count()).toEqual(0)
})

test('测试：会话缓存(加密)', () => {
  storage.session.clear()
  storage.session.set(keys.core, values.core, { strategy: SYMMETRIC_CRYPTO_TYPE.des })
  expect(storage.session.get(keys.core, { strategy: SYMMETRIC_CRYPTO_TYPE.des })).toEqual(values.core)
})



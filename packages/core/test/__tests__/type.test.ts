import { Type } from '../../src'

test('测试：是否包含属性', () => {
  expect(Type.isProp({ name: 'mate-ui' }, 'name')).toEqual(true)
  expect(Type.isProp({ name: 'mate-ui' }, 'id')).toEqual(false)
})

test('测试：是否为真或0(排除null,undefined)', () => {
  expect(Type.isTrueOrZero('mate-ui')).toEqual(true)
  expect(Type.isTrueOrZero(0)).toEqual(true)
  expect(Type.isTrueOrZero('0')).toEqual(true)
  expect(Type.isTrueOrZero(null)).toEqual(false)
  expect(Type.isTrueOrZero(undefined)).toEqual(false)
})

test('测试：是否为null或undefined(排除0)', () => {
  expect(Type.isNullOrUndefined(null)).toEqual(true)
  expect(Type.isNullOrUndefined(undefined)).toEqual(true)
  expect(Type.isNullOrUndefined('0')).toEqual(false)
  expect(Type.isNullOrUndefined('mate-ui')).toEqual(false)
})

test('测试：是否为数字/布尔/GUID/邮箱/身份证', () => {
  expect(Type.isNumber(1)).toEqual(true)
  expect(Type.isBoolean(true)).toEqual(true)
  expect(Type.isGuid('CB6A33EB-E909-D4A7-95F0-9F599A4CFFB9')).toEqual(true)
  expect(Type.isEmail('miracle@mate-ui.com')).toEqual(true)
  expect(Type.isIdCard('511381198408086860')).toEqual(true)
})

test('测试：是否为手机/座机/电话', () => {
  expect(Type.isMobilePhone('13866668888')).toEqual(true)
  expect(Type.isTelPhone('010-66668888')).toEqual(true)
  expect(Type.isPhone('13866668888')).toEqual(true)
})

test('测试：是否为合法密码(由8~30位数字/字母/下划线组成)', () => {
  expect(Type.isValidPassword('mate-ui')).toEqual(false)
  expect(Type.isValidPassword('@mate-ui/core@1.0.0')).toEqual(true)
  expect(Type.isValidPassword('@mate-ui/core@1.0.0', { min: 5, max: 10 })).toEqual(false)
})

test('测试：是否为合法日期', () => {
  expect(Type.isValidDate('mate-ui')).toEqual(false)
  expect(Type.isValidDate(new Date())).toEqual(true)
  expect(Type.isValidDate(new Date('2022-01-01 00:00:00'))).toEqual(true)
})

test('测试：是否为字符串/空字符串/JSON字符串', () => {
  expect(Type.isString('mate-ui')).toEqual(true)
  expect(Type.isEmptyString('')).toEqual(true)
  expect(Type.isEmptyString('   ')).toEqual(true)
  expect(Type.isJsonString('mate-ui')).toEqual(false)
  expect(Type.isJsonString('[{"name":"mate-ui"}]')).toEqual(true)
  expect(Type.isJsonString('{"name":"mate-ui"}')).toEqual(true)
})

test('测试：是否为函数/空函数', () => {
  expect(Type.isFunction(function () { return 'mate-ui' })).toEqual(true)
  expect(Type.isFunction(() => 'mate-ui')).toEqual(true)
  expect(Type.isEmptyFunction(function () {})).toEqual(true)
  expect(Type.isEmptyFunction(() => {})).toEqual(true)
})

test('测试：是否为数组/空数组', () => {
  expect(Type.isArray(['@mate-ui/core', '@mate-ui/web'])).toEqual(true)
  expect(Type.isEmptyArray([])).toEqual(true)
  expect(Type.isEmptyArray(null)).toEqual(true)
  expect(Type.isEmptyArray(undefined)).toEqual(true)
})

test('测试：是否为对象/空对象', () => {
  expect(Type.isObject({ name: 'mate-ui' })).toEqual(true)
  expect(Type.isEmptyObject({})).toEqual(true)
  expect(Type.isEmptyObject(null)).toEqual(true)
  expect(Type.isEmptyObject(undefined)).toEqual(true)
})

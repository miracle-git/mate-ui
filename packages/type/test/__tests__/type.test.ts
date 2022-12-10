import {
  isProp,
  isTrueOrZero,
  isNullOrUndefined,
  isNumber,
  isBoolean,
  isGuid,
  isEmail,
  isIdCard,
  isMobilePhone,
  isTelPhone,
  isPhone,
  isValidPassword,
  isValidDate,
  isString,
  isEmptyString,
  isJsonString,
  isFunction,
  isEmptyFunction,
  isArray,
  isEmptyArray,
  isObject,
  isEmptyObject
} from '../../src'

test('测试：是否包含属性', () => {
  expect(isProp({ name: 'mate-ui' }, 'name')).toEqual(true)
  expect(isProp({ name: 'mate-ui' }, 'id')).toEqual(false)
})

test('测试：是否为真或0(排除null,undefined)', () => {
  expect(isTrueOrZero('mate-ui')).toEqual(true)
  expect(isTrueOrZero(0)).toEqual(true)
  expect(isTrueOrZero('0')).toEqual(true)
  expect(isTrueOrZero(null)).toEqual(false)
  expect(isTrueOrZero(undefined)).toEqual(false)
})

test('测试：是否为null或undefined(排除0)', () => {
  expect(isNullOrUndefined(null)).toEqual(true)
  expect(isNullOrUndefined(undefined)).toEqual(true)
  expect(isNullOrUndefined('0')).toEqual(false)
  expect(isNullOrUndefined('mate-ui')).toEqual(false)
})

test('测试：是否为数字/布尔/GUID/邮箱/身份证', () => {
  expect(isNumber(1)).toEqual(true)
  expect(isBoolean(true)).toEqual(true)
  expect(isGuid('CB6A33EB-E909-D4A7-95F0-9F599A4CFFB9')).toEqual(true)
  expect(isEmail('miracle@mate-ui.com')).toEqual(true)
  expect(isIdCard('511381198408086860')).toEqual(true)
})

test('测试：是否为手机/座机/电话', () => {
  expect(isMobilePhone('13866668888')).toEqual(true)
  expect(isTelPhone('010-66668888')).toEqual(true)
  expect(isPhone('13866668888')).toEqual(true)
})

test('测试：是否为合法密码(由8~30位数字/字母/下划线组成)', () => {
  expect(isValidPassword('mate-ui')).toEqual(false)
  expect(isValidPassword('@mate-ui/core@1.0.0')).toEqual(true)
  expect(isValidPassword('@mate-ui/core@1.0.0', { min: 5, max: 10 })).toEqual(false)
})

test('测试：是否为合法日期', () => {
  expect(isValidDate('mate-ui')).toEqual(false)
  expect(isValidDate(new Date())).toEqual(true)
  expect(isValidDate(new Date('2022-01-01 00:00:00'))).toEqual(true)
})

test('测试：是否为字符串/空字符串/JSON字符串', () => {
  expect(isString('mate-ui')).toEqual(true)
  expect(isEmptyString('')).toEqual(true)
  expect(isEmptyString('   ')).toEqual(true)
  expect(isJsonString('mate-ui')).toEqual(false)
  expect(isJsonString('[{"name":"mate-ui"}]')).toEqual(true)
  expect(isJsonString('{"name":"mate-ui"}')).toEqual(true)
})

test('测试：是否为函数/空函数', () => {
  expect(isFunction(function () { return 'mate-ui' })).toEqual(true)
  expect(isFunction(() => 'mate-ui')).toEqual(true)
  expect(isEmptyFunction(function () {})).toEqual(true)
  expect(isEmptyFunction(() => {})).toEqual(true)
})

test('测试：是否为数组/空数组', () => {
  expect(isArray(['@mate-ui/core', '@mate-ui/web'])).toEqual(true)
  expect(isEmptyArray([])).toEqual(true)
  expect(isEmptyArray(null)).toEqual(true)
  expect(isEmptyArray(undefined)).toEqual(true)
})

test('测试：是否为对象/空对象', () => {
  expect(isObject({ name: 'mate-ui' })).toEqual(true)
  expect(isEmptyObject({})).toEqual(true)
  expect(isEmptyObject(null)).toEqual(true)
  expect(isEmptyObject(undefined)).toEqual(true)
})

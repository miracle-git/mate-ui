/**
 * @jest-environment jsdom
 */
import {
  formatter,
  string,
  number,
  object,
  random,
  validator
} from '../../src'

test('测试：pick', () => {
  const lib = [
    { id: 1, name: '@mate-ui/core', alias: 'core' },
    { id: 2, name: '@mate-ui/api', alias: 'api' },
    { id: 3, name: '@mate-ui/util', alias: 'util' }
  ]
  const core = { id: 1, name: '@mate-ui/core', alias: 'core' }
  expect(object.pick(lib, ['id', 'alias'])).toEqual([
    { id: 1, alias: 'core' },
    { id: 2, alias: 'api' },
    { id: 3, alias: 'util' }
  ])
  expect(object.pick(core, ['id', 'alias'])).toEqual({
    id: 1, alias: 'core'
  })
})

test('测试：draw', () => {
  const core = { id: 1, name: '@mate-ui/core', alias: 'core' }
  expect(object.draw(core, 'id')).toEqual(
    { name: '@mate-ui/core', alias: 'core' }
  )
  expect(object.draw(core, 'id', 'alias')).toEqual(
    { name: '@mate-ui/core' }
  )
})

test('测试：flatten', () => {
  const lib = {
    name: '@mate-ui',
    version: '1.0.0',
    lib: {
      core: '@mate-ui/core',
      api: '@mate-ui/api',
      util: '@mate-ui/util',
      alias: ['core', 'api', 'util']
    }
  }
  expect(object.flatten(lib)).toEqual({
    'name': '@mate-ui',
    'version': '1.0.0',
    'lib.core': '@mate-ui/core',
    'lib.api': '@mate-ui/api',
    'lib.util': '@mate-ui/util',
    'lib.alias.[0]': 'core',
    'lib.alias.[1]': 'api',
    'lib.alias.[2]': 'util'
  })
})

test('测试：secure', () => {
  const phone = '13566668888'
  expect(string.secure(phone)).toEqual('135****8888')
  expect(string.secure(phone, { stars: 3 })).toEqual('135***8888')
  expect(string.secure(phone, { before: 2, after: 5 })).toEqual('13****68888')
  expect(string.secure(phone, { ignore: true })).toEqual(phone)
})

test('测试：oneOf', () => {
  const lib = ['core', 'api', 'util']
  expect(validator.oneOf('core', lib, 'name')).toBeTruthy()
  expect(validator.oneOf('web', lib, 'name')).toBeFalsy()
})

test('测试：rangeOf(包含边界值)', () => {
  expect(validator.rangeOf(0.5, 'opacity')).toBeTruthy()
  expect(validator.rangeOf(0, 'opacity')).toBeTruthy()
  expect(validator.rangeOf(1, 'opacity')).toBeTruthy()
  expect(validator.rangeOf(0.5, 'opacity', 1, 2)).toBeFalsy()
})

test('测试：betweenOf(不包含边界值)', () => {
  expect(validator.betweenOf(0.5, 'opacity')).toBeTruthy()
  expect(validator.betweenOf(0, 'opacity')).toBeFalsy()
  expect(validator.betweenOf(1, 'opacity')).toBeFalsy()
  expect(validator.betweenOf(0.5, 'opacity', 1, 2)).toBeFalsy()
})

test('测试：limitOf', () => {
  expect(validator.limitOf('core', 'name')).toBeTruthy()
  expect(validator.limitOf(['core', 'api', 'util'], 'name')).toBeTruthy()
  expect(validator.limitOf(['core', 'api', 100], 'name')).toBeFalsy()
})

test('测试：indexOf', () => {
  expect(string.indexOf('@mate-ui/core', 'core')).toBeTruthy()
  expect(string.indexOf('@mate-ui/core', 'Core')).toBeTruthy()
  expect(string.indexOf('@mate-ui/core', 'Core', false)).toBeFalsy()
  expect(string.indexOf('@mate-ui/core', 'web')).toBeFalsy()
})

test('测试：trim&trimEnd&trimHtml', () => {
  expect(string.trim(' @mate ui ')).toEqual('@mate ui')
  expect(string.trim(' @mate ui ', true)).toEqual('@mateui')
  expect(string.trimEnd('100.')).toEqual('100')
  expect(string.trimEnd('@mate-ui@1.0.0.')).toEqual('@mate-ui@1.0.0')
  expect(string.trimEnd('@mate-ui@1.0.0@', '@')).toEqual('@mate-ui@1.0.0')
  expect(string.trimEnd('@mate-ui@1.0.0', '@')).toEqual('@mate-ui@1.0.0')
  expect(string.trimHtml('<span style="color:red">@mate-ui@1.0.0</span>')).toEqual('@mate-ui@1.0.0')
})

test('测试：highlight', () => {
  expect(string.highlight('@mate-ui/core', 'core')).toEqual('@mate-ui/<span style="color:#f81d22;">core</span>')
  expect(string.highlight('@mate-ui/core', 'web')).toEqual('@mate-ui/core')
})

test('测试：query', () => {
  expect(string.query('https://www.mate-ui.com?name=mate&package=core')).toEqual({ name: 'mate', package: 'core' })
})

test('测试：formatter', () => {
  expect(formatter.number('10088.2321')).toEqual('10088.23')
  expect(formatter.number('10088.2321', { thousandth: true })).toEqual('10,088.23')
  expect(formatter.number('10088.2321', { thousandth: true, precision: 3 })).toEqual('10,088.232')
  expect(formatter.number('10088.0000', { thousandth: true, pretty: true })).toEqual('10,088')
  expect(formatter.integer('10088.2321')).toEqual('10088')
  expect(formatter.integer('10088.2321', { thousandth: true })).toEqual('10,088')
  expect(formatter.price('10088.2321')).toEqual('10,088.23')
  expect(formatter.price('10088.2321', { unit: '$' })).toEqual('$10,088.23')
  expect(formatter.price('10088.2321', { unit: '$', prefix: false })).toEqual('10,088.23$')
})

test('测试：number', () => {
  expect(number.pretty('10088.2321')).toEqual('10088.2321')
  expect(number.pretty('10088.0000')).toEqual('10088')
  expect(number.trimEndDot('10088.')).toEqual('10088')
})

test('测试：random', () => {
  expect(random.string(16).length).toEqual(16)
  expect(random.number(10, 20)).toBeGreaterThan(10)
  expect(random.number(10, 20)).toBeLessThan(20)
})

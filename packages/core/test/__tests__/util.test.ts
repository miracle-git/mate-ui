/**
 * @jest-environment jsdom
 */
import { $f, $n, $o, $s, $r, $v } from '../../src'

test('测试：pick', () => {
  const lib = [
    { id: 1, name: '@mate-ui/core', alias: 'core' },
    { id: 2, name: '@mate-ui/api', alias: 'api' },
    { id: 3, name: '@mate-ui/util', alias: 'util' }
  ]
  const core = { id: 1, name: '@mate-ui/core', alias: 'core' }
  expect($o.pick(lib, ['id', 'alias'])).toEqual([
    { id: 1, alias: 'core' },
    { id: 2, alias: 'api' },
    { id: 3, alias: 'util' }
  ])
  expect($o.pick(core, ['id', 'alias'])).toEqual({
    id: 1, alias: 'core'
  })
})

test('测试：draw', () => {
  const core = { id: 1, name: '@mate-ui/core', alias: 'core' }
  expect($o.draw(core, 'id')).toEqual(
    { name: '@mate-ui/core', alias: 'core' }
  )
  expect($o.draw(core, 'id', 'alias')).toEqual(
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
  expect($o.flatten(lib)).toEqual({
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
  expect($s.secure(phone)).toEqual('135****8888')
  expect($s.secure(phone, { stars: 3 })).toEqual('135***8888')
  expect($s.secure(phone, { before: 2, after: 5 })).toEqual('13****68888')
  expect($s.secure(phone, { ignore: true })).toEqual(phone)
})

test('测试：oneOf', () => {
  const lib = ['core', 'api', 'util']
  expect($v.oneOf('core', lib, 'name')).toBeTruthy()
  expect($v.oneOf('web', lib, 'name')).toBeFalsy()
})

test('测试：rangeOf(包含边界值)', () => {
  expect($v.rangeOf(0.5, 'opacity')).toBeTruthy()
  expect($v.rangeOf(0, 'opacity')).toBeTruthy()
  expect($v.rangeOf(1, 'opacity')).toBeTruthy()
  expect($v.rangeOf(0.5, 'opacity', 1, 2)).toBeFalsy()
})

test('测试：betweenOf(不包含边界值)', () => {
  expect($v.betweenOf(0.5, 'opacity')).toBeTruthy()
  expect($v.betweenOf(0, 'opacity')).toBeFalsy()
  expect($v.betweenOf(1, 'opacity')).toBeFalsy()
  expect($v.betweenOf(0.5, 'opacity', 1, 2)).toBeFalsy()
})

test('测试：limitOf', () => {
  expect($v.limitOf('core', 'name')).toBeTruthy()
  expect($v.limitOf(['core', 'api', 'util'], 'name')).toBeTruthy()
  expect($v.limitOf(['core', 'api', 100], 'name')).toBeFalsy()
})

test('测试：indexOf', () => {
  expect($s.indexOf('@mate-ui/core', 'core')).toBeTruthy()
  expect($s.indexOf('@mate-ui/core', 'Core')).toBeTruthy()
  expect($s.indexOf('@mate-ui/core', 'Core', false)).toBeFalsy()
  expect($s.indexOf('@mate-ui/core', 'web')).toBeFalsy()
})

test('测试：trim&trimEnd&trimHtml', () => {
  expect($s.trim(' @mate ui ')).toEqual('@mate ui')
  expect($s.trim(' @mate ui ', true)).toEqual('@mateui')
  expect($s.trimEnd('100.')).toEqual('100')
  expect($s.trimEnd('@mate-ui@1.0.0.')).toEqual('@mate-ui@1.0.0')
  expect($s.trimEnd('@mate-ui@1.0.0@', '@')).toEqual('@mate-ui@1.0.0')
  expect($s.trimEnd('@mate-ui@1.0.0', '@')).toEqual('@mate-ui@1.0.0')
  expect($s.trimHtml('<span style="color:red">@mate-ui@1.0.0</span>')).toEqual('@mate-ui@1.0.0')
})

test('测试：highlight', () => {
  expect($s.highlight('@mate-ui/core', 'core')).toEqual('@mate-ui/<span style="color:#f81d22;">core</span>')
  expect($s.highlight('@mate-ui/core', 'web')).toEqual('@mate-ui/core')
})

test('测试：query', () => {
  expect($s.query('https://www.mate-ui.com?name=mate&package=core')).toEqual({ name: 'mate', package: 'core' })
})

test('测试：formatter', () => {
  expect($f.number('10088.2321')).toEqual('10088.23')
  expect($f.number('10088.2321', { thousandth: true })).toEqual('10,088.23')
  expect($f.number('10088.2321', { thousandth: true, precision: 3 })).toEqual('10,088.232')
  expect($f.number('10088.0000', { thousandth: true, pretty: true })).toEqual('10,088')
  expect($f.integer('10088.2321')).toEqual('10088')
  expect($f.integer('10088.2321', { thousandth: true })).toEqual('10,088')
  expect($f.price('10088.2321')).toEqual('10,088.23')
  expect($f.price('10088.2321', { unit: '$' })).toEqual('$10,088.23')
  expect($f.price('10088.2321', { unit: '$', prefix: false })).toEqual('10,088.23$')
})

test('测试：number', () => {
  expect($n.pretty('10088.2321')).toEqual('10088.2321')
  expect($n.pretty('10088.0000')).toEqual('10088')
  expect($n.trimEndDot('10088.')).toEqual('10088')
})

test('测试：random', () => {
  expect($r.string(16).length).toEqual(16)
  expect($r.number(10, 20)).toBeGreaterThan(10)
  expect($r.number(10, 20)).toBeLessThan(20)
})

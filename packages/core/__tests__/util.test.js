import {
  pick,
  draw,
  flatten,
  secure,
  oneOf,
  rangeOf,
  betweenOf,
  limitOf,
  indexOf,
  trim,
  trimEnd,
  trimHtml,
  encode,
  decode,
  highlight,
  frozen,
  querystring
} from '../src/util'

test('测试：pick', () => {
  const lib = [
    { id: 1, name: '@mate-ui/core', alias: 'core' },
    { id: 2, name: '@mate-ui/api', alias: 'api' },
    { id: 3, name: '@mate-ui/util', alias: 'util' }
  ]
  const core = { id: 1, name: '@mate-ui/core', alias: 'core' }
  expect(pick(lib, ['id', 'alias'])).toEqual([
    { id: 1, alias: 'core' },
    { id: 2, alias: 'api' },
    { id: 3, alias: 'util' }
  ])
  expect(pick(core, ['id', 'alias'])).toEqual({
    id: 1, alias: 'core'
  })
})

test('测试：draw', () => {
  const core = { id: 1, name: '@mate-ui/core', alias: 'core' }
  expect(draw(core, 'id')).toEqual(
    { name: '@mate-ui/core', alias: 'core' }
  )
  expect(draw(core, 'id', 'alias')).toEqual(
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
  expect(flatten(lib)).toEqual({
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
  expect(secure(phone)).toEqual('135****8888')
  expect(secure(phone, { stars: 3 })).toEqual('135***8888')
  expect(secure(phone, { before: 2, after: 5 })).toEqual('13****68888')
  expect(secure(phone, { ignore: true })).toEqual(phone)
})

test('测试：oneOf', () => {
  const lib = ['core', 'api', 'util']
  expect(oneOf('core', lib, 'name')).toBeTruthy()
  expect(oneOf('web', lib, 'name')).toBeFalsy()
})

test('测试：rangeOf(包含边界值)', () => {
  expect(rangeOf(0.5, 'opacity')).toBeTruthy()
  expect(rangeOf(0, 'opacity')).toBeTruthy()
  expect(rangeOf(1, 'opacity')).toBeTruthy()
  expect(rangeOf(0.5, 'opacity', 1, 2)).toBeFalsy()
})

test('测试：betweenOf(不包含边界值)', () => {
  expect(betweenOf(0.5, 'opacity')).toBeTruthy()
  expect(betweenOf(0, 'opacity')).toBeFalsy()
  expect(betweenOf(1, 'opacity')).toBeFalsy()
  expect(betweenOf(0.5, 'opacity', 1, 2)).toBeFalsy()
})

test('测试：limitOf', () => {
  expect(limitOf('core', 'name')).toBeTruthy()
  expect(limitOf(['core', 'api', 'util'], 'name')).toBeTruthy()
  expect(limitOf(['core', 'api', 100], 'name')).toBeFalsy()
})

test('测试：indexOf', () => {
  expect(indexOf('@mate-ui/core', 'core')).toBeTruthy()
  expect(indexOf('@mate-ui/core', 'Core')).toBeTruthy()
  expect(indexOf('@mate-ui/core', 'Core', false)).toBeFalsy()
  expect(indexOf('@mate-ui/core', 'web')).toBeFalsy()
})

test('测试：trim&trimEnd&trimHtml', () => {
  expect(trim(' @mate ui ')).toEqual('@mate ui')
  expect(trim(' @mate ui ', true)).toEqual('@mateui')
  expect(trimEnd('100.')).toEqual('100')
  expect(trimEnd('@mate-ui@1.0.0.')).toEqual('@mate-ui@1.0.0')
  expect(trimEnd('@mate-ui@1.0.0@', '@')).toEqual('@mate-ui@1.0.0')
  expect(trimEnd('@mate-ui@1.0.0', '@')).toEqual('@mate-ui@1.0.0')
  expect(trimHtml('<span style="color:red">@mate-ui@1.0.0</span>')).toEqual('@mate-ui@1.0.0')
})

test('测试：encode&decode', () => {
  expect(encode('<p>@mate-ui/core</p>')).toEqual('&lt;p&gt;@mate-ui/core&lt;/p&gt;')
  expect(decode('&lt;p&gt;@mate-ui/core&lt;/p&gt;')).toEqual('<p>@mate-ui/core</p>')
})

test('测试：highlight', () => {
  expect(highlight('@mate-ui/core', 'core')).toEqual('@mate-ui/<span style="color:#f81d22;">core</span>')
  expect(highlight('@mate-ui/core', 'web')).toEqual('@mate-ui/core')
})

test('测试：frozen', () => {
  frozen('mate', 'mate-ui')
  expect(window.mate).toEqual('mate-ui')
  // window.mate = '@mate-ui'
  // expect(window.mate).toEqual('mate-ui')
  delete window.mate
  expect(window.mate).toEqual('mate-ui')
})

test('测试：querystring', () => {
  expect(querystring('http://www.mate-ui.com?name=mate&package=core')).toEqual({ name: 'mate', package: 'core' })
})

import { StringUtil, NumberUtil, ArrayUtil, ObjectUtil } from '../src/util/main'

test('测试：字符串工具类', () => {
  expect(StringUtil.kebab('mateUiCore')).toEqual('mate-ui-core')
  expect(StringUtil.camel('mate-ui-core')).toEqual('mateUiCore')
  expect(StringUtil.camel('mate_ui_core')).toEqual('mateUiCore')
  expect(StringUtil.capital('mateUiCore')).toEqual('MateUiCore')
  expect(StringUtil.trim(' mate Ui Core ')).toEqual('mate Ui Core')
  expect(StringUtil.trim(' mate Ui Core 中 国 ')).toEqual('mate Ui Core 中 国')
  expect(StringUtil.trim(' mate Ui Core ', { all: true })).toEqual('mateUiCore')
  expect(StringUtil.trim(' mate Ui Core 中 国 ', { all: true })).toEqual('mateUiCore中国')
  expect(StringUtil.trim('<div><span style="color:red">html 字符串</span></div>', { html: true })).toEqual('html 字符串')
  expect(StringUtil.trim('mate ui core', { end: 'core' })).toEqual('mate ui')
  expect(StringUtil.len('mate ui core')).toEqual(12)
  expect(StringUtil.len('mate Ui Core 中 国')).toEqual(18)
})

test('测试：数字工具类', () => {
  expect(NumberUtil.pretty(20481215.00242)).toEqual(20481215.00242)
  expect(NumberUtil.pretty(20481215.00)).toEqual(20481215)
  expect(NumberUtil.pretty('20481215.00')).toEqual('20481215')
  expect(NumberUtil.pretty('mate')).toEqual('mate')
})

test('测试：数组工具类', () => {
  const arr = [{ id: 1, name: 'Miracle', age: 20 }, { id: 2, name: 'Jack', age: 32 }]
  const res = [{ id: 1, name: 'Miracle' }, { id: 2, name: 'Jack' }]
  expect(ArrayUtil.oneOf(18, [12, 18, 32, 48, 60])).toEqual(true)
  expect(ArrayUtil.range(18, 12, 18)).toEqual(true)
  expect(ArrayUtil.between(18, 12, 18)).toEqual(false)
  expect(ArrayUtil.pick(arr, 'id', 'name')).toEqual(res)
  expect(ArrayUtil.pick(arr, ['id', 'name'])).toEqual(res)
})

test('测试：对象工具类', () => {
  const obj = { id: 1, name: 'Miracle', age: 20 }
  const user = { id: 1, name: 'Miracle', age: 20, address: { office: { province: '广东', city: '深圳' } }, packages: ['core', { name: 'web', version: '1.0' }, 'icon'] }
  const res = { id: 1, name: 'Miracle' }
  expect(ObjectUtil.pick(obj, 'id', 'name')).toEqual(res)
  expect(ObjectUtil.pick(obj, ['id', 'name'])).toEqual(res)
  expect(ObjectUtil.value('address.office', user)).toEqual({ province: '广东', city: '深圳' })
  expect(ObjectUtil.value('address.office.province', user)).toEqual('广东')
  expect(ObjectUtil.value('address.office.area', user, '龙岗区')).toEqual('龙岗区')
  expect(ObjectUtil.value('packages.1.version', user)).toEqual('1.0')
  expect(ObjectUtil.value('packages.1.size', user)).toEqual(undefined)
  expect(ObjectUtil.flatten(user)).toEqual({
    id: 1, name: 'Miracle', age: 20,
    'address.office.province': '广东',
    'address.office.city': '深圳',
    'packages.0': 'core',
    'packages.1.name': 'web',
    'packages.1.version': '1.0',
    'packages.2': 'icon'
  })
})

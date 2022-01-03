import Random from '../src/random'
import Type from '../src/type'

test('测试：产生一个随机数(3到10)', () => {
  expect(Random.number(3, 10)).toBeGreaterThanOrEqual(3)
  expect(Random.number(3, 10)).toBeLessThanOrEqual(10)
})

test('测试：产生一个随机颜色(100到200)', () => {
  expect(Random.color(-1, 200).error).toEqual('颜色区间值min,max都必须在[0,255]之间')
  expect(Random.color(100, 300).error).toEqual('颜色区间值min,max都必须在[0,255]之间')
  expect(Random.color(200, 100).error).toEqual('颜色区间值min必须小于max')
  expect(Random.color(100, 200, 2).error).toEqual('颜色模糊值alpha都必须在[0,1]之间')
  expect(Random.color(100, 200)).toBeTruthy()
  expect(Random.color(100, 200, .5)).toBeTruthy()
})

test('测试：产生一个随机字符串', () => {
  expect(Random.string().length).toEqual(32)
  expect(Random.string(16).length).toEqual(16)
  expect(Random.string(8, true).length).toEqual(21)
})

test('测试：产生一个随机不重复的UUID', () => {
  expect(Random.uuid().length).toEqual(10)
  expect(Random.uuid(16).length).toEqual(16)
})

test('测试：产生一个随机的GUID', () => {
  expect(Type.isGuid(Random.guid())).toBeTruthy()
})

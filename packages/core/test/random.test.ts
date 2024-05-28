import Random from '../src/random/main'

test('测试：随机字符串', () => {
  expect(Random.string().length).toEqual(32)
  expect(Random.string(16).length).toEqual(16)
})

test('测试：随机数字', () => {
  expect(Random.number(10, 20)).toBeGreaterThanOrEqual(10)
  expect(Random.number(10, 20)).toBeLessThanOrEqual(20)
})

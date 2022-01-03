import Formatter from '../src/formatter'

test('测试：格式化数字', () => {
  expect(Formatter.integer(10242048.23456)).toEqual('10242048')
  expect(Formatter.number(10242048.23456)).toEqual('10242048.23')
  expect(Formatter.number(10242048.23456, 3)).toEqual('10242048.235')
  expect(Formatter.price(10242048.23456)).toEqual('10,242,048.23')
  expect(Formatter.price(10242048.23456, 3)).toEqual('10,242,048.235')
})

test('测试：格式化日期', () => {
  const timestamp = 1350052653
  expect(Formatter.date(timestamp)).toEqual('2012-10-12')
  expect(Formatter.datetime(timestamp)).toEqual('2012-10-12 22:37:33')
  expect(Formatter.shortDatetime(timestamp)).toEqual('2012-10-12 22:37')
  expect(Formatter.time(timestamp)).toEqual('22:37:33')
  expect(Formatter.shortTime(timestamp)).toEqual('22:37')
})

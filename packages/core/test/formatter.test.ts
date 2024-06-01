import Formatter from '../src/formatter/main'

test('格式化：字符串', () => {
  expect(Formatter.string('{0} is a library developed by {1}', 'Mate UI', 'Miracle He')).toEqual(
    'Mate UI is a library developed by Miracle He'
  )
  expect(
    Formatter.string('{library} is a library developed by {author}', { library: 'Mate UI', author: 'Miracle He' })
  ).toEqual('Mate UI is a library developed by Miracle He')
})

test('格式化：日期', () => {
  expect(Formatter.date(new Date(2024, 5, 28), 'yyyy-MM-dd')).toEqual('2024-06-28')
  expect(Formatter.date('2024-05-28 12:25:30', 'yyyy-MM-dd hh:mm')).toEqual('2024-05-28 12:25')
  expect(Formatter.date('mate', 'yyyy-MM-dd')).toEqual('mate')
})

test('格式化：数字', () => {
  expect(Formatter.number('20481215.00242', { thousandth: true })).toEqual('20,481,215.00')
  expect(Formatter.number('20481215.00242', { thousandth: true, precision: 4 })).toEqual('20,481,215.0024')
  expect(Formatter.number('20481215.00242', { thousandth: true, pretty: true })).toEqual('20,481,215')
  expect(Formatter.number('mate', { symbol: '--' })).toEqual('--')
})

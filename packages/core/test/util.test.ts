import { StringUtil } from '../src/util/main'

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
})

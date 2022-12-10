# @mate-ui/type

> 数据类型检测&判断

- 由 `Typescript` 开发，支持完善的类型推断和检查
- 支持按需加载
- 支持 `ESModule`、`CommonJS`、`UMD`等规范

## 用法
- 安装
```sh
npm install @mate-ui/type
```
- 引入
```sh
import { 
  isProp, 
  isTrueOrZero, 
  isNullOrUndefined, 
  isNumber, 
  isBoolean,
  isString,
  isEmptyString,
  isJsonString,
  isFunction,
  isEmptyFunction,
  isArray,
  isEmptyArray,
  isObject, 
  isEmptyObject,
  isPlainObject,
  isGuid,
  isMobilePhone,
  isTelPhone,
  isPhone,
  isEmail,
  isIdCard,
  isValidPassword,
  isValidDate
} from '@mate-ui/type'
```
- API

|  属性/方法  | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| isProp | 检测当前对象是否包含某属性 | isProp({ name: 'mate-ui' }, 'name') | item, key |
| isTrueOrZero | 检测当前类型是否为true或0 | isTrueOrZero('mate-ui') | item |
| isNullOrUndefined | 检测当前类型是否为null或undefined | isNullOrUndefined(null) | item |
| isNumber | 检测当前类型是否为数字 | isNumber('1') | item |
| isBoolean | 检测当前类型是否为布尔值 | isBoolean(true) | item |
| isString | 检测当前类型是否为字符串 | isString('mate-ui') | item |
| isEmptyString | 检测当前类型是否为空字符串(包含null,trim后长度为0) | isEmptyString('') | item |
| isJsonString | 检测当前类型是否为JSON字符串 | isJsonString('[{"name":"mate-ui"}]') | item |
| isFunction | 检测当前类型是否为函数(包含箭头函数) | isFunction(function () { return 'mate-ui' }) | item |
| isEmptyFunction | 检测当前类型是否为空函数(无函数体) | isEmptyFunction(function () {}) | item |
| isArray | 检测当前类型是否为数组 | isArray(['@mate-ui/core', '@mate-ui/web']) | item |
| isEmptyArray | 检测当前类型是否为空数组(包含null,长度为0) | isEmptyArray([]) | item |
| isObject | 检测当前类型是否为对象 | isObject({ name: 'mate-ui' }) | item |
| isEmptyObject | 检测当前类型是否为空对象(包含null,无任何key属性) | isEmptyObject({}) | item |
| isPlainObject | 检测当前类型是否为纯粹对象(非window或系统对象) | isPlainObject(window) | item |
| isGuid | 检测当前类型是否为Guid对象(可自定义正则表达式) | isGuid('CB6A33EB-E909-D4A7-95F0-9F599A4CFFB9') | item, pattern |
| isMobilePhone | 检测当前类型是否为手机号码(可自定义正则表达式) | isMobilePhone('13866668888') | item, pattern |
| isTelPhone | 检测当前类型是否为座机号码(可自定义正则表达式) | isTelPhone('010-66668888') | item, pattern |
| isPhone | 检测当前类型是否为电话号码(手机或座机，可自定义正则表达式) | isPhone('13866668888') | item, { mobile, tel } |
| isEmail | 检测当前类型是否为电子邮件(可自定义正则表达式) | isEmail('miracle@mate-ui.com') | item, pattern |
| isIdCard | 检测当前类型是否为身份证号(支持15位或18位，可自定义正则表达式) | isIdCard('511381198408086860') | item, pattern |
| isValidPassword | 检测密码复杂度规则(支持字母数字/字母数字特殊字符/大小写字母特殊字符，可自定义正则表达式) | isValidPassword('@mate-ui/core@1.0.0') | item, { pattern, min, max } |
| isValidDate | 检测当前日期是否合法 | isValidDate(new Date('2022-12-01 00:00:00')) | item |

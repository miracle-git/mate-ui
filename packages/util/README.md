# @mate-ui/util
> 封装核心库之通用工具集合

- 由 `Typescript` 开发，支持完善的类型推断和检查
- 支持按需加载
- 支持 `ESModule`、`CommonJS`、`UMD`等规范

## 用法
- 安装
```sh
npm install @mate-ui/util
```
- 引入全称
```sh
import { $client, $formatter, $loader, $number, $object, $string, $random, $validator } from '@mate-ui/util'
```
- 引入简写(建议)
```sh
import { $c, $f, $l, $n, $o, $s, $r, $v } from '@mate-ui/util'
```
- API

- $client 客户端工具

|  属性/方法  | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| engine | 浏览器引擎(如：webkit,gecko) | $c.engine | - |
| browser | 浏览器类型及版本(如：chrome,opera) | $c.browser | - |
| platform | 客户端操作系统平台(如：windows,mac) | $c.platform | - |

- $formatter 格式化工具

|  属性/方法  | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| date | 格式化日期(可自定义格式，返回：2022-12-12) | $f.date(new Date()) | data, format |
| datetime | 格式化日期时间(可自定义格式，返回：2022-12-12 12:20:25) | $f.datetime(new Date()) | data, format |
| shortDatetime | 格式化日期时间(去秒，可自定义格式，返回：2022-12-12 12:20) | $f.shortDatetime(new Date()) | data, format |
| time | 格式化时间(可自定义格式，返回：12:20:25) | $f.time(new Date()) | data, format |
| shortTime | 格式化时间(去秒，可自定义格式，返回：12:20) | $f.shortTime(new Date()) | data, format |
| number | 格式化数字(可配置千分位，有效数字，末尾去0美化等，返回：12,300.24) | $f.number('12300.2415') | data, { thousandth, precision, pretty, reserve, raw, symbol } |
| integer | 格式化为整数(可配置千分位，返回：12,300) | $f.integer('12300.2415') | data, { thousandth, symbol } |
| price | 格式化为价格(可配置千分位，有效数字，货币单位等，返回：$12,300.24) | $f.integer('12300.2415', { unit: '$' }) | data, { thousandth, precision, unit, symbol, prefix } |
| timezone | 格式化时区 | $f.timezone('') | data |
| locale | 格式化国际化 | $f.locale('') | data |

- $loader 脚本加载工具

|  属性/方法  | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| serialScripts | 串行(异步)逐个加载指定的脚本 | $l.serialScripts([js1,js2,...jsn], () => {}) | scripts, callback |
| parallelScripts | 并行(同步)同时加载指定的脚本 | $l.parallelScripts([js1,js2,...jsn], () => {}) | scripts, callback |

- $number 数字处理工具

|  属性/方法  | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| toInteger | 转化为整数(常用于数组文本框组件) | $n.toInteger('12300') | data, minus |
| toDecimal | 转化为小数(常用于数组文本框组件) | $n.toDecimal('12300.224') | data, precision, minus |
| pretty | 清除结尾多余的0 | $n.pretty('12300.000') | data |
| trimEndDot | 清除结尾的小数点(常用于数组文本框组件) | $n.trimEndDot('12300.') | data |

- $object 对象处理工具

|  属性/方法  | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| frozen | 新增并冻结window属性(无法修改也无法删除) | $o.frozen('mate', 'mate-ui') | prop, val |
| flatten | 将当前的对象进行展平显示(以.分割) | $o.flatten({ name: '@mate-ui', version: '1.0.0' }) | item |
| pick | 获取指定对象/数组指定列对应的数组或对象 | $o.pick({ a: 1, b: 2, c: 3 }, 'a', 'c') | data, props |
| draw | 获取指定对象排除指定动态列对应的对象 | $o.draw({ a: 1, b: 2, c: 3 }, 'a', 'c') | data, props |

- $string 字符串处理工具

|  属性/方法  | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| highlight | 高亮显示文本(常用于关键字搜索) | $s.highlight('@mate-ui/core', 'core') | str, keyword |
| globalKey | 获取全局变量的key | $s.globalKey('mate', 'core') | app, scope |
| escape | 处理字符串中的转义字符 | $s.escape('mate:\core') | str |
| kebab | 将字符串按大写字符拆分为连字符串 | $s.kebab('MateUI') | str |
| camel | 将字符串按(:,-,_)拆分为驼峰串 | $s.camel('MateUI') | str |
| uncamel | 将驼峰字符串转化为按(:,-,_)拆分 | $s.uncamel('mateUI') | str, sep, textcase |
| upperFirst | 将字符串首字符大写 | $s.upperFirst('mateUI') | str |
| lowerFirst | 将字符串首字符小写 | $s.lowerFirst('MateUI') | str |
| secure | 获取带星号的文本(常用于手机号处理) | $s.secure('13566668888', { before: 2, after: 5 }) | str, { stars, ignore, before, after } |
| indexOf | 按关键字模糊搜索(忽略大小写) | $s.indexOf('@mate-ui/core', 'Core') | str, keyword, ignore |
| trim | 清除所有的字符串空格 | $s.trim(' Mate UI ') | str, all |
| trimEnd | 清除结尾的的最后一个字符 | $s.trimEnd('@mate-ui@1.0.0@','@') | str, end |
| trimHtml | 清除字符串中所有的html标签 | $s.trimHtml('<span style="color:red">@mate-ui@1.0.0</span>') | str |
| format | 格式化模板字符串 | $s.format('{0} mate ui {1}', '@copyright', 'reserved') | str, val1, val2, ... |
| query | 获取url字符串问号之后的值并转化为对象 | $s.query('https://www.mate-ui.com?name=mate&package=core')) | str |

- $random 随机数处理工具

|  属性/方法  | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| number | 获取介于最小值和最大值之间的随机数 | $r.number(10, 20) | min, max |
| string | 获取指定长度的随机字符串(可追加时间戳) | $r.string(16) | len, timestamp |
| color | 获取随机颜色(可配置透明度) | $r.color(0.5) | alpha |
| uuid | 随机生成一个不重复的uuid(可指定长度) | $r.uuid() | len |
| guid | 随机生成一个guid | $r.guid() | — |

- $validator 校验处理工具

|  属性/方法  | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| oneOf | 判断当前定义的属性值是否为集合中之一 | $v.oneOf('core', ['core', 'api', 'util'], 'name') | current, values, field |
| rangeOf | 判断当前定义的属性值是否在指定的范围内(包含边界值) | $v.rangeOf(0.5, 'opacity', 1, 2) | current, field, min, max |
| betweenOf | 判断当前定义的属性值是否在指定的范围内(不包含边界值) | $v.betweenOf(0.5, 'opacity', 1, 2) | current, field, min, max |
| limitOf | 判断当前定义的属性值是否是指定的类型 | $v.limitOf(['core', 'api', 'util'], 'name') | current, field |

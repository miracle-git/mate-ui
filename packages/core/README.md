# @mate-ui/core
> 封装核心库之基础功能(包含conf,type,crypto,storage,rest,util)

- 由 `Typescript` 开发，支持完善的类型推断和检查
- 支持按需加载
- 支持 `ESModule`、`CommonJS`、`UMD`等规范

## 用法
- 安装
```sh
npm install @mate-ui/core
```
- 引入
```sh
import { 
  Conf, Type, Crypto, Storage, Rest,
  $client, $formatter, $loader, $number, $object, $string, $random, $validator,
  $c, $f, $l, $n, $o, $s, $r, $v
} from '@mate-ui/core'
```

- Conf 常量配置

| 属性/方法 | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| DATA_REGEX_PATTERN | 正则表达式常量 | Conf.DATA_REGEX_PATTERN.guid | — |
| DATA_SEPARATOR | 数据分隔符常量 | Conf.DATA_SEPARATOR.ampersand | — |
| DATE_FORMATTER | 时间格式化常量 | Conf.DATE_FORMATTER.date | — |
| CURRENCY_UNIT | 货币运算单位常量 | Conf.CURRENCY_UNIT.k | — |
| ASYMMETRIC_CRYPTO_TYPE | 非对称加密算法类型 | Conf.ASYMMETRIC_CRYPTO_TYPE.md5 | — |
| SYMMETRIC_CRYPTO_TYPE | 对称加密算法类型 | Conf.SYMMETRIC_CRYPTO_TYPE.base64 | — |
| STORAGE_TYPE | 存储类型常量 | Conf.STORAGE_TYPE.local | — |
| DEFAULT_STORAGE_OPTIONS | 存储配置常量 | Conf.DEFAULT_STORAGE_OPTIONS | — |
| SORT_MODE | 排序模式常量 | Conf.SORT_MODE.index | — |
| SORT_TYPE | 排序类型常量 | Conf.SORT_TYPE.asc | — |
| REQUEST_METHOD | 请求方法常量 | Conf.REQUEST_METHOD.get | — |
| EMPTY_FUNC | 空函数类型 | Conf.EMPTY_FUNC | — |
| EMPTY_ARRAY | 空数组类型 | Conf.EMPTY_ARRAY | — |
| EMPTY_OBJECT | 空对象类型 | Conf.EMPTY_OBJECT | — |
| CONTENT_TYPE | 请求数据格式常量 | Conf.CONTENT_TYPE.encoded | — |
| DEFAULT_REQUEST_OPTIONS | 默认请求配置常量 | Conf.DEFAULT_REQUEST_OPTIONS | — |
| DEFAULT_RESPONSE_OPTIONS | 默认响应配置常量 | Conf.DEFAULT_RESPONSE_OPTIONS | — |

- Type 类型检测

|  属性/方法  | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| isProp | 检测当前对象是否包含某属性 | Type.isProp({ name: 'mate-ui' }, 'name') | item, key |
| isTrueOrZero | 检测当前类型是否为true或0 | Type.isTrueOrZero('mate-ui') | item |
| isNullOrUndefined | 检测当前类型是否为null或undefined | Type.isNullOrUndefined(null) | item |
| isNumber | 检测当前类型是否为数字 | Type.isNumber(1) | item |
| isBoolean | 检测当前类型是否为布尔值 | Type.isBoolean(true) | item |
| isString | 检测当前类型是否为字符串 | Type.isString('mate-ui') | item |
| isEmptyString | 检测当前类型是否为空字符串(包含null,trim后长度为0) | Type.isEmptyString('') | item |
| isJsonString | 检测当前类型是否为JSON字符串 | Type.isJsonString('[{"name":"mate-ui"}]') | item |
| isFunction | 检测当前类型是否为函数(包含箭头函数) | Type.isFunction(function () { return 'mate-ui' }) | item |
| isEmptyFunction | 检测当前类型是否为空函数(无函数体) | Type.isEmptyFunction(function () {}) | item |
| isArray | 检测当前类型是否为数组 | Type.isArray(['@mate-ui/core', '@mate-ui/web']) | item |
| isEmptyArray | 检测当前类型是否为空数组(包含null,长度为0) | Type.isEmptyArray([]) | item |
| isObject | 检测当前类型是否为对象 | Type.isObject({ name: 'mate-ui' }) | item |
| isEmptyObject | 检测当前类型是否为空对象(包含null,无任何key属性) | Type.isEmptyObject({}) | item |
| isPlainObject | 检测当前类型是否为纯粹对象(非window或系统对象) | Type.isPlainObject(window) | item |
| isGuid | 检测当前类型是否为Guid对象(可自定义正则表达式) | Type.isGuid('CB6A33EB-E909-D4A7-95F0-9F599A4CFFB9') | item, pattern |
| isMobilePhone | 检测当前类型是否为手机号码(可自定义正则表达式) | Type.isMobilePhone('13866668888') | item, pattern |
| isTelPhone | 检测当前类型是否为座机号码(可自定义正则表达式) | Type.isTelPhone('010-66668888') | item, pattern |
| isPhone | 检测当前类型是否为电话号码(手机或座机，可自定义正则表达式) | Type.isPhone('13866668888') | item, { mobile, tel } |
| isEmail | 检测当前类型是否为电子邮件(可自定义正则表达式) | Type.isEmail('miracle@mate-ui.com') | item, pattern |
| isIdCard | 检测当前类型是否为身份证号(支持15位或18位，可自定义正则表达式) | Type.isIdCard('511381198408086860') | item, pattern |
| isValidPassword | 检测密码复杂度规则(支持字母数字/字母数字特殊字符/大小写字母特殊字符，可自定义正则表达式) | Type.isValidPassword('@mate-ui/core@1.0.0') | item, { pattern, min, max } |
| isValidDate | 检测当前日期是否合法 | Type.isValidDate(new Date('2022-12-01 00:00:00')) | item |

- Crypto 加密解密

|  属性/方法  | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| encrypt | 加密当前的数据(需传入加密策略) | Crypto.encrypt(data, Conf.ASYMMETRIC_CRYPTO_md5) | { data, strategy, { key, iv } } |
| decrypt | 解密当前的数据(需传入解密策略) | Crypto.decrypt('bWF0ZS11aS1jb3Jl', Conf.SYMMETRIC_CRYPTO_base64) | { data, strategy, { key, iv } } |

- Storage 数据存储
> 本地缓存(Local)

| get | 获取本地存储实例中指定key对应的值 | Storage.get('mate-ui') | key, crypto / { strategy, key, iv, def } |
| set | 设置指定key和val到本地储存实例中 | Storage.set('mate-ui', '@mate-ui/storage') | key, val, crypto / { strategy, key, iv } |
| remove | 从本地存储实例中删除指定的key | Storage.remove('mate-ui') | key |
| clear | 清除所有的本地缓存 | Storage.clear() | — |
| clearAll | 清除所有的本地缓存和会话缓存 | Storage.clearAll() | — |
| count | 获取本地存储实例中的个数 | Storage.count() | — |
| contains | 获取本地存储实例中是否包含指定key的实例 | Storage.contains('mate-ui') | key |
> 会话缓存(Session)

|  属性/方法  | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| get | 获取会话存储实例中指定key对应的值 | Storage.session.get('mate-ui') | key, crypto / { strategy, key, iv, def } |
| set | 设置指定key和val到会话储存实例中 | Storage.session.set('mate-ui', '@mate-ui/storage') | key, val, crypto / { strategy, key, iv } |
| remove | 从会话存储实例中删除指定的key | Storage.session.remove('mate-ui') | key |
| clear | 清除所有的会话缓存 | Storage.session.clear() | — |
| count | 获取会话存储实例中的个数 | Storage.session.count() | — |
| contains | 获取会话存储实例中是否包含指定key的实例 | Storage.session.contains('mate-ui') | key |

- Rest 网络请求

|  属性/方法  | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| map | 根据当前的地址配置生成Api对象(可配置多前缀与加密) | Rest.map({ list: '/api/user/list' }, '/api', { app, mock, crypto }) | config, prefix, { app, mock, crypto } |
| format | 将当前的Api地址的动态参数进行转化为实际的请求url | Rest.format('/api/mate-ui/service/permission/{project}/account/{user}', { project: 'mateapi', user: 'miracle' }) | url, val1, val2, ... |

- Util 工具类函数
> $client($c) 客户端工具

|  属性/方法  | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| engine | 浏览器引擎(如：webkit,gecko) | $c.engine | - |
| browser | 浏览器类型及版本(如：chrome,opera) | $c.browser | - |
| platform | 客户端操作系统平台(如：windows,mac) | $c.platform | - |

> $formatter($f) 格式化工具

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
| percent | 格式化为百分比(可配置千分位，有效数字，是否乘以100等，返回：24.88%) | $f.percent('24.868', { percent: false }) | data, { thousandth, precision, symbol, percent } |
| money | 格式化为货币(转化大数据，可配置有效数字，货币运算单位等，返回：12.30) | $f.integer('12300.2415', { unit: CURRENCY_UNIT.k }) | data, { precision, unit } |
| timezone | 格式化时区 | $f.timezone('') | data |
| locale | 格式化国际化 | $f.locale('') | data |
| version | 格式化版本号(返回v1) | $f.version('1') | data |
| array | 格式化数组(返回1:2:3) | $f.array([1,2,3],':') | data |
| badge | 格式化徽标(返回99+) | $f.badge(120) | data |

> $loader($l) 脚本加载工具

|  属性/方法  | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| serialScripts | 串行(异步)逐个加载指定的脚本 | $l.serialScripts([js1,js2,...jsn], () => {}) | scripts, callback |
| parallelScripts | 并行(同步)同时加载指定的脚本 | $l.parallelScripts([js1,js2,...jsn], () => {}) | scripts, callback |

> $number($n) 数字处理工具

|  属性/方法  | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| toInteger | 转化为整数(常用于数组文本框组件) | $n.toInteger('12300') | data, minus |
| toDecimal | 转化为小数(常用于数组文本框组件) | $n.toDecimal('12300.224') | data, precision, minus |
| pretty | 清除结尾多余的0 | $n.pretty('12300.000') | data |
| trimEndDot | 清除结尾的小数点(常用于数组文本框组件) | $n.trimEndDot('12300.') | data |

> $object($o) 对象处理工具

|  属性/方法  | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| frozen | 新增并冻结window属性(无法修改也无法删除) | $o.frozen('mate', 'mate-ui') | prop, val |
| flatten | 将当前的对象进行展平显示(以.分割) | $o.flatten({ name: '@mate-ui', version: '1.0.0' }) | item |
| pick | 获取指定对象/数组指定列对应的数组或对象 | $o.pick({ a: 1, b: 2, c: 3 }, 'a', 'c') | data, props |
| draw | 获取指定对象排除指定动态列对应的对象 | $o.draw({ a: 1, b: 2, c: 3 }, 'a', 'c') | data, props |

> $string($s) 字符串处理工具

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

> $random($r) 随机数处理工具

|  属性/方法  | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| number | 获取介于最小值和最大值之间的随机数 | $r.number(10, 20) | min, max |
| string | 获取指定长度的随机字符串(可追加时间戳) | $r.string(16) | len, timestamp |
| color | 获取随机颜色(可配置透明度) | $r.color(0.5) | alpha |
| uuid | 随机生成一个不重复的uuid(可指定长度) | $r.uuid() | len |
| guid | 随机生成一个guid | $r.guid() | — |

> $validator($v) 校验处理工具

|  属性/方法  | 描述 | 示例 | 参数 |
| ---------- | ---------- | ---------- | ---------- |
| oneOf | 判断当前定义的属性值是否为集合中之一 | $v.oneOf('core', ['core', 'api', 'util'], 'name') | current, values, field |
| rangeOf | 判断当前定义的属性值是否在指定的范围内(包含边界值) | $v.rangeOf(0.5, 'opacity', 1, 2) | current, field, min, max |
| betweenOf | 判断当前定义的属性值是否在指定的范围内(不包含边界值) | $v.betweenOf(0.5, 'opacity', 1, 2) | current, field, min, max |
| limitOf | 判断当前定义的属性值是否是指定的类型 | $v.limitOf(['core', 'api', 'util'], 'name') | current, field |

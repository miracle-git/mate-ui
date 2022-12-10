/**
 * @method 检测当前对象是否包含某属性
 * @param item 当前检测的对象
 * @param key 属性名
 * @returns {Boolean} 如果包含则返回true, 否则返回false
 */
export declare const isProp: (item: object, key: string) => boolean;
/**
 * @method 检测当前类型是否为true或0
 * @param item 当前检测的类型
 * @returns {Boolean} 如果当前类型是true或0，则返回true, 否则返回false
 */
export declare const isTrueOrZero: (item: any) => any;
/**
 * @method 检测当前类型是否为null或undefined
 * @param item 当前检测的类型
 * @returns {Boolean} 如果当前类型是null或undefined，则返回true, 否则返回false
 */
export declare const isNullOrUndefined: (item: any) => boolean;
/**
 * @method 检测当前类型是否为数字
 * @param item 当前检测的类型
 * @returns {Boolean} 如果为数字则返回true, 否则返回false
 */
export declare const isNumber: (item: any) => boolean;
/**
 * @method 检测当前类型是否为布尔
 * @param item 当前检测的类型
 * @returns {Boolean} 如果为布尔则返回true, 否则返回false
 */
export declare const isBoolean: (item: any) => boolean;
/**
 * @method 检测当前类型是否为字符串
 * @param item 当前检测的类型
 * @returns {Boolean} 如果为字符串则返回true, 否则返回false
 */
export declare const isString: (item: any) => boolean;
/**
 * @method 检测当前类型是否为空字符串
 * @param item 当前检测的类型
 * @returns {Boolean} 如果为空字符串则返回true, 否则返回false
 */
export declare const isEmptyString: (item: any) => boolean;
/**
 * @method 检测当前类型是否为JSON字符串
 * @param item 当前检测的类型
 * @returns {Boolean} 如果为JSON字符串则返回true, 否则返回false
 */
export declare const isJsonString: (item: any) => boolean | undefined;
/**
 * @method 检测当前类型是否为函数
 * @param item 当前检测的类型
 * @returns {Boolean} 如果为函数则返回true, 否则返回false
 */
export declare const isFunction: (item: any) => boolean;
/**
 * @method 检测当前类型是否为空函数
 * @param item 当前检测的类型
 * @returns {Boolean} 如果为空函数则返回true, 否则返回false
 */
export declare const isEmptyFunction: (item: any) => boolean;
/**
 * @method 检测当前类型是否为数组
 * @param item 当前检测的类型
 * @returns {Boolean} 如果为数组则返回true, 否则返回false
 */
export declare const isArray: (item: any) => boolean;
/**
 * @method 检测当前类型是否为空数组
 * @param item 当前检测的类型
 * @returns {Boolean} 如果为空数组则返回true, 否则返回false
 */
export declare const isEmptyArray: (item: any) => boolean;
/**
 * @method 检测当前类型是否为对象
 * @param item 当前检测的类型
 * @returns {Boolean} 如果为对象则返回true, 否则返回false
 */
export declare const isObject: (item: any) => boolean;
/**
 * @method 检测当前类型是否为空对象
 * @param item 当前检测的类型
 * @returns {Boolean} 如果为空数组则返回true, 否则返回false
 */
export declare const isEmptyObject: (item: any) => boolean;
/**
 * @method 检测当前类型是否为纯粹对象(非window或系统对象)
 * @param item 当前检测的类型
 * @returns {Boolean} 如果为普通对象则返回true, 否则返回false
 */
export declare const isPlainObject: (item: any) => boolean;
/**
 * @method 检测当前类型是否为Guid对象
 * @param item 当前检测的类型
 * @param pattern 当前检测的正则匹配表达式（默认值：DATA_REGEX_PATTERN.guid）
 * @returns {Boolean} 如果为Guid则返回true, 否则返回false
 */
export declare const isGuid: (item: any, pattern?: string) => boolean;
/**
 * @method 检测当前类型是否为手机号码
 * @param item 当前检测的类型
 * @param pattern 当前检测的正则匹配表达式（默认值：DATA_REGEX_PATTERN.mobile）
 * @returns {Boolean} 如果为手机号码则返回true, 否则返回false
 */
export declare const isMobilePhone: (item: any, pattern?: string) => boolean;
/**
 * @method 检测当前类型是否为座机号码
 * @param item 当前检测的类型
 * @param pattern 当前检测的正则匹配表达式（默认值：DATA_REGEX_PATTERN.tel）
 * @returns {Boolean} 如果为座机号码则返回true, 否则返回false
 */
export declare const isTelPhone: (item: any, pattern?: string) => boolean;
/**
 * @method 检测当前类型是否为电话号码(手机或座机)
 * @param item 当前检测的类型
 * @param {Object} {mobile,tel} 当前检测手机和座机的正则匹配表达式（默认值：DATA_REGEX_PATTERN.mobile和DATA_REGEX_PATTERN.tel）
 * @returns {Boolean} 如果为电话号码则返回true, 否则返回false
 */
export declare const isPhone: (item: any, { mobile, tel }?: {
    mobile?: string | undefined;
    tel?: string | undefined;
}) => boolean;
/**
 * @method 检测当前类型是否为电子邮件
 * @param item 当前检测的类型
 * @param pattern 当前检测的正则匹配表达式（默认值：DATA_REGEX_PATTERN.email）
 * @returns {Boolean} 如果为电子邮件则返回true, 否则返回false
 */
export declare const isEmail: (item: any, pattern?: string) => boolean;
/**
 * @method 检测当前类型是否为身份证号(支持15位或18位)
 * @param item 当前检测的类型
 * @param pattern 当前检测的正则匹配表达式（默认值：DATA_REGEX_PATTERN.idcard）
 * @returns {Boolean} 如果为身份证号则返回true, 否则返回false
 */
export declare const isIdCard: (item: any, pattern?: string) => boolean;
/**
 * @method 检测密码复杂度规则(支持字母数字/字母数字特殊字符/大小写字母特殊字符)
 * @param item 当前检测的类型
 * @param options 当前检测密码复杂度的配置选项(默认值:{ pattern: DATA_REGEX_PATTERN.letterNumberChar, min: 8, max: 30 })
 * @returns {Boolean} 如果为合法密码则返回true, 否则返回false
 */
export declare const isValidPassword: (item: any, options?: {}) => boolean;
/**
 * @method 检测当前日期是否合法
 * @param item 当前检测的类型
 * @returns {Boolean} 如果为合法日期则返回true, 否则返回false
 */
export declare const isValidDate: (item: any) => boolean;

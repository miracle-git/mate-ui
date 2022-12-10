/**
 * @method 检测当前对象是否包含某属性
 * @param item 当前检测的对象
 * @param key 属性名
 * @returns {Boolean} 如果包含则返回true, 否则返回false
 */
export declare const isProp: (item: object, key: string) => boolean;
/**
 * @method 检测当前类型并设置默认值
 * @param item 当前检测的类型
 * @param val 默认值
 * @returns {Boolean} 如果当前类型未定义，则返回默认值，否则返回自身
 */
export declare const isDefault: (item: any, val: any) => any;
/**
 * @method 检测当前json字符串是否合法并设置默认值
 * @param item 当前检测的字符串
 * @param val 默认值
 * @returns {Boolean} 如果当前json字符串不合法，则返回默认值，否则返回解析后的对象
 */
export declare const isValidJson: (item: string, val: any) => any;
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

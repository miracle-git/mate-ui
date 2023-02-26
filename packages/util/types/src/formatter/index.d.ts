/**
 * @file Formatter
 * @description 数据格式化(日期/数字等)
 */
declare const _default: {
    /**
     * @method 格式化日期
     * @param { Date | Number } data 格式化date时间戳
     * @param { String } format 格式化规则
     * @returns { String } 转化后的日期
     */
    date(data: any, format?: string): any;
    /**
     * @method 格式化日期时间
     * @param { Date | Number } data 格式化date时间戳
     * @param { String } format 格式化规则
     * @returns { String } 转化后的日期
     */
    datetime(data: any, format?: string): any;
    /**
     * @method 格式化日期时间(去秒)
     * @param { Date | Number } data 格式化date时间戳
     * @param { String } format 格式化规则
     * @returns { String } 转化后的日期
     */
    shortDatetime(data: any, format?: string): any;
    /**
     * @method 格式化时间
     * @param { Date | Number } data 格式化date时间戳
     * @param { String } format 格式化规则
     * @returns { String } 转化后的日期
     */
    time(data: any, format?: string): any;
    /**
     * @method 格式化时间(去秒)
     * @param { Date | Number } data 格式化date时间戳
     * @param { String } format 格式化规则
     * @returns { String } 转化后的日期
     */
    shortTime(data: any, format?: string): any;
    /**
     * @method 格式化为普通数字
     * @param { Number | String } data 数值
     * @typedef { Object } options 格式化对象
     * @property { Number } precision 小数位精度(默认为2)
     * @property { Boolean } thousandth 是否保留千分位
     * @property { Boolean } pretty 是否将尾部多余0去掉
     * @property { Boolean } reserve 是否将千分位转化为普通数字
     * @property { Boolean } raw 是否原样输出(不做任何处理)
     * @property { String } symbol 占位符(当为空或不合法时)
     * @returns { String } 格式化后的字符串
     */
    number(data: any, { precision, thousandth, pretty, reserve, raw, symbol }?: {
        precision?: number | undefined;
        thousandth?: boolean | undefined;
        pretty?: boolean | undefined;
        reserve?: boolean | undefined;
        raw?: boolean | undefined;
        symbol?: string | undefined;
    }): any;
    /**
     * @method 格式化为整数
     * @param { Number | String } data 数值
     * @typedef { Object } options 格式化对象
     * @property { Boolean } thousandth 是否保留千分位
     * @property { String } symbol 占位符(当为空或不合法时)
     * @returns { String } 格式化后的字符串
     */
    integer(data: any, { thousandth, symbol }?: {
        thousandth?: boolean | undefined;
        symbol?: string | undefined;
    }): any;
    /**
     * @method 格式化为价格(带千分位)
     * @param { Number | String } data 数值
     * @typedef { Object } options 格式化对象
     * @property { Boolean } thousandth 是否保留千分位(默认为true)
     * @property { Number } precision 小数位精度(默认为2)
     * @property { String } symbol 占位符(当为空或不合法时)
     * @property { String } unit 货币单位(默认为人民币￥)
     * @property { Boolean } prefix 是否添加前缀(当货币单位不为空时有效)
     * @returns { String } 格式化后的字符串
     */
    price(data: any, { thousandth, precision, symbol, unit, prefix }?: {
        thousandth?: boolean | undefined;
        precision?: number | undefined;
        symbol?: string | undefined;
        unit?: string | undefined;
        prefix?: boolean | undefined;
    }): any;
    /**
     * @method 格式化为百分比
     * @param { Number | String } data 数值
     * @typedef { Object } options 格式化对象
     * @property { Boolean } thousandth 是否保留千分位
     * @property { Number } precision 小数位精度(默认为2)
     * @property { Boolean } pretty 是否将尾部多余0去掉
     * @property { Boolean } raw 是否原样输出(不做任何处理)
     * @property { String } symbol 占位符(当为空或不合法时)
     * @property { Boolean } percent 是否需要乘以100
     * @returns { String } 格式化后的字符串
     */
    percent(data: any, { thousandth, precision, pretty, raw, symbol, percent }?: {
        thousandth?: boolean | undefined;
        precision?: number | undefined;
        pretty?: boolean | undefined;
        raw?: boolean | undefined;
        symbol?: string | undefined;
        percent?: boolean | undefined;
    }): any;
    /**
     * @method 格式化为货币(转化大数据)
     * @param { Number | String } data 数值
     * @typedef { Object } options 格式化对象
     * @property { CURRENCY_UNIT } unit 运算单位(k:千，m:百万，b:十亿)
     * @property { Number } precision 小数位精度(默认为2)
     * @returns { String } 格式化后的字符串
     */
    money(data: any, { unit, precision }?: {
        unit?: string | undefined;
        precision?: number | undefined;
    }): any;
    /**
     * @method 格式化国际化
     * @param { String } template 国际化模板字符串
     * @returns { String } 格式化后的字符串
     */
    locale(template: string, ...args: any[]): string;
    /**
     * @method 格式化时区
     * @param { String } data 时区
     * @returns { String } 格式化后的字符串
     */
    timezone(data: string): number | undefined;
    /**
     * @method 格式化版本号
     * @param { String } data 版本号
     * @returns { String } 格式化后的版本号
     */
    version(data: string | number): string | number;
    /**
     * @method 格式化数组
     * @param { String } data 数组
     * @returns { String } 格式化后的数组
     */
    array(data: any, sep?: string): any;
    /**
     * @method 格式化徽标
     * @param { String } data 数字
     * @param { Number } max 最大值(当前数字超过max则显示max+，否则显示当前数字)
     * @returns { String } 格式化后的徽标
     */
    badge(data: any, max?: number): string;
};
export default _default;

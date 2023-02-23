declare const _default: {
    /**
     * @method 转化为整数
     * @param { Number | String } data 数值
     * @param { Boolean } minus 是否转化为负数
     * @returns { String } 格式化后的字符串
     */
    toInteger(data: number | string, minus?: boolean): string;
    /**
     * @method 转化为小数
     * @param { Number | String } data 数值
     * @param { Number } precision 小数位精度(默认为2)
     * @param { Boolean } minus 是否转化为负数
     * @returns { String } 格式化后的字符串
     */
    toDecimal(data: number | string, precision?: number, minus?: boolean): string;
    /**
     * @method 清除结尾多余的0
     * @param { Number | String } data 数值
     * @returns { Number } 处理后的数字
     */
    pretty(data: number | string): any;
    /**
     * @method 清除结尾的小数点
     * @param { Number | String } data 需要处理的字符串
     * @returns { Number } 处理后的数字
     */
    trimEndDot(data: number | string): string;
};
export default _default;

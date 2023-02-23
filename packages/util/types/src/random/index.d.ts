/**
 * @file Random
 * @description 随机数/颜色/字符串/uuid/guid等
 */
declare const _default: {
    /**
     * @method 获取介于最小值和最大值之间的随机数
     * @param {Number} min 最小值
     * @param {Number} max 最大值
     * @returns {Number} 返回对应的随机数
     */
    number(min: number, max: number): number;
    /**
     * @method 获取指定长度的随机字符串
     * @param {Number} len 指定长度(默认：32)
     * @param {Boolean} timestamp 是否追加时间戳
     * @returns {String} 返回对应的随机字符串
     */
    string(len?: number, timestamp?: boolean): string;
    /**
     * @method 获取随机颜色(可配置透明度)
     * @param {Number} alpha 模糊值(在0，1之间)
     * @returns {String|Object} 返回对应的随机颜色
     */
    color(alpha?: number): string | undefined;
    /**
     * @method 随机生成一个不重复的uuid
     * @param { Number } len 指定长度(默认：10)
     * @returns { String } 返回对应的不重复uuid
     */
    uuid(len?: number): string;
    /**
     * @method 随机生成一个guid
     * @returns { String } 返回对应的guid
     */
    guid(): string;
};
export default _default;

declare const _default: {
    /**
     * @method 判断当前定义的属性值是否为集合中之一
     * @param {String} current 当前属性值
     * @param {Array} values 属性集合
     * @param {String} field 当前属性字段
     * @returns {Boolean} 返回是否在集合中
     */
    oneOf(current: any, values?: string[], field?: string): boolean;
    /**
     * @method 判断当前定义的属性值是否在指定的范围内(包含边界值)
     * @param {Number} current 当前属性值
     * @param {String} field 当前属性字段
     * @param {Number} min 最小值(默认0)
     * @param {Number} max 最大值(默认1)
     * @returns {Boolean} 返回是否在指定的范围内
     */
    rangeOf(current: any, field?: string, min?: number, max?: number): boolean;
    /**
     * @method 判断当前定义的属性值是否在指定的范围内(不包含边界值)
     * @param {Number} current 当前属性值
     * @param {String} field 当前属性字段
     * @param {Number} min 最小值(默认0)
     * @param {Number} max 最大值(默认1)
     * @returns {Boolean} 返回是否在指定的范围内
     */
    betweenOf(current: any, field?: string, min?: number, max?: number): boolean;
    /**
     * @method 判断当前定义的属性值是否是指定的类型
     * @param {String|Array} current 当前属性值
     * @param {String} field 当前属性字段
     * @returns {Boolean} 返回是否是指定的类型
     */
    limitOf(current: any, field?: string): any;
};
export default _default;

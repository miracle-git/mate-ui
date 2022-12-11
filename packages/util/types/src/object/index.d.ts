declare const _default: {
    /**
     * @method 新增并冻结window属性(无法修改也无法删除)
     * @param { String } prop 新增属性名称
     * @param val 属性值
     */
    frozen(prop: string, val: any): void;
    /**
     * @method 将当前的对象进行展平显示(以.分割)
     * @param { Object } item 需要处理的对象
     */
    flatten(item: object): {};
    /**
     * @method 获取指定对象/数组指定列对应的数组或对象
     * @param { Array | Object } source 当前指定的数组或对象
     * @param { Array } props 指定的列(可多列)
     * @returns { Array | Object } 返回指定列对应的数组或对象
     */
    pick(source: [] | object, ...props: any[]): any;
    /**
     * @method 获取指定对象排除指定动态列对应的对象
     * @param { Array | Object } source 当前指定的数组或对象
     * @param { Array } props 指定的列(可多列)
     * @returns { Object } 返回排除指定列对应对象
     */
    draw(source: [] | object, ...props: any[]): any;
};
export default _default;

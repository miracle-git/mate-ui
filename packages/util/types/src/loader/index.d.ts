declare const _default: {
    /**
     * 串行(异步)逐个加载指定的脚本，每个脚本加载完成加载另一个，全部加载完成后执行回调
     * @param scripts [Array|String] 指定的脚本
     * @param callback Function 成功加载完成后的回调函数
     * @return Array 所有生成脚本元素的对象数组
     */
    serialScripts(scripts: string | string[], callback: Function): void;
    /**
     * 并行(同步)同时加载指定的脚本，不管上个脚本是否加载完成，全部加载完成后执行回调
     * @param scripts [Array|String] 指定的脚本
     * @param callback Function 成功加载完成后的回调函数
     * @return Array 所有生成脚本元素的对象数组
     */
    parallelScripts(scripts: string | string[], callback: Function): void;
};
export default _default;

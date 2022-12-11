declare const _default: {
    /**
     * @method 根据当前的地址配置生成Api对象
     * @param config 地址配置(可按照模块划分)
     * @param prefix 前缀(可为字符串或对象，默认为'/api')
     * @typedef { Object } options Api配置对象
     * @property { String } app api归属应用(一般用于区分不同项目，防止多项目相互覆盖)
     * @property { String } mock mock接口相关配置(自动将前缀修改为'/api/mock')
     * @property { Boolean } crypto 是否在客户端加密存储(自动将存储到window.__MATE_API__或window.__MATE_XXX_API__变量中)
     */
    map(config: object, prefix?: string | object, options?: any): any;
    /**
     * @method 将当前的Api地址的动态参数进行转化为实际的请求url
     * @param { String } url Api地址(包含动态参数，一般以[xx]形式存在，可包含多个不同占位的参数)
     * @param config 参数的配置(即需要替换成的真实对象，一般以{xx:'yy'}形式存在, 也可支持数组，多字符串依次输入)
     * @example: api.format('/api/mate-ui/service/permission/{0}/account/{1}', 'mateapi', 'miracle')
     * @example: api.format('/api/mate-ui/service/permission/{0}/account/{1}', ['mateapi', 'miracle'])
     * @example: api.format('/api/mate-ui/service/permission/{project}/account/{user}', { project: 'mateapi', user: 'miracle' })
     */
    format(url: string): string;
};
export default _default;

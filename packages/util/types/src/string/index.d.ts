declare const _default: {
    /**
     * @method 高亮显示文本(常用于关键字搜索)
     * @param { String } str 需要进行高亮处理的文本
     * @param { String } keyword 高亮的关键字
     */
    highlight(str: string, keyword: string): string | undefined;
    /**
     * @method 获取全局变量的key
     * @param { String } app 所属应用(一般用于区分不同项目，防止多项目相互覆盖)
     * @param { String } scope 所属应用范围(如api,base等等)
     */
    globalKey(app?: string, scope?: string): string;
    /**
     * @method 处理字符串中的转义字符
     * @param { String } str 待处理的字符串
     */
    escape(str: string): string;
    /**
     * @method 将字符串按大写字符拆分为连字符串
     * @param { String } str 需要处理的字符串
     * @returns { String } 转化后的字符串
     */
    kebab(str: any): any;
    /**
     * method 将字符串按(:,-,_)拆分为驼峰串
     * @param { String } str 需要处理的字符串
     * @returns { String } 转化后的字符串
     */
    camel(str: any): string;
    /**
     * @method 将驼峰字符串转化为按(:,-,_)拆分
     * @param { String } str 需要处理的字符串
     * @param { String } sep 分隔符
     * @param { String } textcase 大小写(upper, lower)
     * @returns { String } 转化后的字符串
     */
    uncamel(str: any, sep?: string, textcase?: string): any;
    /**
     * @method 将字符串首字符大写
     * @param { String } str 需要处理的字符串
     * @returns { String } 转化后的字符串
     */
    upperFirst(str: string): string;
    /**
     * @method 将字符串首字符小写
     * @param { String } str 需要处理的字符串
     * @returns { String } 转化后的字符串
     */
    lowerFirst(str: string): string;
    /**
     * @method 获取带星号的文本(常用于手机号处理)
     * @param { String } str 当前需要处理的文本
     * @typedef { Object } options 格式化对象
     * @property { Object } stars 添加多少个星号
     * @property { Object } ignore 是否不处理(原文返回)
     * @property { Object } before 星号前导字符数
     * @property { Object } after 星号后导字符数
     * @returns { String } 返回处理之后的文本
     */
    secure(str: string, { stars, ignore, before, after }?: {
        stars?: number | undefined;
        ignore?: boolean | undefined;
        before?: number | undefined;
        after?: number | undefined;
    }): string;
    /**
     * @method 按关键字模糊搜索(忽略大小写)
     * @param { String } str 需要处理的字符串
     * @param { String } keyword 需要搜索的关键字
     * @param { Boolean } ignore 是否忽略大小写
     */
    indexOf(str: string, keyword: string, ignore?: boolean): boolean;
    /**
     * @method 清除所有的字符串空格
     * @param { String } str 需要处理的字符串
     * @param { Boolean } all 所有的空格(包含中间)
     */
    trim(str: string, all?: boolean): string;
    /**
     * @method 清除结尾的字符
     * @param { String } str 需要处理的字符串
     * @param { String } end 结尾字符串
     */
    trimEnd(str?: string, end?: string): string;
    /**
     * @method 清除字符串中所有的html标签
     * @param { String } str 需要处理的字符串
     */
    trimHtml(str: string): string;
    /**
     * @method 格式化默认字符串
     * @param { String } str 需要处理的字符串
     * @param val 格式化占位符对应的字符串({0},{1},...)
     */
    format(str: string, ...val: any[]): string;
    /**
     * @method 获取url字符串问号之后的值并转化为对象
     * @param { String } str 当前url字符串
     * @returns { Object } 查询字符串对象
     */
    query(str: string): {} | undefined;
};
export default _default;

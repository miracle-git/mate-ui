import { StorageOptions } from '../.internal/storage';
declare const _default: {
    /**
     * @method 获取本地存储实例中指定key对应的值
     * @param key {String} 当前存储的key
     * @param options {Boolean|StorageOptions} 是否加密或加密类型+默认值
     * @desc 值可能为简单类型，对象或数组
     */
    get(key: string, options?: boolean | StorageOptions): any;
    /**
     * @method 设置指定key和val到本地储存实例中
     * @param key 当前存储的key
     * @param val 当前存储的val
     * @param options {Boolean|StorageOptions} 是否加密或加密类型+默认值
     * @desc 支持简单数据类型，对象或数组的存储
     */
    set(key: string, val: any, options?: boolean | StorageOptions): void;
    /**
     * @method 从本地存储实例中删除指定的key
     * @param key 当前存储的key
     */
    remove(key: string): void;
    /**
     * @method 清除所有的本地缓存
     */
    clear(): void;
    /**
     * @method 清除所有的本地缓存和会话缓存
     */
    clearAll(): void;
    /**
     * @method 获取本地存储实例中的个数
     */
    count(): number;
    /**
     * @method 获取本地存储实例中是否包含指定key的实例
     * @param key 当前存储的key
     */
    contains(key: string): boolean;
    session: {
        /**
         * @method 获取会话存储实例中指定key对应的值
         * @param key {String} 当前存储的key
         * @param options {Boolean|StorageOptions} 是否加密或加密类型+默认值
         * @desc 值可能为简单类型，对象或数组
         */
        get(key: string, options?: boolean | StorageOptions): any;
        /**
         * @method 设置指定key和val到会话储存实例中
         * @param key 当前存储的key
         * @param val 当前存储的val
         * @param options {Boolean|StorageOptions} 是否加密或加密类型+默认值
         * @desc 支持简单数据类型，对象或数组的存储
         */
        set(key: string, val: any, options?: boolean | StorageOptions): void;
        /**
         * @method 从会话存储实例中删除指定的key
         * @param key 当前存储的key
         */
        remove(key: string): void;
        /**
         * @method 清除所有的会话存储
         */
        clear(): void;
        /**
         * @method 获取会话存储实例中的个数
         */
        count(): number;
        /**
         * @method 获取会话存储实例中是否包含指定key的实例
         * @param key 当前存储的key
         */
        contains(key: string): boolean;
    };
};
export default _default;

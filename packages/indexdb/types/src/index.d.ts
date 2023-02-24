/**
 * @file IndexDB
 * @description 客户端内存数据库
 */
import { IndexDBOptions } from '../.internal/indexdb';
export default class IndexDB {
    protected context: any;
    protected name: any;
    protected version: any;
    protected storeName: any;
    protected keyPath: any;
    protected db: any;
    constructor(options?: IndexDBOptions);
    /**
     * @method 打开数据库
     */
    open(): Promise<unknown>;
    /**
     * @method 添加数据
     * @param data 当前添加的数据
     */
    add(data: any): void;
    /**
     * @method 更新数据
     * @param data 当前更新的数据
     */
    put(data: any): void;
    /**
     * @method 获取指定key的数据库
     * @param key 指定key
     */
    getByKey(key: any): Promise<unknown>;
    /**
     * @method 删除数据库
     */
    delete(): void;
    /**
     * @method 删除指定key的数据库
     * @param key 指定key
     */
    deleteByKey(key: any): void;
    /**
     * @method 关闭数据库
     */
    close(): void;
    /**
     * @method 清除数据库
     */
    clear(): void;
}

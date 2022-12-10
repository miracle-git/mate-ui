/**
 * @file Storage
 * @description 基于localStorage/sessionStorage封装的存储类
 */
import { STORAGE_TYPE, SYMMETRIC_CRYPTO_TYPE } from '@mate-ui/conf'
import { isBoolean } from '@mate-ui/type'
import { storage, StorageOptions } from '../.internal/storage'

export default {
  /**
   * @method 获取本地存储实例中指定key对应的值
   * @param key {String} 当前存储的key
   * @param options {Boolean|StorageOptions} 是否加密或加密类型+默认值
   * @desc 值可能为简单类型，对象或数组
   */
  get(key: string, options: boolean | StorageOptions = false) {
    if (isBoolean(options)) {
      return storage.get(key, { type: STORAGE_TYPE.local, strategy: options ? SYMMETRIC_CRYPTO_TYPE.des : SYMMETRIC_CRYPTO_TYPE.none })
    }
    const { type, ...opts } = <StorageOptions> options
    return storage.get(key, { type: STORAGE_TYPE.local, ...opts })
  },
  /**
   * @method 设置指定key和val到本地储存实例中
   * @param key 当前存储的key
   * @param val 当前存储的val
   * @param options {Boolean|StorageOptions} 是否加密或加密类型+默认值
   * @desc 支持简单数据类型，对象或数组的存储
   */
  set(key: string, val, options: boolean | StorageOptions = false) {
    if (isBoolean(options)) {
      storage.set(key, val,{ type: STORAGE_TYPE.local, strategy: options ? SYMMETRIC_CRYPTO_TYPE.des : SYMMETRIC_CRYPTO_TYPE.none })
    }
    const { type, def, ...opts } = <StorageOptions> options
    storage.set(key, val,{ type: STORAGE_TYPE.local, ...opts })
  },
  /**
   * @method 从本地存储实例中删除指定的key
   * @param key 当前存储的key
   */
  remove(key: string) {
    storage.remove(key, STORAGE_TYPE.local)
  },
  /**
   * @method 清除所有的本地缓存
   */
  clear() {
    storage.clear(STORAGE_TYPE.local)
  },
  /**
   * @method 清除所有的本地缓存和会话缓存
   */
  clearAll() {
    storage.clear(STORAGE_TYPE.local)
    storage.clear(STORAGE_TYPE.session)
  },
  /**
   * @method 获取本地存储实例中的个数
   */
  count() {
    return storage.count(STORAGE_TYPE.local)
  },
  /**
   * @method 获取本地存储实例中是否包含指定key的实例
   * @param key 当前存储的key
   */
  contains(key: string) {
    return storage.contains(key, STORAGE_TYPE.local)
  },
  session: {
    /**
     * @method 获取会话存储实例中指定key对应的值
     * @param key {String} 当前存储的key
     * @param options {Boolean|StorageOptions} 是否加密或加密类型+默认值
     * @desc 值可能为简单类型，对象或数组
     */
    get(key: string, options: boolean | StorageOptions = false) {
      if (isBoolean(options)) {
        return storage.get(key, { type: STORAGE_TYPE.session, strategy: options ? SYMMETRIC_CRYPTO_TYPE.des : SYMMETRIC_CRYPTO_TYPE.none })
      }
      const { type, ...opts } = <StorageOptions> options
      return storage.get(key, { type: STORAGE_TYPE.session, ...opts })
    },
    /**
     * @method 设置指定key和val到会话储存实例中
     * @param key 当前存储的key
     * @param val 当前存储的val
     * @param options {Boolean|StorageOptions} 是否加密或加密类型+默认值
     * @desc 支持简单数据类型，对象或数组的存储
     */
    set(key: string, val, options: boolean | StorageOptions = false) {
      if (isBoolean(options)) {
        storage.set(key, val,{ type: STORAGE_TYPE.session, strategy: options ? SYMMETRIC_CRYPTO_TYPE.des : SYMMETRIC_CRYPTO_TYPE.none })
      }
      const { type, def, ...opts } = <StorageOptions> options
      storage.set(key, val,{ type: STORAGE_TYPE.session, ...opts })
    },
    /**
     * @method 从会话存储实例中删除指定的key
     * @param key 当前存储的key
     */
    remove(key: string) {
      storage.remove(key, STORAGE_TYPE.session)
    },
    /**
     * @method 清除所有的会话存储
     */
    clear() {
      storage.clear(STORAGE_TYPE.session)
    },
    /**
     * @method 获取会话存储实例中的个数
     */
    count() {
      return storage.count(STORAGE_TYPE.session)
    },
    /**
     * @method 获取会话存储实例中是否包含指定key的实例
     * @param key 当前存储的key
     */
    contains(key: string) {
      return storage.contains(key, STORAGE_TYPE.session)
    }
  }
}

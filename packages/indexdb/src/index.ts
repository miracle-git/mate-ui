/**
 * @file IndexDB
 * @description 客户端内存数据库
 */
import { IndexDBOptions, getStore, getReadonlyStore } from '../.internal/indexdb'

export default class IndexDB {
  protected context: any
  protected name: any
  protected version: any
  protected storeName: any
  protected keyPath: any
  protected db: any
  constructor(options?: IndexDBOptions) {
    // @ts-ignore
    const context = window.indexedDB || window?.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB
    if (!context) return
    this.context = context
    const defaultOptions = {
      name: 'idb',
      version: 1,
      storeName: 'context',
      keyPath: 'uuid'
    }
    options = { ...defaultOptions, ...options }
    this.name = options.name
    this.version = options.version
    this.storeName = options.storeName
    this.keyPath = options.keyPath
    this.db = null
  }
  /**
   * @method 打开数据库
   */
  open() {
    const request = this.context.open(this.name, this.version)
    return new Promise((resolve, reject) => {
      request.onsuccess = e => {
        this.db = e.target.result
        resolve(this.db)
      }
      request.onerror = e => {
        reject(e.currentTarget.error.message)
      }
      request.onupgradeneeded = e => {
        const db = e.target.result
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, { keyPath: this.keyPath })
        }
        this.db = db
        resolve(this.db)
      }
    })
  }
  /**
   * @method 添加数据
   * @param data 当前添加的数据
   */
  add(data) {
    getStore(this.db, this.storeName).add(data)
  }
  /**
   * @method 更新数据
   * @param data 当前更新的数据
   */
  put(data) {
    getStore(this.db, this.storeName).put(data)
  }
  /**
   * @method 获取指定key的数据库
   * @param key 指定key
   */
  getByKey(key) {
    const request = getReadonlyStore(this.db, this.storeName).get(key)
    return new Promise((resolve, reject) => {
      request.onsuccess = e => {
        const data = e.target.result
        if (data) {
          resolve(data)
        } else {
          reject(new Error('no data'))
        }
      }
      request.onerror = e => {
        reject(e.currentTarget.error.message)
      }
    })
  }
  /**
   * @method 删除数据库
   */
  delete() {
    this.context.deleteDatabase(this.name)
  }
  /**
   * @method 删除指定key的数据库
   * @param key 指定key
   */
  deleteByKey(key) {
    getStore(this.db, this.storeName).delete(key)
  }
  /**
   * @method 关闭数据库
   */
  close() {
    this.db.close()
  }
  /**
   * @method 清除数据库
   */
  clear() {
    getStore(this.db, this.storeName).clear()
  }
}

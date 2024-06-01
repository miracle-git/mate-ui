import Type from '../type/main'
import { DEFAULT_INDEXDB_OPTIONS } from '../config/main'
import { IndexedDBContext } from '../.internal/global'

/**
 * @file IndexDB
 * @description 浏览端内存数据库
 */
export default class IndexDB {
  name: string
  version: number
  storeName: string
  keyPath: string
  _context: any
  _db: any

  constructor(options: string | object) {
    if (!IndexedDBContext) return
    this._context = IndexedDBContext
    this._db = null
    const dbOptions = Type.isString(options)
      ? { ...DEFAULT_INDEXDB_OPTIONS, name: options.toString() }
      : { ...DEFAULT_INDEXDB_OPTIONS, options }
    const { name, version, storeName, keyPath } = dbOptions
    this.name = name
    this.version = version
    this.storeName = storeName
    this.keyPath = keyPath
  }

  _getStore() {
    const transaction = this._db.transaction(this.storeName, 'readwrite')
    return transaction.objectStore(this.storeName)
  }

  _getReadonlyStore() {
    const transaction = this._db.transaction(this.storeName)
    return transaction.objectStore(this.storeName)
  }

  open() {
    const request = this._context.open(this.name, this.version)
    return new Promise((resolve, reject) => {
      request.onsuccess = (e) => {
        this._db = e.target.result
        resolve(this._db)
      }
      request.onerror = (e) => {
        reject(e.currentTarget.error.message)
      }
      request.onupgradeneeded = (e) => {
        const db = e.target.result
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, {
            keyPath: this.keyPath
          })
        }
        this._db = db
        resolve(this._db)
      }
    })
  }

  add(data) {
    this._getStore().add(data)
  }

  put(data) {
    this._getStore().put(data)
  }

  getByKey(key) {
    const request = this._getReadonlyStore().get(key)
    return new Promise((resolve, reject) => {
      request.onsuccess = (e) => {
        const data = e.target.result
        if (data) {
          resolve(data)
        } else {
          reject(new Error('no data'))
        }
      }
      request.onerror = (e) => {
        reject(e.currentTarget.error.message)
      }
    })
  }

  remove() {
    this._context.deleteDatabase(this.name)
  }

  removeByKey(key) {
    this._getStore().delete(key)
  }

  close() {
    this._db.close()
  }

  clear() {
    this._getStore().clear()
  }
}

import { IndexedDB } from '../.internal/global'

/**
 * @file IndexDB
 * @description 浏览端内存数据库
 */
export default class IndexDB {
  constructor({ name = 'idb', version = 1, storeName = 'context', keyPath = 'uuid' } = {}) {
    if (IndexedDB) {
      // this.name = name
      // this.context = IndexedDB
      // this.name = name
      // this.version = version
      // this.storeName = storeName
      // this.keyPath = keyPath
      // this.db = null
    }
  }
}

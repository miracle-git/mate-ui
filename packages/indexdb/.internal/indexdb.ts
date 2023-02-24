export type IndexDBOptions = {
  name: string,
  version?: number,
  storeName?: string,
  keyPath?: string
}

export const getStore = (db, storeName) => {
  const transaction = db.transaction(storeName, 'readwrite')
  return transaction.objectStore(storeName)
}

export const getReadonlyStore = (db, storeName) => {
  const transaction = db.transaction(storeName)
  return transaction.objectStore(storeName)
}

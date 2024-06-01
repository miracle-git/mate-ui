declare global {
  interface Window {
    webkitIndexedDB
    webkitCrypto
    mozIndexedDB
    mozCrypto
    oCrypto
    opera
    msIndexedDB
    msCrypto
  }
}

export const Crypto = window.crypto || window.webkitCrypto || window.mozCrypto || window.oCrypto || window.msCrypto
export const IndexedDBContext = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB

declare global {
  interface Window {
    webkitIndexedDB,
    webkitCrypto,
    mozIndexedDB,
    mozCrypto,
    oCrypto,
    msIndexedDB,
    msCrypto
  }
}

export const Crypto = window.crypto || window.webkitCrypto || window.mozCrypto || window.oCrypto || window.msCrypto
export const IndexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB

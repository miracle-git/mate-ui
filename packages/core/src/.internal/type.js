export const hasOwn = Object.prototype.hasOwnProperty
export const toString = Object.prototype.toString
export const isWindow = (item) => item && typeof item === 'object' && 'setInterval' in item

export const is = (type, primitive = false) => {
  return function (obj) {
    return primitive ? typeof obj === type.toLowerCase() : toString.call(obj) === '[object ' + type + ']'
  }
}

export const match = (item, pattern, flags) => {
  const regex = new RegExp(pattern, flags)
  return regex.test(item)
}

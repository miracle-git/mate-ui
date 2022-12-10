export default {
  hasOwn: Object.prototype.hasOwnProperty,
  toString: Object.prototype.toString,
  is: (type: string, primitive = false) => {
    return function (obj: string) {
      return primitive ? typeof obj === type.toLowerCase() : toString.call(obj) === '[object ' + type + ']'
    }
  },
  isWindow: (item: object) => 'setInterval' in item
}

// export const match = (item, pattern, flags) => {
//   const regex = new RegExp(pattern, flags)
//   return regex.test(item)
// }

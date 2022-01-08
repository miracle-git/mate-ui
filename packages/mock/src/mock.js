const Mock = require('mockjs')
const Random = Mock.Random

module.exports = {
  list(name, item, count = 10) {
    const data = { [name]: [] }
    for (let i = 0; i < count; i++) {
      data[name].push(item(Random, i + 1))
    }
    return data
  }
}

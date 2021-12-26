if (process.env.LOCAL_DEBUG) {
  require('./src/index')
} else {
  require('./lib/index')
}

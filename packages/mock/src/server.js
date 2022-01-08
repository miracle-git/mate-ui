const path = require('path')
const fs = require('fs')
const _ = require('underscore')
const js = require('json-server')

module.exports = function load(dir, {
  login = '/account/login',
  logout = '/account/logout',
  auth = null,
  rewrite = null,
  blackList = [],
  port = 3000
} = {}) {
  const server = js.create()
  const middleware = js.defaults()
  // 支持中间件
  server.use(middleware)
  // 支持路径重写
  rewrite && server.use(js.rewriter(rewrite))
  // 支持加载多个db文件(js/json)
  const mockDir = path.join(__dirname, dir)
  const files = fs.readdirSync(mockDir)
  const base = {}
  // 将单个文件进行合并
  files.map(item => {
    const file = require(path.resolve(mockDir, item))
    _.extend(base, file)
  })
  // 配置后端路由
  const router = js.router(base)
  // 处理登录逻辑
  server.post(login, (req, res) => {
    const { db } = router
    const data = db.get('login').value()
    res.jsonp({
      code: 0,
      data,
      message: ''
    })
  })
  // 处理登出逻辑
  server.post(logout, (req, res) => {
    const { db } = router
    const data = db.get('logout').value()
    res.jsonp({
      code: 0,
      data,
      message: ''
    })
  })
  // 处理验证服务
  auth && server.use(auth)
  // 注册路由
  server.use(router)
  // 返回自定义格式数据
  router.render = (req, res) => {
    let data = {}
    const local = res.locals.data
    if (Array.isArray(local) && !blackList.includes(req.originalUrl)) {
      data = {
        list: local,
        total: 20
      }
    } else {
      data = local
    }
    res.jsonp({
      code: 0,
      data,
      message: ''
    })
  }
  // 启动服务
  server.listen(port, () => console.log(`Server is running on ${port}...`))
}

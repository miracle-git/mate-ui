import { getUrl, getInstance, handleParam } from '../.internal/http'

class HttpClient {
  constructor(base, interceptor, config) {
    this.base = base
    this.config = config
    this.instance = getInstance(interceptor, config)
  }

  get(url, param, config) {
    url = getUrl(url, this.base, config)
    const { _param, _config } = handleParam(param, { ...this.config, ...config })
    return this.instance.get(url, _param)
  }

  post(url, param, config) {
    url = getUrl(url, this.base, config)
    const { _param, _config } = handleParam(param, { ...this.config, ...config })
    return this.instance.post(url, _param)
  }
}

export default (function () {
  let instance
  return function ({ base = {}, interceptor = {}, config = {} } = {}) {
    if (!instance) {
      instance = new HttpClient(base, interceptor, config)
    }
    return instance
  }
})()


// http.js
// import { Http } from '@mate-ui/core'

// export default Http({
  //   base: {},
  //   interceptor: {
  //     request() {},
  //     response() {}
  //   },
  //   config: {
  //     loading...
  //   }
// })

// user.service.js
// import http from '../http'
// import api from '../api'

// export default class UserService {
//   async static getUserList() {
//     const res = await http.get(api.user.list, { a: 1, b: 2 }, { loading: true })
//     // ... 对User模块进行相关的数据处理(可能服务于"用户中心"视图)
//     const data = handleUserList(res)
//     return Promise.resolve(data)
//   }
// }

// member.service.js
// import http from '../http'
// import api from '../api'

// export default class MemberService {
//   async static getMemberList() {
//     const res = await http.get(api.user.list, { a: 1, b: 2, c: 3 }, { loading: true })
//     // ... 对Member模块进行相关的数据处理(可能服务于"会员中心"视图)
//     const data = handleMemberList(res)
//     return Promise.resolve(data)
//   }
// }

// view
// import { UserService } from '../services'
//
// // methods
// methods: {
//   async init() {
//     // 获取服务端数据进行客户端视图渲染
//     this.userList = await UserService.getUserList()
//   }
// }





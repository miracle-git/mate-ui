import Api from '../src/api'

test('测试：API地址映射(无mock)', () => {
  const config = {
    dict: '/dict/list',
    user: {
      list: '/user/list',
      detail: '/user/detail'
    },
    product: {
      list: '/product/list',
      detail: '/product/detail',
      category: '/product/category'
    }
  }
  // app 参数此时可相互隔离测试，实战项目推荐使用(避免多项目全局变量覆盖)
  const api = Api.map(config, '/api', { app: 'no-mock' })
  expect(api.dict).toEqual('/api/dict/list')
  expect(api.user.list).toEqual('/api/user/list')
  expect(api.product.list).toEqual('/api/product/list')
})

test('测试：API地址映射(有mock)', () => {
  const config = {
    dict: '/dict/list',
    user: {
      list: '/user/list',
      detail: '/user/detail'
    },
    product: {
      list: '/product/list',
      detail: '/product/detail',
      category: '/product/category'
    }
  }
  const api = Api.map(config, '/api', {
    app: 'with-mock',
    mock: [
      '/user/list',
      '/product/list'
    ]
  })
  expect(api.dict).toEqual('/api/dict/list')
  expect(api.user.list).toEqual('/api/mock/user/list')
  expect(api.product.list).toEqual('/api/mock/product/list')
})

test('测试：API地址映射(有mock并自定义前缀)', () => {
  const config = {
    dict: '/dict/list',
    user: {
      list: '/user/list',
      detail: '/user/detail'
    },
    product: {
      list: '/product/list',
      detail: '/product/detail',
      category: '/product/category'
    }
  }
  const api = Api.map(config, '/api', {
    app: 'with-mock-prefix',
    mock: {
      prefix: '/mock-api',
      urls: [
        '/user/list',
        '/product/list'
      ]
    }
  })
  expect(api.dict).toEqual('/api/dict/list')
  expect(api.user.list).toEqual('/api/mock-api/user/list')
  expect(api.product.list).toEqual('/api/mock-api/product/list')
})

test('测试：API地址映射(地址归类)', () => {
  const config = {
    common: {
      dict: '/dict/list'
    },
    user: {
      list: '/list',
      detail: '/detail'
    },
    product: {
      list: '/list',
      detail: '/detail',
      category: '/category'
    }
  }
  const api = Api.map(config, {
    multi: true,
    common: '/api',
    user: '/api/user',
    product: '/api/product'
  }, {
    app: 'with-multi-api',
  })
  expect(api.common.dict).toEqual('/api/dict/list')
  expect(api.user.list).toEqual('/api/user/list')
  expect(api.product.list).toEqual('/api/product/list')
})

test('测试：API地址映射(添加第三方api)', () => {
  const config = {
    dict: '/dict/list',
    user: {
      list: '/user/list',
      detail: '/user/detail'
    },
    product: {
      list: '/product/list',
      detail: '/product/detail',
      category: '/product/category'
    },
    others: {
      map: '/google/map',
      book: '/amazon/book'
    }
  }
  const api = Api.map(config, {
    prefix: '/api',
    key: 'others'
  }, {
    app: 'with-other-api',
  })
  expect(api.dict).toEqual('/api/dict/list')
  expect(api.user.list).toEqual('/api/user/list')
  expect(api.product.list).toEqual('/api/product/list')
  expect(api.others.map).toEqual('/google/map')
  expect(api.others.book).toEqual('/amazon/book')
})

test('测试：API地址映射(加密)', () => {
  const config = {
    dict: '/dict/list',
    user: {
      list: '/user/list',
      detail: '/user/detail'
    },
    product: {
      list: '/product/list',
      detail: '/product/detail',
      category: '/product/category'
    }
  }
  const api = Api.map(config, '/api', { app: 'with-crypto', crypto: true })
  expect(api.dict).toEqual('/api/dict/list')
  expect(api.user.list).toEqual('/api/user/list')
  expect(api.product.list).toEqual('/api/product/list')
  expect(window['__MATE_WITH-CRYPTO_API__']).toEqual('f7842980a2c5019d5ab9eddc5db18cfeb4afd2f41177a84e68b882961992fcfb3bf086a211efc6214fbe3ff016beaf0b3518f3891887da9f9ea7d2f7bdd29063a951fdf79705a86c8053d78df2284f15c0756ec18353abbcf35086d9122627f7aff7785e680ddd3ea9471c30e13d759cf2412e1ef09c2beed48c22c513c3178f2a1b9d8958122d22abb5ab4f02df0e21533578f32cd1f2718e6838aeac27cb593d056f62f819e5efdd6cf2b3abe7f74390376d17760915d4fb1c2d5660b23352')
})

test('测试：API地址映射(动态参数)', () => {
  const config = {
    dict: '/dict/list',
    user: {
      list: '/user/list',
      detail: '/user/detail/[id]'
    },
    product: {
      list: '/product/list',
      detail: '/product/detail',
      category: '/product/category/[name]/[mode]'
    }
  }
  const api = Api.map(config, '/api', { app: 'with-dynamic-params' })
  expect(Api.format(api.user.detail, { id: '001' })).toEqual('/api/user/detail/001')
  expect(Api.format(api.product.category, { name: 'huawei', mode: 'p40' })).toEqual('/api/product/category/huawei/p40')
})

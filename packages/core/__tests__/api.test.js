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
  const api = Api.map(config, '/api')
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
  const api = Api.map(config, '/api', [
    '/user/list',
    '/product/list'
  ])
  expect(api.dict).toEqual('/api/dict/list')
  expect(api.user.list).toEqual('/api/user/list')
  expect(api.product.list).toEqual('/api/product/list')
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
    prefix: '/mock-api',
    urls: [
      '/user/list',
      '/product/list'
    ]
  })
  expect(api.dict).toEqual('/api/dict/list')
  expect(api.user.list).toEqual('/api/user/list')
  expect(api.product.list).toEqual('/api/product/list')
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
  })
  expect(api.dict).toEqual('/api/dict/list')
  expect(api.user.list).toEqual('/api/user/list')
  expect(api.product.list).toEqual('/api/product/list')
  expect(api.others.map).toEqual('/google/map')
  expect(api.others.book).toEqual('/amazon/book')
})

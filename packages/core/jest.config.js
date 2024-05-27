module.exports = {
  clearMocks: true,
  coverageProvider: 'v8',
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // 支持测试环境访问dom
  // 配置测试环境
  testEnvironmentOptions: {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
  },
  reporters: [
    "default",
    ["./node_modules/jest-html-reporters", {
      "pageTitle": "Mate-UI Core Test Report",
      "publicPath": "./test/report",
      "expand": true
    }]
  ]
}

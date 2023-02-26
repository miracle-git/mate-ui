module.exports = {
  presets: [
    '@babel/typescript',
    [
      '@babel/env',
      {
        modules: false,
        loose: true
      }
    ]
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread'
  ],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs']
    }
  }
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['@mate-ui/eslint', 'prettier'],
  overrides: [
    {
      files: ['*.config.{ts,js}'],
      rules: {
        'import/no-default-export': 'off'
      }
    }
  ]
}

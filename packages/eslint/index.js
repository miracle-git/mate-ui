module.exports = {
  extends: ['turbo', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'unicorn'],
  rules: {
    'arrow-body-style': 'off', // 强制或禁止箭头函数体使用大括号
    'prefer-arrow-callback': 'off', // 要求使用箭头函数作为回调
    'semi': ['error', 'always'], // 半风格-强制一致地使用反引号、双引号或单引号
    'quotes': ['error', 'double'], // 引号-强制一致地使用反引号、双引号或单引号
    'eqeqeq': ['error', 'always'], // 需要使用 === 和 !== (消除类型不安全的相等运算符)
    'object-shorthand': ['error', 'always'],
    'no-sequences': [
      'error', {
        allowInParentheses: false
      }
    ],
    'prefer-template': 'error', // 字符串拼接使用字符串模板而不是+
    'curly': 'error', // 确保将块语句包裹在花括号中来防止错误并提高代码清晰度
    'padding-line-between-statements': [
      'error', {
        blankLine: 'always',
        prev: ['function', 'class', 'const', 'let', 'var', 'block-like'],
        next: '*'
      }, {
        blankLine: 'always',
        prev: '*',
        next: ['return', 'block-like']
      }, {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      }
    ],
    'padded-blocks': ['error', 'never'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error', {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true
      }
    ],
    'no-console': 'error',
    'no-restricted-imports': [
      'error', {
        patterns: [{
          group: ['~/localization/*'],
          message: "Don't import any internals from a module, only use its public api"
        }]
      }
    ],
    // 对比排序前后代码，排序后的代码看起来更整洁
    'import/order': [
      'error', {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'pathGroups': [{
          pattern: '~/**',
          group: 'internal'
        }],
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true
        },
        'newlines-between': 'never'
      }
    ],
    'import/named': 'error', // 验证所有命名导入是否是引用模块中命名导出集的一部分
    'import/no-duplicates': 'error', // 导入/无重复
    'import/no-useless-path-segments': [
      // 防止在 import 和 require 语句中出现不必要的路径段
      'error', {
        noUselessIndex: true
      }
    ],
    'import/newline-after-import': 'error', // 顶级导入语句或要求调用之后有一个或多个空行
    'unicorn/no-for-loop': 'error', // 不要使用for,可以用循环替换的for-of循环
    'unicorn/consistent-function-scoping': 'error', // 将函数定义移动到可能的最高范围
    'unicorn/explicit-length-check': 'error', // 强制显式比较值的length or size属性
    'unicorn/no-array-instanceof': 'error', // 需要Array.isArray()而不是instanceof Array
    'unicorn/prefer-array-find': 'error', // 优先使用.find(…)或.findLast(…)而不是.filter(…)
    'unicorn/prefer-includes': 'error', // 优先使用.includes()而不是.indexOf()
    'unicorn/prefer-string-slice': 'error', // 字符串优先使用String#slice() 而不是 String#substr() 和 String#substring()
    'unicorn/consistent-destructuring': 'error', // 在属性上使用解构变量
    'unicorn/no-nested-ternary': 'error', // 禁止嵌套三元表达式
    'import/no-default-export': 'error', // 禁用 export default 规则
    'no-await-in-loop': 'off', // 禁止在循环中出现 await
    '@typescript-eslint/no-explicit-any': 'error', // 不允许any类型
    'no-empty-function': 'off', // Note: you must disable the base rule as it can report incorrect errors
    '@typescript-eslint/no-empty-function': 'off'
  }
}

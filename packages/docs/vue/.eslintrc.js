module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    '@vue/typescript/recommended'
  ],
  plugins: ['markdown', 'jest', '@typescript-eslint', 'import'],
  globals: {
    h: true,
    defineProps: 'readonly'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.json']
      }
    }
  },
  overrides: [
    {
      files: ['*.md'],
      processor: 'markdown/markdown',
      rules: {
        'no-console': 'off'
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json'
      },
      rules: {
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-unused-vars': [
          'error',
          { vars: 'all', args: 'after-used', ignoreRestSiblings: true }
        ],
        '@typescript-eslint/ban-ts-comment': 0
      }
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2021
      },
      rules: {
        'no-console': 'off',
        'vue/no-reserved-component-names': 'off'
      }
    }
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true, argsIgnorePattern: '^_' }
    ],
    'import/no-named-as-default': 'off',
    'import/namespace': [2, { allowComputed: true }],
    'import/no-named-as-default-member': 'off',
    'import/no-unresolved': [2, { ignore: ['@', 'lru*'] }],
    'comma-dangle': 'off',
    'no-var': 'error',
    'no-console': [2, { allow: ['warn', 'error'] }],
    'object-shorthand': 2,
    'no-unused-vars': [2, { ignoreRestSiblings: true, argsIgnorePattern: '^_' }],
    'no-undef': 2,
    'camelcase': 'off',
    'no-extra-boolean-cast': 'off',
    'semi': 'off',
    'vue/no-v-html': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-reserved-keys': 'off',
    'vue/comment-directive': 'off',
    'vue/prop-name-casing': 'off',
    'vue/one-component-per-file': 'off',
    'vue/custom-event-name-casing': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 20,
        multiline: 1
      }
    ],
    'vue/multi-word-component-names': 'off'
  }
}

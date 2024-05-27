import path from 'path'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import rollupTypescript from 'rollup-plugin-typescript2'
import { DEFAULT_EXTENSIONS } from '@babel/core'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'
const env = process.env.NODE_ENV
const name = 'MT'

const config = {
  // 入口文件，src/index.ts
  input: path.resolve(__dirname, 'src/index.ts'),
  // 输出文件
  output: [{
    // commonjs: package.json 配置的 main 属性
    file: pkg.main,
    format: 'cjs',
  }, {
    // es module: package.json 配置的 module 属性
    file: pkg.module,
    format: 'es',
  }, {
    // umd: package.json 配置的 umd 属性（全局变量）
    name,
    file: pkg.umd,
    format: 'umd'
  }],
  plugins: [
    // 解析第三方依赖
    resolve(),
    // 识别 commonjs 模式第三方依赖
    commonjs(),
    // rollup 编译 typescript
    rollupTypescript(),
    // babel 配置
    babel({
      // 编译库使用
      babelHelpers: 'runtime',
      // 只转换源代码，不转换外部依赖
      exclude: 'node_modules/**',
      // babel 默认不支持 ts 需要手动添加
      extensions: [
        ...DEFAULT_EXTENSIONS,
        '.ts',
      ],
    }),
    // 正式环境，压缩代码
    terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  ]
}

export default config

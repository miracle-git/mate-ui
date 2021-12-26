import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import serve from 'rollup-plugin-serve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'

const isProd = process.env.NODE_ENV === 'production'

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'mat',
      file: 'lib/mat.min.js',
      format: 'umd'
    },
    plugins: [
      resolve({
        extensions: ['.js']
      }),
      commonjs({
        include: 'node_modules/**'
      }),
      babel({
        extensions: ['.js'],
        runtimeHelpers: true,
        exclude: ['node_modules/**']
      }),
      isProd ? uglify({}, minify) : serve()
    ]
  },
  {
    input: 'src/index.js',
    output: {
      file: 'lib/mat.esm.js',
      format: 'es'
    },
    plugins: [
      resolve({
        extensions: ['.js']
      }),
      commonjs({
        include: 'node_modules/**'
      }),
      babel({
        extensions: ['.js'],
        runtimeHelpers: true,
        exclude: ['node_modules/**']
      })
    ]
  }
]

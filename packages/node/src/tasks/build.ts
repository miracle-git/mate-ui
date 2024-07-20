// import path from 'path'
// import { rollup } from 'rollup'
// import type { Plugin } from 'rollup'
// import esbuild, { minify as minifyPlugin } from 'rollup-plugin-esbuild'
// import { nodeResolve } from '@rollup/plugin-node-resolve'
// import commonjs from '@rollup/plugin-commonjs'
// import { parallel } from 'gulp'
// import vue3 from '@vitejs/plugin-vue3'
// import vueJsx from '@vitejs/plugin-vue3-jsx'
// import vueMacros from 'unplugin-vue3-macros/rollup'
// import { withTaskName } from '../utils/task'
// import alias from '../plugins/alias'
//
// export const target = 'es2018'
//
// async function buildEntry(minify: boolean) {
//   const plugins: Plugin[] = [
//     alias(),
//     vueMacros({
//       setupComponent: false,
//       setupSFC: false,
//       plugins: {
//         vue3: vue3({
//           isProduction: true
//         }),
//         vueJsx: vueJsx()
//       }
//     }),
//     nodeResolve({
//       extensions: ['.js', '.mjs', '.json', '.ts']
//     }),
//     commonjs(),
//     esbuild({
//       exclude: [],
//       sourceMap: minify,
//       target,
//       loaders: {
//         '.vue3': 'ts'
//       },
//       define: {
//         'process.env.NODE_ENV': JSON.stringify('production')
//       },
//       treeShaking: true,
//       legalComments: 'eof'
//     })
//   ]
//   if (minify) {
//     plugins.push(minifyPlugin({
//       target,
//       sourceMap: true
//     }))
//   }
//   // const bundle = await rollup({
//   //   input: path.resolve()
//   // })
// }
// // async function buildLocale(minify: boolean) {}
//
// // export const build = (minify: boolean) => async () =>
// //   Promise.all([buildEntry(minify), buildLocale(minify)])
//
// export const buildBundle = parallel(
//   withTaskName('build-minified', build(true)),
//   withTaskName('build-all', build(false))
// )

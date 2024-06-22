import path from 'path'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import md from '../plugins/md'
import docs from '../plugins/docs'
/**
 * @type {import('vite').UserConfig}
 */
export default {
  resolve: {
    alias: {
      vue:
        process.env.NODE_ENV === 'production'
          ? 'vue/dist/vue.runtime.esm-browser.prod.js'
          : 'vue/dist/vue.esm-bundler.js',
      '@mate-ui/vue/es': path.resolve(__dirname, '../src'),
      '@mate-ui/vue': path.resolve(__dirname, '../src'),
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.css', '.less', '.scss', '.json', '.gql', '.graphql']
  },
  server: {
    host: true
  },
  plugins: [
    jsx({
      // options are passed on to @vue/babel-plugin-jsx
      mergeProps: false,
      enableObjectSlots: false
    }),
    docs(),
    md(),
    vue({
      include: [/\.vue$/, /\.md$/]
    })
  ],
  optimizeDeps: {
    include: [
      // 'fetch-jsonp',
      // '@ant-design/icons-vue',
      // 'lodash-es',
      // 'dayjs',
      'vue',
      'vue-router',
      // 'vue-i18n',
      // 'async-validator'
    ]
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
}

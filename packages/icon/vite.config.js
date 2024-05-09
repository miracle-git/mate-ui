import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import { readdirSync } from 'node:fs'
import { resolve } from 'node:path'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const getPagePathList = () => {
  const pages = readdirSync(resolve(__dirname, 'src/component'))
  const map = {}
  pages.forEach(c => {
    map[c.replace('.js', '')] = resolve(__dirname, 'src/component', c)
  })

  return map
}

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src')
        }
      }
    }
  } else {
    return {
      build: {
        rollupOptions: {
          output: {
            exports: 'named'
          }
        },
        lib: {
          entry: {
            index: 'src/index.js',
            ...getPagePathList(),
          },
          output: {

          },
          formats: ['es', 'cjs'],
          fileName(format, entryName) {
            if (format === 'es') {
              if (entryName === 'index') {
                return `index.js`;
              } else {
                return `es/${entryName}.js`
              }
            } else if (format === 'cjs') {
              if (entryName === 'index') {
                return `index.cjs.js`
              } else {
                return `cjs/${entryName}.js`
              }
            }
          }
        }
      }
    }
  }
})

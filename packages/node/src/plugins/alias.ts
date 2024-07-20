import type { Plugin } from 'rollup'
import { PKG } from '../constants'

export default function alias(): Plugin {
  const theme = 'theme'
  const source = `${PKG.prefix}/${theme}` as const
  const bundle = `${PKG.name}/${theme}` as const

  return {
    name: 'mate-ui-alias-plugin',
    resolveId(id) {
      if (!id.startsWith(source)) return
      return {
        id: id.replaceAll(source, bundle),
        external: 'absolute'
      }
    }
  }
}

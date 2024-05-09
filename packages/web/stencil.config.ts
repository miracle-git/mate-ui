import { Config } from '@stencil/core'

export const config: Config = {
  namespace: 'mate',
  globalStyle: 'src/index.css',
  globalScript: 'src/global.ts',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
      customElementsExportBehavior: 'bundle',
      copy: [
        { src: 'components/icon/icon.svg', dest: 'dist/components/svg/icon.svg', warn: true },
        { src: 'index.css', dest: 'dist/index.css', warn: true }
      ]
    }
  ]
}

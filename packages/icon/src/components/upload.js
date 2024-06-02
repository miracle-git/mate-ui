/* Automatically generated by @mate-ui 'script/transfer.mjs' */
import MtHtmlElement from './element'

class MtIconUpload extends MtHtmlElement {
  constructor() {
    super(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z"/></svg>`
    )
  }
}

export default MtIconUpload

function install() {
  if (window.customElements.get('mt-icon-upload')) return
  window.customElements.define('mt-icon-upload', MtIconUpload)
}

export { install as registerComponent }
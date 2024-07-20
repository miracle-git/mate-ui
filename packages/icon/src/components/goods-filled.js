/* Automatically generated by @mate-ui 'script/transfer.mjs' */
import MtIconElement from './icon'

class MtIconGoodsFilled extends MtIconElement {
  constructor() {
    super(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M192 352h640l64 544H128l64-544zm128 224h64V448h-64v128zm320 0h64V448h-64v128zM384 288h-64a192 192 0 1 1 384 0h-64a128 128 0 1 0-256 0z"/></svg>`)
  }
}

export default MtIconGoodsFilled

function install() {
  if (window.customElements.get('mt-icon-goods-filled')) return
  window.customElements.define('mt-icon-goods-filled', MtIconGoodsFilled)
}

export { install as registerComponent }
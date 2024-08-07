/* Automatically generated by @mate-ui 'script/transfer.mjs' */
import MtIconElement from './icon'

class MtIconBrushFilled extends MtIconElement {
  constructor() {
    super(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M608 704v160a96 96 0 0 1-192 0V704h-96a128 128 0 0 1-128-128h640a128 128 0 0 1-128 128h-96zM192 512V128.064h640V512H192z"/></svg>`)
  }
}

export default MtIconBrushFilled

function install() {
  if (window.customElements.get('mt-icon-brush-filled')) return
  window.customElements.define('mt-icon-brush-filled', MtIconBrushFilled)
}

export { install as registerComponent }
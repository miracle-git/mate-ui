/* Automatically generated by @mate-ui 'script/transfer.mjs' */
import MtIconElement from './icon'

class MtIconCaretLeft extends MtIconElement {
  constructor() {
    super(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M672 192 288 511.936 672 832z"/></svg>`)
  }
}

export default MtIconCaretLeft

function install() {
  if (window.customElements.get('mt-icon-caret-left')) return
  window.customElements.define('mt-icon-caret-left', MtIconCaretLeft)
}

export { install as registerComponent }
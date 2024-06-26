/* Automatically generated by @mate-ui 'script/transfer.mjs' */
import MtHtmlElement from './element'

class MtIconCaretTop extends MtHtmlElement {
  constructor() {
    super(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 320 192 704h639.936z"/></svg>`
    )
  }
}

export default MtIconCaretTop

function install() {
  if (window.customElements.get('mt-icon-caret-top')) return
  window.customElements.define('mt-icon-caret-top', MtIconCaretTop)
}

export { install as registerComponent }

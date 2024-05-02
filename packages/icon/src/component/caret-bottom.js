import MtIconElement from './icon'

class MtIconCaretBottom extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="m192 384 320 384 320-384z"/>
      </svg>
    `)
  }
}
export default MtIconCaretBottom
function install() {
  if (window.customElements.get('mt-icon-caret-bottom')) return
  window.customElements.define('mt-icon-caret-bottom', MtIconCaretBottom)
}
export { install as registerComponent }

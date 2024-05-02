import MtIconElement from './icon'

class MtIconCaretRight extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M384 192v640l384-320.064z"/>
      </svg>
    `)
  }
}
export default MtIconCaretRight
function install() {
  if (window.customElements.get('mt-icon-caret-right')) return
  window.customElements.define('mt-icon-caret-right', MtIconCaretRight)
}
export { install as registerComponent }

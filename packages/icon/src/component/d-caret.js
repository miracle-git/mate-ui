import MtIconElement from './icon'

class MtIconDCaret extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="m512 128 288 320H224l288-320zM224 576h576L512 896 224 576z"/>
      </svg>
    `)
  }
}
export default MtIconDCaret
function install() {
  if (window.customElements.get('mt-icon-d-caret')) return
  window.customElements.define('mt-icon-d-caret', MtIconDCaret)
}
export { install as registerComponent }

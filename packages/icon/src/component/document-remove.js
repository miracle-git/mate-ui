import MtIconElement from './icon'

class MtIconDocumentRemove extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm192 512h320v64H352v-64z"/>
      </svg>
    `)
  }
}
export default MtIconDocumentRemove
function install() {
  if (window.customElements.get('mt-icon-document-remove')) return
  window.customElements.define('mt-icon-document-remove', MtIconDocumentRemove)
}
export { install as registerComponent }

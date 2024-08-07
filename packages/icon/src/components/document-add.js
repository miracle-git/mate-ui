/* Automatically generated by @mate-ui 'script/transfer.mjs' */
import MtIconElement from './icon'

class MtIconDocumentAdd extends MtIconElement {
  constructor() {
    super(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm320 512V448h64v128h128v64H544v128h-64V640H352v-64h128z"/></svg>`)
  }
}

export default MtIconDocumentAdd

function install() {
  if (window.customElements.get('mt-icon-document-add')) return
  window.customElements.define('mt-icon-document-add', MtIconDocumentAdd)
}

export { install as registerComponent }
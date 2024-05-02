/* Automatically generated by @mate-ui 'script/transfer.mjs' */
import MtHtmlElement from './element'

class MtIconCrop extends MtHtmlElement {
  constructor() {
    super(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M256 768h672a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V96a32 32 0 0 1 64 0v672z"/><path fill="currentColor" d="M832 224v704a32 32 0 1 1-64 0V256H96a32 32 0 0 1 0-64h704a32 32 0 0 1 32 32z"/></svg>`)
  }
}

export default MtIconCrop

function install() {
  if (window.customElements.get('mt-icon-crop')) return
  window.customElements.define('mt-icon-crop', MtIconCrop)
}

export { install as registerComponent }
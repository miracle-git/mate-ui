/* Automatically generated by @mate-ui 'script/transfer.mjs' */
import MtIconElement from './icon'

class MtIconArrowLeftBold extends MtIconElement {
  constructor() {
    super(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"/></svg>`)
  }
}

export default MtIconArrowLeftBold

function install() {
  if (window.customElements.get('mt-icon-arrow-left-bold')) return
  window.customElements.define('mt-icon-arrow-left-bold', MtIconArrowLeftBold)
}

export { install as registerComponent }
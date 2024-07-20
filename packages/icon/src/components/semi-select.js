/* Automatically generated by @mate-ui 'script/transfer.mjs' */
import MtIconElement from './icon'

class MtIconSemiSelect extends MtIconElement {
  constructor() {
    super(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M128 448h768q64 0 64 64t-64 64H128q-64 0-64-64t64-64z"/></svg>`)
  }
}

export default MtIconSemiSelect

function install() {
  if (window.customElements.get('mt-icon-semi-select')) return
  window.customElements.define('mt-icon-semi-select', MtIconSemiSelect)
}

export { install as registerComponent }
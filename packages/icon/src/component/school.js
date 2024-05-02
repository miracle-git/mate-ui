/* Automatically generated by @mate-ui 'script/transfer.mjs' */
import MtHtmlElement from './element'

class MtIconSchool extends MtHtmlElement {
  constructor() {
    super(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M224 128v704h576V128H224zm-32-64h640a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"/><path fill="currentColor" d="M64 832h896v64H64zm256-640h128v96H320z"/><path fill="currentColor" d="M384 832h256v-64a128 128 0 1 0-256 0v64zm128-256a192 192 0 0 1 192 192v128H320V768a192 192 0 0 1 192-192zM320 384h128v96H320zm256-192h128v96H576zm0 192h128v96H576z"/></svg>`)
  }
}

export default MtIconSchool

function install() {
  if (window.customElements.get('mt-icon-school')) return
  window.customElements.define('mt-icon-school', MtIconSchool)
}

export { install as registerComponent }
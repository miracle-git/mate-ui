/* Automatically generated by @mate-ui 'script/transfer.mjs' */
import MtHtmlElement from './element'

class MtIconCoordinate extends MtHtmlElement {
  constructor() {
    super(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M480 512h64v320h-64z"/><path fill="currentColor" d="M192 896h640a64 64 0 0 0-64-64H256a64 64 0 0 0-64 64zm64-128h512a128 128 0 0 1 128 128v64H128v-64a128 128 0 0 1 128-128zm256-256a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"/></svg>`)
  }
}

export default MtIconCoordinate

function install() {
  if (window.customElements.get('mt-icon-coordinate')) return
  window.customElements.define('mt-icon-coordinate', MtIconCoordinate)
}

export { install as registerComponent }
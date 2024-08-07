/* Automatically generated by @mate-ui 'script/transfer.mjs' */
import MtIconElement from './icon'

class MtIconCellphone extends MtIconElement {
  constructor() {
    super(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M256 128a64 64 0 0 0-64 64v640a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H256zm0-64h512a128 128 0 0 1 128 128v640a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V192A128 128 0 0 1 256 64zm128 128h256a32 32 0 1 1 0 64H384a32 32 0 0 1 0-64zm128 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"/></svg>`)
  }
}

export default MtIconCellphone

function install() {
  if (window.customElements.get('mt-icon-cellphone')) return
  window.customElements.define('mt-icon-cellphone', MtIconCellphone)
}

export { install as registerComponent }
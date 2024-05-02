/* Automatically generated by @mate-ui 'script/transfer.mjs' */
import MtHtmlElement from './element'

class MtIconMagnet extends MtHtmlElement {
  constructor() {
    super(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M832 320V192H704v320a192 192 0 1 1-384 0V192H192v128h128v64H192v128a320 320 0 0 0 640 0V384H704v-64h128zM640 512V128h256v384a384 384 0 1 1-768 0V128h256v384a128 128 0 1 0 256 0z"/></svg>`)
  }
}

export default MtIconMagnet

function install() {
  if (window.customElements.get('mt-icon-magnet')) return
  window.customElements.define('mt-icon-magnet', MtIconMagnet)
}

export { install as registerComponent }
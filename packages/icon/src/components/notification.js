/* Automatically generated by @mate-ui 'script/transfer.mjs' */
import MtHtmlElement from './element'

class MtIconNotification extends MtHtmlElement {
  constructor() {
    super(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 128v64H256a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V512h64v256a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V256a128 128 0 0 1 128-128h256z"/><path fill="currentColor" d="M768 384a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"/></svg>`
    )
  }
}

export default MtIconNotification

function install() {
  if (window.customElements.get('mt-icon-notification')) return
  window.customElements.define('mt-icon-notification', MtIconNotification)
}

export { install as registerComponent }
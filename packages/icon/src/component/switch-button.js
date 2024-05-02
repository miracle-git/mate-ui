/* Automatically generated by @mate-ui 'script/transfer.mjs' */
import MtHtmlElement from './element'

class MtIconSwitchButton extends MtHtmlElement {
  constructor() {
    super(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"/><path fill="currentColor" d="M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32z"/></svg>`)
  }
}

export default MtIconSwitchButton

function install() {
  if (window.customElements.get('mt-icon-switch-button')) return
  window.customElements.define('mt-icon-switch-button', MtIconSwitchButton)
}

export { install as registerComponent }
/* Automatically generated by @mate-ui 'script/transfer.mjs' */
import MtHtmlElement from './element'

class MtIconArrowDownBold extends MtHtmlElement {
  constructor() {
    super(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"/></svg>`)
  }
}

export default MtIconArrowDownBold

function install() {
  if (window.customElements.get('mt-icon-arrow-down-bold')) return
  window.customElements.define('mt-icon-arrow-down-bold', MtIconArrowDownBold)
}

export { install as registerComponent }
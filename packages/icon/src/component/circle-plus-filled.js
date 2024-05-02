/* Automatically generated by @mate-ui 'script/transfer.mjs' */
import MtHtmlElement from './element'

class MtIconCirclePlusFilled extends MtHtmlElement {
  constructor() {
    super(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0v147.2z"/></svg>`)
  }
}

export default MtIconCirclePlusFilled

function install() {
  if (window.customElements.get('mt-icon-circle-plus-filled')) return
  window.customElements.define('mt-icon-circle-plus-filled', MtIconCirclePlusFilled)
}

export { install as registerComponent }
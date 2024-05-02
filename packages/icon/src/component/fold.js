import MtIconElement from './icon'

class MtIconFold extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384 128 512l192 128V384z"/>
      </svg>
    `)
  }
}
export default MtIconFold
function install() {
  if (window.customElements.get('mt-icon-fold')) return
  window.customElements.define('mt-icon-fold', MtIconFold)
}
export { install as registerComponent }

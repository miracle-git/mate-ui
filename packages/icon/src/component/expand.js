import MtIconElement from './icon'

class MtIconExpand extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"/>
      </svg>
    `)
  }
}
export default MtIconExpand
function install() {
  if (window.customElements.get('mt-icon-expand')) return
  window.customElements.define('mt-icon-expand', MtIconExpand)
}
export { install as registerComponent }

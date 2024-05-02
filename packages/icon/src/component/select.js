import MtIconElement from './icon'

class MtIconSelect extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"/>
      </svg>
    `)
  }
}
export default MtIconSelect
function install() {
  if (window.customElements.get('mt-icon-select')) return
  window.customElements.define('mt-icon-select', MtIconSelect)
}
export { install as registerComponent }

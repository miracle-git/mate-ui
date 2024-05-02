import MtIconElement from './icon'

class MtIconPlus extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"/>
      </svg>
    `)
  }
}
export default MtIconPlus
function install() {
  if (window.customElements.get('mt-icon-plus')) return
  window.customElements.define('mt-icon-plus', MtIconPlus)
}
export { install as registerComponent }

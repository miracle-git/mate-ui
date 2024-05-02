import MtIconElement from './icon'

class MtIconArrowUpBold extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8 316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"/>
      </svg>
    `)
  }
}
export default MtIconArrowUpBold
function install() {
  if (window.customElements.get('mt-icon-arrow-up-bold')) return
  window.customElements.define('mt-icon-arrow-up-bold', MtIconArrowUpBold)
}
export { install as registerComponent }

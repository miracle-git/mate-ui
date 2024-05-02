import MtIconElement from './icon'

class MtIconUmbrella extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M320 768a32 32 0 1 1 64 0 64 64 0 0 0 128 0V512H64a448 448 0 1 1 896 0H576v256a128 128 0 1 1-256 0zm570.688-320a384.128 384.128 0 0 0-757.376 0h757.376z"/>
      </svg>
    `)
  }
}
export default MtIconUmbrella
function install() {
  if (window.customElements.get('mt-icon-umbrella')) return
  window.customElements.define('mt-icon-umbrella', MtIconUmbrella)
}
export { install as registerComponent }

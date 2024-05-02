import MtIconElement from './icon'

class MtIconWarning extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"/>
      </svg>
    `)
  }
}
export default MtIconWarning
function install() {
  if (window.customElements.get('mt-icon-warning')) return
  window.customElements.define('mt-icon-warning', MtIconWarning)
}
export { install as registerComponent }

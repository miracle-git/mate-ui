import MtIconElement from './icon'

class MtIconChecked extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M704 192h160v736H160V192h160.064v64H704v-64zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024 311.616 537.28zM384 192V96h256v96H384z"/>
      </svg>
    `)
  }
}
export default MtIconChecked
function install() {
  if (window.customElements.get('mt-icon-checked')) return
  window.customElements.define('mt-icon-checked', MtIconChecked)
}
export { install as registerComponent }

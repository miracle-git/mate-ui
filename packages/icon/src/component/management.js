import MtIconElement from './icon'

class MtIconManagement extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M576 128v288l96-96 96 96V128h128v768H320V128h256zm-448 0h128v768H128V128z"/>
      </svg>
    `)
  }
}
export default MtIconManagement
function install() {
  if (window.customElements.get('mt-icon-management')) return
  window.customElements.define('mt-icon-management', MtIconManagement)
}
export { install as registerComponent }

import MtIconElement from './icon'

class MtIconHistogram extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M416 896V128h192v768H416zm-288 0V448h192v448H128zm576 0V320h192v576H704z"/>
      </svg>
    `)
  }
}
export default MtIconHistogram
function install() {
  if (window.customElements.get('mt-icon-histogram')) return
  window.customElements.define('mt-icon-histogram', MtIconHistogram)
}
export { install as registerComponent }

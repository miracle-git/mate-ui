import MtIconElement from './icon'

class MtIconPlatform extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M448 832v-64h128v64h192v64H256v-64h192zM128 704V128h768v576H128z"/>
      </svg>
    `)
  }
}
export default MtIconPlatform
function install() {
  if (window.customElements.get('mt-icon-platform')) return
  window.customElements.define('mt-icon-platform', MtIconPlatform)
}
export { install as registerComponent }

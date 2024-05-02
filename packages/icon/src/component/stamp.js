import MtIconElement from './icon'

class MtIconStamp extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M624 475.968V640h144a128 128 0 0 1 128 128H128a128 128 0 0 1 128-128h144V475.968a192 192 0 1 1 224 0zM128 896v-64h768v64H128z"/>
      </svg>
    `)
  }
}
export default MtIconStamp
function install() {
  if (window.customElements.get('mt-icon-stamp')) return
  window.customElements.define('mt-icon-stamp', MtIconStamp)
}
export { install as registerComponent }

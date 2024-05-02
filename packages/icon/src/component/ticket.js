import MtIconElement from './icon'

class MtIconTicket extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M640 832H64V640a128 128 0 1 0 0-256V192h576v160h64V192h256v192a128 128 0 1 0 0 256v192H704V672h-64v160zm0-416v192h64V416h-64z"/>
      </svg>
    `)
  }
}
export default MtIconTicket
function install() {
  if (window.customElements.get('mt-icon-ticket')) return
  window.customElements.define('mt-icon-ticket', MtIconTicket)
}
export { install as registerComponent }

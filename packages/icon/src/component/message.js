import MtIconElement from './icon'

class MtIconMessage extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224H128zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64z"/>
        <path fill="currentColor" d="M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224h784zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056z"/>
      </svg>
    `)
  }
}
export default MtIconMessage
function install() {
  if (window.customElements.get('mt-icon-message')) return
  window.customElements.define('mt-icon-message', MtIconMessage)
}
export { install as registerComponent }

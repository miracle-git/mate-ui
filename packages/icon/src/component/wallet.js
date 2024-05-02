import MtIconElement from './icon'

class MtIconWallet extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M640 288h-64V128H128v704h384v32a32 32 0 0 0 32 32H96a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h512a32 32 0 0 1 32 32v192z"/>
        <path fill="currentColor" d="M128 320v512h768V320H128zm-32-64h832a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32z"/>
        <path fill="currentColor" d="M704 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"/>
      </svg>
    `)
  }
}
export default MtIconWallet
function install() {
  if (window.customElements.get('mt-icon-wallet')) return
  window.customElements.define('mt-icon-wallet', MtIconWallet)
}
export { install as registerComponent }

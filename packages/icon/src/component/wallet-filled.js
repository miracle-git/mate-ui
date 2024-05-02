import MtIconElement from './icon'

class MtIconWalletFilled extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M688 512a112 112 0 1 0 0 224h208v160H128V352h768v160H688zm32 160h-32a48 48 0 0 1 0-96h32a48 48 0 0 1 0 96zm-80-544 128 160H384l256-160z"/>
      </svg>
    `)
  }
}
export default MtIconWalletFilled
function install() {
  if (window.customElements.get('mt-icon-wallet-filled')) return
  window.customElements.define('mt-icon-wallet-filled', MtIconWalletFilled)
}
export { install as registerComponent }

import MtIconElement from './icon'

class MtIconShoppingBag extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M704 320v96a32 32 0 0 1-32 32h-32V320H384v128h-32a32 32 0 0 1-32-32v-96H192v576h640V320H704zm-384-64a192 192 0 1 1 384 0h160a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32h160zm64 0h256a128 128 0 1 0-256 0z"/>
        <path fill="currentColor" d="M192 704h640v64H192z"/>
      </svg>
    `)
  }
}
export default MtIconShoppingBag
function install() {
  if (window.customElements.get('mt-icon-shopping-bag')) return
  window.customElements.define('mt-icon-shopping-bag', MtIconShoppingBag)
}
export { install as registerComponent }

import MtIconElement from './icon'

class MtIconIceCreamSquare extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M416 640h256a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32H352a32 32 0 0 0-32 32v448a32 32 0 0 0 32 32h64zm192 64v160a96 96 0 0 1-192 0V704h-64a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96h320a96 96 0 0 1 96 96v448a96 96 0 0 1-96 96h-64zm-64 0h-64v160a32 32 0 1 0 64 0V704z"/>
      </svg>
    `)
  }
}
export default MtIconIceCreamSquare
function install() {
  if (window.customElements.get('mt-icon-ice-cream-square')) return
  window.customElements.define('mt-icon-ice-cream-square', MtIconIceCreamSquare)
}
export { install as registerComponent }

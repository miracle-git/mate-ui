import MtIconElement from './icon'

class MtIconPromotion extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="m64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472 64 448zm256 512V657.024L512 768 320 960z"/>
      </svg>
    `)
  }
}
export default MtIconPromotion
function install() {
  if (window.customElements.get('mt-icon-promotion')) return
  window.customElements.define('mt-icon-promotion', MtIconPromotion)
}
export { install as registerComponent }

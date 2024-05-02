import MtIconElement from './icon'

class MtIconLeft extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="currentColor" d="M31 36 19 24l12-12" data-follow-stroke="#9b9b9b"/>
      </svg>
    `)
  }
}
export default MtIconLeft
function install() {
  if (window.customElements.get('mt-icon-left')) return
  window.customElements.define('mt-icon-left', MtIconLeft)
}
export { install as registerComponent }

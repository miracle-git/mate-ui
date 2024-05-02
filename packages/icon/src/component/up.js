import MtIconElement from './icon'

class MtIconUp extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="currentColor" d="m13 30 12-12 12 12" data-follow-stroke="#9b9b9b"/>
      </svg>
    `)
  }
}
export default MtIconUp
function install() {
  if (window.customElements.get('mt-icon-up')) return
  window.customElements.define('mt-icon-up', MtIconUp)
}
export { install as registerComponent }

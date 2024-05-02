import MtIconElement from './icon'

class MtIconDown extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="currentColor" d="M36 18 24 30 12 18" data-follow-stroke="#9b9b9b"/>
      </svg>
    `)
  }
}
export default MtIconDown
function install() {
  if (window.customElements.get('mt-icon-down')) return
  window.customElements.define('mt-icon-down', MtIconDown)
}
export { install as registerComponent }

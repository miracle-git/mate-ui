import MtIconElement from './icon'

class MtIconUpCircle extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
        <path stroke-width="3" stroke="currentColor" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z" clip-rule="evenodd" data-follow-stroke="#9b9b9b"/>
        <path stroke-linejoin="round" stroke-width="3" stroke="currentColor" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z" data-follow-stroke="#9b9b9b"/>
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="currentColor" d="m33 27-9-9-9 9" data-follow-stroke="#9b9b9b"/>
      </svg>
    `)
  }
}
export default MtIconUpCircle
function install() {
  if (window.customElements.get('mt-icon-up-circle')) return
  window.customElements.define('mt-icon-up-circle', MtIconUpCircle)
}
export { install as registerComponent }

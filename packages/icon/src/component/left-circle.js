import MtIconElement from './icon'

class MtIconLeftCircle extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
        <path stroke-linejoin="round" stroke-width="3" stroke="currentColor" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z" data-follow-stroke="#9b9b9b"/>
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="currentColor" d="m27 33-9-9 9-9" data-follow-stroke="#9b9b9b"/>
      </svg>
    `)
  }
}
export default MtIconLeftCircle
function install() {
  if (window.customElements.get('mt-icon-left-circle')) return
  window.customElements.define('mt-icon-left-circle', MtIconLeftCircle)
}
export { install as registerComponent }

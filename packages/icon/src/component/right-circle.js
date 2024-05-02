import MtIconElement from './icon'

class MtIconRightCircle extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
        <path stroke-linejoin="round" stroke-width="3" stroke="currentColor" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z" data-follow-stroke="#9b9b9b"/>
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="currentColor" d="m21 33 9-9-9-9" data-follow-stroke="#9b9b9b"/>
      </svg>
    `)
  }
}
export default MtIconRightCircle
function install() {
  if (window.customElements.get('mt-icon-right-circle')) return
  window.customElements.define('mt-icon-circle', MtIconRightCircle)
}
export { install as registerComponent }

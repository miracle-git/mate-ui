import MtIconElement from './icon'

class MtIconBottomRight extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M352 768a32 32 0 1 0 0 64h448a32 32 0 0 0 32-32V352a32 32 0 0 0-64 0v416H352z"/>
        <path fill="currentColor" d="M777.344 822.656a32 32 0 0 0 45.312-45.312l-544-544a32 32 0 0 0-45.312 45.312l544 544z"/>
      </svg>
    `)
  }
}
export default MtIconBottomRight
function install() {
  if (window.customElements.get('mt-icon-bottom-right')) return
  window.customElements.define('mt-icon-bottom-right', MtIconBottomRight)
}
export { install as registerComponent }

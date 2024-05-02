import MtIconElement from './icon'

class MtIconBottomLeft extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M256 768h416a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V352a32 32 0 0 1 64 0v416z"/>
        <path fill="currentColor" d="M246.656 822.656a32 32 0 0 1-45.312-45.312l544-544a32 32 0 0 1 45.312 45.312l-544 544z"/>
      </svg>
    `)
  }
}
export default MtIconBottomLeft
function install() {
  if (window.customElements.get('mt-icon-bottom-left')) return
  window.customElements.define('mt-icon-bottom-left', MtIconBottomLeft)
}
export { install as registerComponent }


import MtIconElement from './icon'

class MtIconTopLeft extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M256 256h416a32 32 0 1 0 0-64H224a32 32 0 0 0-32 32v448a32 32 0 0 0 64 0V256z"/>
        <path fill="currentColor" d="M246.656 201.344a32 32 0 0 0-45.312 45.312l544 544a32 32 0 0 0 45.312-45.312l-544-544z"/>
      </svg>
    `)
  }
}
export default MtIconTopLeft
function install() {
  if (window.customElements.get('mt-icon-top-left')) return
  window.customElements.define('mt-icon-top-left', MtIconTopLeft)
}
export { install as registerComponent }

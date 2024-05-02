import MtIconElement from './icon'

class MtIconSortUp extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M384 141.248V928a32 32 0 1 0 64 0V218.56l242.688 242.688A32 32 0 1 0 736 416L438.592 118.656A32 32 0 0 0 384 141.248z"/>
      </svg>
    `)
  }
}
export default MtIconSortUp
function install() {
  if (window.customElements.get('mt-icon-sort-up')) return
  window.customElements.define('mt-icon-sort-up', MtIconSortUp)
}
export { install as registerComponent }

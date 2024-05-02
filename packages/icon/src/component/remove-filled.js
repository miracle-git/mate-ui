import MtIconElement from './icon'

class MtIconRemoveFilled extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zM288 512a38.4 38.4 0 0 0 38.4 38.4h371.2a38.4 38.4 0 0 0 0-76.8H326.4A38.4 38.4 0 0 0 288 512z"/>
      </svg>
    `)
  }
}
export default MtIconRemoveFilled
function install() {
  if (window.customElements.get('mt-icon-remove-filled')) return
  window.customElements.define('mt-icon-remove-filled', MtIconRemoveFilled)
}
export { install as registerComponent }

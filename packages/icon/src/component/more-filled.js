import MtIconElement from './icon'

class MtIconMoreFilled extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"/>
      </svg>
    `)
  }
}
export default MtIconMoreFilled
function install() {
  if (window.customElements.get('mt-icon-more-filled')) return
  window.customElements.define('mt-icon-more-filled', MtIconMoreFilled)
}
export { install as registerComponent }

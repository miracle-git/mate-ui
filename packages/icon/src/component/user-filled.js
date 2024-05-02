import MtIconElement from './icon'

class MtIconUserFilled extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"/>
      </svg>
    `)
  }
}
export default MtIconUserFilled
function install() {
  if (window.customElements.get('mt-icon-user-filled')) return
  window.customElements.define('mt-icon-user-filled', MtIconUserFilled)
}
export { install as registerComponent }

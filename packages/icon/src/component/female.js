import MtIconElement from './icon'

class MtIconFemale extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M512 640a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"/>
        <path fill="currentColor" d="M512 640q32 0 32 32v256q0 32-32 32t-32-32V672q0-32 32-32z"/>
        <path fill="currentColor" d="M352 800h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"/>
      </svg>
    `)
  }
}
export default MtIconFemale
function install() {
  if (window.customElements.get('mt-icon-female')) return
  window.customElements.define('mt-icon-female', MtIconFemale)
}
export { install as registerComponent }

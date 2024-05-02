import MtIconElement from './icon'

class MtIconVideoPause extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z"/>
      </svg>
    `)
  }
}
export default MtIconVideoPause
function install() {
  if (window.customElements.get('mt-icon-video-pause')) return
  window.customElements.define('mt-icon-video-pause', MtIconVideoPause)
}
export { install as registerComponent }

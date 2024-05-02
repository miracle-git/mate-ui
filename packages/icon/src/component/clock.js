import MtIconElement from './icon'

class MtIconClock extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"/>
        <path fill="currentColor" d="M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"/>
        <path fill="currentColor" d="M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z"/>
      </svg>
    `)
  }
}
export default MtIconClock
function install() {
  if (window.customElements.get('mt-icon-clock')) return
  window.customElements.define('mt-icon-clock', MtIconClock)
}
export { install as registerComponent }

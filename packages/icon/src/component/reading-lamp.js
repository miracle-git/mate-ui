import MtIconElement from './icon'

class MtIconReadingLamp extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M352 896h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm-44.672-768-99.52 448h608.384l-99.52-448H307.328zm-25.6-64h460.608a32 32 0 0 1 31.232 25.088l113.792 512A32 32 0 0 1 856.128 640H167.872a32 32 0 0 1-31.232-38.912l113.792-512A32 32 0 0 1 281.664 64z"/>
        <path fill="currentColor" d="M672 576q32 0 32 32v128q0 32-32 32t-32-32V608q0-32 32-32zm-192-.064h64V960h-64z"/>
      </svg>
    `)
  }
}
export default MtIconReadingLamp
function install() {
  if (window.customElements.get('mt-icon-reading-lamp')) return
  window.customElements.define('mt-icon-reading-lamp', MtIconReadingLamp)
}
export { install as registerComponent }

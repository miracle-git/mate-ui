import MtIconElement from './icon'

class MtIconDownload extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64v450.304z"/>
      </svg>
    `)
  }
}
export default MtIconDownload
function install() {
  if (window.customElements.get('mt-icon-download')) return
  window.customElements.define('mt-icon-download', MtIconDownload)
}
export { install as registerComponent }

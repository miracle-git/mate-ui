import MtIconElement from './icon'

class MtIconChatLineSquare extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M160 826.88 273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"/>
        <path fill="currentColor" d="M352 512h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm0-192h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"/>
      </svg>
    `)
  }
}
export default MtIconChatLineSquare
function install() {
  if (window.customElements.get('mt-icon-chat-line-square')) return
  window.customElements.define('mt-icon-chat-line-square', MtIconChatLineSquare)
}
export { install as registerComponent }

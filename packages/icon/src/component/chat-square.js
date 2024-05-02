import MtIconElement from './icon'

class MtIconChatSquare extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"/>
      </svg>
    `)
  }
}
export default MtIconChatSquare
function install() {
  if (window.customElements.get('mt-icon-chat-square')) return
  window.customElements.define('mt-icon-chat-square', MtIconChatSquare)
}
export { install as registerComponent }

import MtIconElement from './icon'

class MtIconAvatar extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z"/>
      </svg>
    `)
  }
}
export default MtIconAvatar
function install() {
  if (window.customElements.get('mt-icon-avatar')) return
  window.customElements.define('mt-icon-avatar', MtIconAvatar)
}
export { install as registerComponent }

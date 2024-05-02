import MtIconElement from './icon'

class MtIconBell extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64z"/>
        <path fill="currentColor" d="M256 768h512V448a256 256 0 1 0-512 0v320zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320z"/>
        <path fill="currentColor" d="M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm352 128h128a64 64 0 0 1-128 0z"/>
      </svg>
    `)
  }
}
export default MtIconBell
function install() {
  if (window.customElements.get('mt-icon-bell')) return
  window.customElements.define('mt-icon-bell', MtIconBell)
}
export { install as registerComponent }

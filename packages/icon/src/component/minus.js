import MtIconElement from './icon'

class MtIconMinus extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"/>
      </svg>
    `)
  }
}
export default MtIconMinus
function install() {
  if (window.customElements.get('mt-icon-minus')) return
  window.customElements.define('mt-icon-minus', MtIconMinus)
}
export { install as registerComponent }

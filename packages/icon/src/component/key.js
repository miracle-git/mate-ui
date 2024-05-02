import MtIconElement from './icon'

class MtIconKey extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M448 456.064V96a32 32 0 0 1 32-32.064L672 64a32 32 0 0 1 0 64H512v128h160a32 32 0 0 1 0 64H512v128a256 256 0 1 1-64 8.064zM512 896a192 192 0 1 0 0-384 192 192 0 0 0 0 384z"/>
      </svg>
    `)
  }
}
export default MtIconKey
function install() {
  if (window.customElements.get('mt-icon-key')) return
  window.customElements.define('mt-icon-key', MtIconKey)
}
export { install as registerComponent }

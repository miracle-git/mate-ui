import MtIconElement from './icon'

class MtIconRemove extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"/>
        <path fill="currentColor" d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"/>
      </svg>
    `)
  }
}
export default MtIconRemove
function install() {
  if (window.customElements.get('mt-icon-remove')) return
  window.customElements.define('mt-icon-remove', MtIconRemove)
}
export { install as registerComponent }

import MtIconElement from './icon'

class MtIconComment extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zM128 128v640h192v160l224-160h352V128H128z"/>
      </svg>
    `)
  }
}
export default MtIconComment
function install() {
  if (window.customElements.get('mt-icon-comment')) return
  window.customElements.define('mt-icon-comment', MtIconComment)
}
export { install as registerComponent }

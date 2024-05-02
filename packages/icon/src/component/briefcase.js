import MtIconElement from './icon'

class MtIconBriefcase extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M320 320V128h384v192h192v192H128V320h192zM128 576h768v320H128V576zm256-256h256.064V192H384v128z"/>
      </svg>
    `)
  }
}
export default MtIconBriefcase
function install() {
  if (window.customElements.get('mt-icon-briefcase')) return
  window.customElements.define('mt-icon-briefcase', MtIconBriefcase)
}
export { install as registerComponent }

import MtIconElement from './icon'

class MtIconPosition extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="m249.6 417.088 319.744 43.072 39.168 310.272L845.12 178.88 249.6 417.088zm-129.024 47.168a32 32 0 0 1-7.68-61.44l777.792-311.04a32 32 0 0 1 41.6 41.6l-310.336 775.68a32 32 0 0 1-61.44-7.808L512 516.992l-391.424-52.736z"/>
      </svg>
    `)
  }
}
export default MtIconPosition
function install() {
  if (window.customElements.get('mt-icon-position')) return
  window.customElements.define('mt-icon-position', MtIconPosition)
}
export { install as registerComponent }

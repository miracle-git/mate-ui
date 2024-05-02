import MtIconElement from './icon'

class MtIconHomeFilled extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z"/>
      </svg>
    `)
  }
}
export default MtIconHomeFilled
function install() {
  if (window.customElements.get('mt-icon-home-filled')) return
  window.customElements.define('mt-icon-home-filled', MtIconHomeFilled)
}
export { install as registerComponent }

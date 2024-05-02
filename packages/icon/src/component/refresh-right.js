import MtIconElement from './icon'

class MtIconRefreshRight extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"/>
      </svg>
    `)
  }
}
export default MtIconRefreshRight
function install() {
  if (window.customElements.get('mt-icon-refresh-right')) return
  window.customElements.define('mt-icon-refresh-right', MtIconRefreshRight)
}
export { install as registerComponent }

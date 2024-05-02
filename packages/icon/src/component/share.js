import MtIconElement from './icon'

class MtIconShare extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"/>
      </svg>
    `)
  }
}
export default MtIconShare
function install() {
  if (window.customElements.get('mt-icon-share')) return
  window.customElements.define('mt-icon-share', MtIconShare)
}
export { install as registerComponent }

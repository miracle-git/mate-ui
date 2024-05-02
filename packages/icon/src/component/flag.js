import MtIconElement from './icon'

class MtIconFlag extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M288 128h608L736 384l160 256H288v320h-96V64h96v64z"/>
      </svg>
    `)
  }
}
export default MtIconFlag
function install() {
  if (window.customElements.get('mt-icon-flag')) return
  window.customElements.define('mt-icon-flag', MtIconFlag)
}
export { install as registerComponent }

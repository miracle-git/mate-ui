import MtIconElement from './icon'

class MtIconSortDown extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M576 96v709.568L333.312 562.816A32 32 0 1 0 288 608l297.408 297.344A32 32 0 0 0 640 882.688V96a32 32 0 0 0-64 0z"/>
      </svg>
    `)
  }
}
export default MtIconSortDown
function install() {
  if (window.customElements.get('mt-icon-sort-down')) return
  window.customElements.define('mt-icon-sort-down', MtIconSortDown)
}
export { install as registerComponent }

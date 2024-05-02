import MtIconElement from './icon'

class MtIconList extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M704 192h160v736H160V192h160v64h384v-64zM288 512h448v-64H288v64zm0 256h448v-64H288v64zm96-576V96h256v96H384z"/>
      </svg>
    `)
  }
}
export default MtIconList
function install() {
  if (window.customElements.get('mt-icon-list')) return
  window.customElements.define('mt-icon-list', MtIconList)
}
export { install as registerComponent }

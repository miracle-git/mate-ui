import MtIconElement from './icon'

class MtIconFiles extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M128 384v448h768V384H128zm-32-64h832a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32zm64-128h704v64H160zm96-128h512v64H256z"/>
      </svg>
    `)
  }
}
export default MtIconFiles
function install() {
  if (window.customElements.get('mt-icon-files')) return
  window.customElements.define('mt-icon-files', MtIconFiles)
}
export { install as registerComponent }

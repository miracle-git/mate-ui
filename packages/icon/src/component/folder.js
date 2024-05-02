import MtIconElement from './icon'

class MtIconFolder extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32z"/>
      </svg>
    `)
  }
}
export default MtIconFolder
function install() {
  if (window.customElements.get('mt-icon-folder')) return
  window.customElements.define('mt-icon-folder', MtIconFolder)
}
export { install as registerComponent }

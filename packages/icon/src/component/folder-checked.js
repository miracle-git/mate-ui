import MtIconElement from './icon'

class MtIconFolderChecked extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm414.08 502.144 180.992-180.992L736.32 494.4 510.08 720.64l-158.4-158.336 45.248-45.312L510.08 630.144z"/>
      </svg>
    `)
  }
}
export default MtIconFolderChecked
function install() {
  if (window.customElements.get('mt-icon-folder-checked')) return
  window.customElements.define('mt-icon-folder-checked', MtIconFolderChecked)
}
export { install as registerComponent }

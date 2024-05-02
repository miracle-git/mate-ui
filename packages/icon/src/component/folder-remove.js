import MtIconElement from './icon'

class MtIconFolderRemove extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm256 416h320v64H352v-64z"/>
      </svg>
    `)
  }
}
export default MtIconFolderRemove
function install() {
  if (window.customElements.get('mt-icon-folder-remove')) return
  window.customElements.define('mt-icon-folder-remove', MtIconFolderRemove)
}
export { install as registerComponent }

import MtIconElement from './icon'

class MtIconFolderAdd extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm384 416V416h64v128h128v64H544v128h-64V608H352v-64h128z"/>
      </svg>
    `)
  }
}
export default MtIconFolderAdd
function install() {
  if (window.customElements.get('mt-icon-folder-add')) return
  window.customElements.define('mt-icon-folder-add', MtIconFolderAdd)
}
export { install as registerComponent }

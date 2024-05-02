import MtIconElement from './icon'

class MtIconFilm extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"/>
        <path fill="currentColor" d="M320 288V128h64v352h256V128h64v160h160v64H704v128h160v64H704v128h160v64H704v160h-64V544H384v352h-64V736H128v-64h192V544H128v-64h192V352H128v-64h192z"/>
      </svg>
    `)
  }
}
export default MtIconFilm
function install() {
  if (window.customElements.get('mt-icon-film')) return
  window.customElements.define('mt-icon-film', MtIconFilm)
}
export { install as registerComponent }

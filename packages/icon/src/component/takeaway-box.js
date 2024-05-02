import MtIconElement from './icon'

class MtIconTakeawayBox extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M832 384H192v448h640V384zM96 320h832V128H96v192zm800 64v480a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V384H64a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h896a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32h-64zM416 512h192a32 32 0 0 1 0 64H416a32 32 0 0 1 0-64z"/>
      </svg>
    `)
  }
}
export default MtIconTakeawayBox
function install() {
  if (window.customElements.get('mt-icon-takeaway-box')) return
  window.customElements.define('mt-icon-takeaway-box', MtIconTakeawayBox)
}
export { install as registerComponent }

import MtIconElement from './icon'

class MtIconHouse extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M192 413.952V896h640V413.952L512 147.328 192 413.952zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576z"/>
      </svg>
    `)
  }
}
export default MtIconHouse
function install() {
  if (window.customElements.get('mt-icon-house')) return
  window.customElements.define('mt-icon-house', MtIconHouse)
}
export { install as registerComponent }

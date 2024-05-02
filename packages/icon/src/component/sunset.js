import MtIconElement from './icon'

class MtIconSunset extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M82.56 640a448 448 0 1 1 858.88 0h-67.2a384 384 0 1 0-724.288 0H82.56zM32 704h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm256 128h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"/>
      </svg>
    `)
  }
}
export default MtIconSunset
function install() {
  if (window.customElements.get('mt-icon-sunset')) return
  window.customElements.define('mt-icon-sunset', MtIconSunset)
}
export { install as registerComponent }

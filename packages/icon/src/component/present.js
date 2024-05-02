import MtIconElement from './icon'

class MtIconPresent extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M480 896V640H192v-64h288V320H192v576h288zm64 0h288V320H544v256h288v64H544v256zM128 256h768v672a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V256z"/>
        <path fill="currentColor" d="M96 256h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32z"/>
        <path fill="currentColor" d="M416 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"/>
        <path fill="currentColor" d="M608 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"/>
      </svg>
    `)
  }
}
export default MtIconPresent
function install() {
  if (window.customElements.get('mt-icon-present')) return
  window.customElements.define('mt-icon-present', MtIconPresent)
}
export { install as registerComponent }

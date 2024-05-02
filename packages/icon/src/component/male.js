import MtIconElement from './icon'

class MtIconMale extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M399.5 849.5a225 225 0 1 0 0-450 225 225 0 0 0 0 450zm0 56.25a281.25 281.25 0 1 1 0-562.5 281.25 281.25 0 0 1 0 562.5zm253.125-787.5h225q28.125 0 28.125 28.125T877.625 174.5h-225q-28.125 0-28.125-28.125t28.125-28.125z"/>
        <path fill="currentColor" d="M877.625 118.25q28.125 0 28.125 28.125v225q0 28.125-28.125 28.125T849.5 371.375v-225q0-28.125 28.125-28.125z"/>
        <path fill="currentColor" d="M604.813 458.9 565.1 419.131l292.613-292.668 39.825 39.824z"/>
      </svg>
    `)
  }
}
export default MtIconMale
function install() {
  if (window.customElements.get('mt-icon-male')) return
  window.customElements.define('mt-icon-male', MtIconMale)
}
export { install as registerComponent }

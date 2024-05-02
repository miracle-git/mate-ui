import MtIconElement from './icon'

class MtIconBicycle extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M256 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"/>
        <path fill="currentColor" d="M288 672h320q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"/>
        <path fill="currentColor" d="M768 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"/>
        <path fill="currentColor" d="M480 192a32 32 0 0 1 0-64h160a32 32 0 0 1 31.04 24.256l96 384a32 32 0 0 1-62.08 15.488L615.04 192H480zM96 384a32 32 0 0 1 0-64h128a32 32 0 0 1 30.336 21.888l64 192a32 32 0 1 1-60.672 20.224L200.96 384H96z"/>
        <path fill="currentColor" d="m373.376 599.808-42.752-47.616 320-288 42.752 47.616z"/>
      </svg>
    `)
  }
}
export default MtIconBicycle
function install() {
  if (window.customElements.get('mt-icon-bicycle')) return
  window.customElements.define('mt-icon-bicycle', MtIconBicycle)
}
export { install as registerComponent }

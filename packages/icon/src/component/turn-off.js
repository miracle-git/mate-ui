import MtIconElement from './icon'

class MtIconTurnOff extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"/>
        <path fill="currentColor" d="M329.956 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z"/>
      </svg>
    `)
  }
}
export default MtIconTurnOff
function install() {
  if (window.customElements.get('mt-icon-turn-off')) return
  window.customElements.define('mt-icon-turn-off', MtIconTurnOff)
}
export { install as registerComponent }

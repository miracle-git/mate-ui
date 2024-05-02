import MtIconElement from './icon'

class MtIconDataBoard extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M32 128h960v64H32z"/>
        <path fill="currentColor" d="M192 192v512h640V192H192zm-64-64h768v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V128z"/>
        <path fill="currentColor" d="M322.176 960H248.32l144.64-250.56 55.424 32L322.176 960zm453.888 0h-73.856L576 741.44l55.424-32L776.064 960z"/>
      </svg>
    `)
  }
}
export default MtIconDataBoard
function install() {
  if (window.customElements.get('mt-icon-data-board')) return
  window.customElements.define('mt-icon-data-board', MtIconDataBoard)
}
export { install as registerComponent }

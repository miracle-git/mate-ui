/* Automatically generated by @mate-ui 'script/transfer.mjs' */
import MtHtmlElement from './element'

class MtIconCoffeeCup extends MtHtmlElement {
  constructor() {
    super(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M768 192a192 192 0 1 1-8 383.808A256.128 256.128 0 0 1 512 768H320A256 256 0 0 1 64 512V160a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v32zm0 64v256a128 128 0 1 0 0-256zM96 832h640a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-640v320a192 192 0 0 0 192 192h192a192 192 0 0 0 192-192V192H128z"/></svg>`
    )
  }
}

export default MtIconCoffeeCup

function install() {
  if (window.customElements.get('mt-icon-coffee-cup')) return
  window.customElements.define('mt-icon-coffee-cup', MtIconCoffeeCup)
}

export { install as registerComponent }

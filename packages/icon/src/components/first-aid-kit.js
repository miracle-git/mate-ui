/* Automatically generated by @mate-ui 'script/transfer.mjs' */
import MtIconElement from './icon'

class MtIconFirstAidKit extends MtIconElement {
  constructor() {
    super(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M192 256a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H192zm0-64h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"/><path fill="currentColor" d="M544 512h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96zM352 128v64h320v-64H352zm-32-64h384a32 32 0 0 1 32 32v128a32 32 0 0 1-32 32H320a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"/></svg>`)
  }
}

export default MtIconFirstAidKit

function install() {
  if (window.customElements.get('mt-icon-first-aid-kit')) return
  window.customElements.define('mt-icon-first-aid-kit', MtIconFirstAidKit)
}

export { install as registerComponent }
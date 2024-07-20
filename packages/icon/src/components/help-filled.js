/* Automatically generated by @mate-ui 'script/transfer.mjs' */
import MtIconElement from './icon'

class MtIconHelpFilled extends MtIconElement {
  constructor() {
    super(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M926.784 480H701.312A192.512 192.512 0 0 0 544 322.688V97.216A416.064 416.064 0 0 1 926.784 480zm0 64A416.064 416.064 0 0 1 544 926.784V701.312A192.512 192.512 0 0 0 701.312 544h225.472zM97.28 544h225.472A192.512 192.512 0 0 0 480 701.312v225.472A416.064 416.064 0 0 1 97.216 544zm0-64A416.064 416.064 0 0 1 480 97.216v225.472A192.512 192.512 0 0 0 322.688 480H97.216z"/></svg>`)
  }
}

export default MtIconHelpFilled

function install() {
  if (window.customElements.get('mt-icon-help-filled')) return
  window.customElements.define('mt-icon-help-filled', MtIconHelpFilled)
}

export { install as registerComponent }
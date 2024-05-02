import MtIconElement from './icon'

class MtIconSmoking extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M256 576v128h640V576H256zm-32-64h704a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32z"/>
        <path fill="currentColor" d="M704 576h64v128h-64zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"/>
      </svg>
    `)
  }
}
export default MtIconSmoking
function install() {
  if (window.customElements.get('mt-icon-smoking')) return
  window.customElements.define('mt-icon-smoking', MtIconSmoking)
}
export { install as registerComponent }

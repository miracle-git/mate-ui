import MtIconElement from './icon'

class MtIconShop extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M704 704h64v192H256V704h64v64h384v-64zm188.544-152.192C894.528 559.616 896 567.616 896 576a96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0c0-8.384 1.408-16.384 3.392-24.192L192 128h640l60.544 423.808z"/>
      </svg>
    `)
  }
}
export default MtIconShop
function install() {
  if (window.customElements.get('mt-icon-shop')) return
  window.customElements.define('mt-icon-shop', MtIconShop)
}
export { install as registerComponent }

import MtIconElement from './icon'

class MtIconPrinter extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M256 768H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 746.432 64 741.248 64 727.04V379.072c0-42.816 4.48-58.304 12.8-73.984 8.384-15.616 20.672-27.904 36.288-36.288 15.68-8.32 31.168-12.8 73.984-12.8H256V64h512v192h68.928c42.816 0 58.304 4.48 73.984 12.8 15.616 8.384 27.904 20.672 36.288 36.288 8.32 15.68 12.8 31.168 12.8 73.984v347.904c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H768v192H256V768zm64-192v320h384V576H320zm-64 128V512h512v192h128V379.072c0-29.376-1.408-36.48-5.248-43.776a23.296 23.296 0 0 0-10.048-10.048c-7.232-3.84-14.4-5.248-43.776-5.248H187.072c-29.376 0-36.48 1.408-43.776 5.248a23.296 23.296 0 0 0-10.048 10.048c-3.84 7.232-5.248 14.4-5.248 43.776V704h128zm64-448h384V128H320v128zm-64 128h64v64h-64v-64zm128 0h64v64h-64v-64z"/>
      </svg>
    `)
  }
}
export default MtIconPrinter
function install() {
  if (window.customElements.get('mt-icon-printer')) return
  window.customElements.define('mt-icon-printer', MtIconPrinter)
}
export { install as registerComponent }

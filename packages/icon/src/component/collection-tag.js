import MtIconElement from './icon'

class MtIconCollectionTag extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128H256zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32z"/>
      </svg>
    `)
  }
}
export default MtIconCollectionTag
function install() {
  if (window.customElements.get('mt-icon-collection-tag')) return
  window.customElements.define('mt-icon-collection-tag', MtIconCollectionTag)
}
export { install as registerComponent }

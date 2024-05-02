import MtIconElement from './icon'

class MtIconTrendCharts extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M128 896V128h768v768H128zm291.712-327.296 128 102.4 180.16-201.792-47.744-42.624-139.84 156.608-128-102.4-180.16 201.792 47.744 42.624 139.84-156.608zM816 352a48 48 0 1 0-96 0 48 48 0 0 0 96 0z"/>
      </svg>
    `)
  }
}
export default MtIconTrendCharts
function install() {
  if (window.customElements.get('mt-icon-trend-charts')) return
  window.customElements.define('mt-icon-trend-charts', MtIconTrendCharts)
}
export { install as registerComponent }

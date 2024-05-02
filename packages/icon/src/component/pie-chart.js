import MtIconElement from './icon'

class MtIconPieChart extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M448 68.48v64.832A384.128 384.128 0 0 0 512 896a384.128 384.128 0 0 0 378.688-320h64.768A448.128 448.128 0 0 1 64 512 448.128 448.128 0 0 1 448 68.48z"/>
        <path fill="currentColor" d="M576 97.28V448h350.72A384.064 384.064 0 0 0 576 97.28zM512 64V33.152A448 448 0 0 1 990.848 512H512V64z"/>
      </svg>
    `)
  }
}
export default MtIconPieChart
function install() {
  if (window.customElements.get('mt-icon-pie-chart')) return
  window.customElements.define('mt-icon-pie-chart', MtIconPieChart)
}
export { install as registerComponent }

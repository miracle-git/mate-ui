import MtIconElement from './icon'

class MtIconStopwatch extends MtIconElement {
  constructor() {
    super(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path fill="currentColor" d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"/>
        <path fill="currentColor" d="M672 234.88c-39.168 174.464-80 298.624-122.688 372.48-64 110.848-202.624 30.848-138.624-80C453.376 453.44 540.48 355.968 672 234.816z"/>
      </svg>
    `)
  }
}
export default MtIconStopwatch
function install() {
  if (window.customElements.get('mt-icon-stopwatch')) return
  window.customElements.define('mt-icon-stopwatch', MtIconStopwatch)
}
export { install as registerComponent }

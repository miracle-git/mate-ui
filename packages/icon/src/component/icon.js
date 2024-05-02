import MtHtmlElement from './element'

class MtIcon extends MtHtmlElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const name = this.getAttribute('name')
    if (name) {
      fetch(`../../svg/${name}.svg`)
        .then(res => res.text())
        .then(html => {
          this._elementTemplate.innerHTML = `<style>${this._elementStyle}</style> ${html}`
          this.shadowRoot.appendChild(this._elementTemplate.content.cloneNode(true))
        })
        .catch(err => {
          console.error('error fetch svg: ', err)
        })
    }
  }
}

export default MtIcon

function install() {
  if (window.customElements.get('mt-icon')) return
  window.customElements.define('mt-icon', MtIcon)
}

export { install as registerComponent }

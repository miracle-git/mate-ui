class MtHtmlElement extends HTMLElement {
  constructor(html = '') {
    super()
    this.attachShadow({ mode: 'open' })
    this._elementTemplate = document.createElement('template')
    this._elementStyle = `:host {
      display: inline-block;
      font-size: inherit;
      width: 1em;
      height: 1em;
      line-height: 1em;
      transform: rotateZ(0);
    }
    :host([spin]) {
      animation-name: spin;
      animation-duration: 1.3s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
    @keyframes spin {
      from {
        transform: rotateZ(0);
      }
      to {
        transform: rotateZ(360deg);
      }
    }`
    if (html) {
      this._elementTemplate.innerHTML = `<style>${this._elementStyle}</style> ${html}`
      this.shadowRoot.appendChild(this._elementTemplate.content.cloneNode(true))
    }
  }

  static get observedAttributes() {
    return ['name', 'size', 'color']
  }

  get name() {
    return this.getAttribute('name')
  }

  set name(val) {
    this.setAttribute('name', val)
  }

  get size() {
    return this.getAttribute('size')
  }

  set size(val) {
    this.setAttribute('size', val)
  }

  get color() {
    return this.getAttribute('color')
  }

  set color(val) {
    this.setAttribute('color', val)
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (oldVal === newVal) return

    switch (attr) {
    case 'name':
      this.name = newVal
      break
    case 'size':
      this.size = newVal
      this.style.fontSize = newVal
      break
    case 'color':
      this.color = newVal
      this.style.color = newVal
      break
    }
  }
}

export default MtHtmlElement

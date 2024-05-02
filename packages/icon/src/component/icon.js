class MtIconElement extends HTMLElement {
  constructor(html) {
    super()
    const host = this.attachShadow({ mode: 'open' })
    const style = `<style>:host{ display: inline-block; width: 1em;height: 1em;color: currentColor;font-size: inherit; }</style>`
    const template = document.createElement('template')
    template.innerHTML = style + html
    host.appendChild(template.content.cloneNode(true))
  }

  static get observedAttributes() {
    return ['size', 'color']
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
export default MtIconElement

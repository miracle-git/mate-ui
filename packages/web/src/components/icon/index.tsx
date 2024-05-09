import { Component, Host, h, getAssetPath, Prop } from '@stencil/core'

@Component({
  tag: 'mt-icon',
  styleUrl: 'index.less',
  shadow: true
})
export class MtIcon {
  @Prop() name: string
  render() {
    const path = getAssetPath('./icon.svg')
    return (
      <Host>
        <svg class="mt-icon">
          <use xlinkHref={`${path}#icon-${this.name}`} />
        </svg>
      </Host>
    )
  }
}

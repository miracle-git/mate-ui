import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'mt-color-picker',
  styleUrl: './index.less',
  shadow: true
})
export default class Avatar {
  @Prop() size: String
  render() {
    // return (
    //   <div class="mt-color-picker">
    //     <slot/>
    //   </div>
    // )
  }
}

import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'mt-svg-icon',
  styleUrl: './index.less',
  shadow: true
})
export default class Avatar {
  @Prop() size: String
  render() {
    // return (
    //   <div class="mt-svg-icon">
    //     <slot/>
    //   </div>
    // )
  }
}

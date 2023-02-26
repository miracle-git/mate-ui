import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'mt-icon',
  styleUrl: './index.less',
  shadow: true
})
export default class Avatar {
  @Prop() size: String
  render() {
    // return (
    //   <div class="mt-icon">
    //     <slot/>
    //   </div>
    // )
  }
}

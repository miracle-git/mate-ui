import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'mt-avatar',
  styleUrl: './index.less',
  shadow: true
})
export default class Avatar {
  @Prop() size: String
  render() {
    // return (
    //   <div class="mt-avatar">
    //     <slot/>
    //   </div>
    // )
  }
}

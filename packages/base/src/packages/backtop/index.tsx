import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'mt-backtop',
  styleUrl: './index.less',
  shadow: true
})
export default class Avatar {
  @Prop() size: String
  render() {
    // return (
    //   <div class="mt-backtop">
    //     <slot/>
    //   </div>
    // )
  }
}

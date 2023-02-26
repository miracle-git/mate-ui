import { $s } from '@mate-ui/util'

export default {
  mounted() {
    // @ts-ignore
    if (process.env.NODE_ENV === 'production' || !this.vnode) return
    // @ts-ignore
    const { data, componentOptions } = this.$vode
    const definedProps = data.attrs || {}
    const definedEvents = componentOptions.listeners || {}
    for (let prop in definedProps) {
      if (prop) {
        prop = $s.kebab(prop)
      }
    }
    for (let event in definedEvents) {
      if (event) {
        event = $s.kebab(event)
      }
    }
  }
}

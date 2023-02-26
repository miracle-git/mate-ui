import { broadcast } from '../.internal/vue'

export default {
  methods: {
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params)
    },
    dispatch(componentName, eventName, params) {
      // @ts-ignore
      let parent = this.$parent || this.$root
      let current = parent.$options.componentName
      while (parent && (!current || current !== componentName)) {
        parent = parent.$parent
        if (parent) {
          current = parent.$options.componentName
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat([params]))
      }
    }
  }
}

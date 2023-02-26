import { isFunction } from '@mate-ui/type'

export default {
  methods: {
    delay(func, timeout = 0) {
      // @ts-ignore
      isFunction(func) && setTimeout(() => this.$nextTick(func), timeout)
    }
  }
}

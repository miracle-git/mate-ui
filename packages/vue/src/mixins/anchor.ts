export default {
  // @ts-ignore
  beforeRouteLeave(to, from, next) {
    // @ts-ignore
    if (from.meta.keepAlive && this.container) {
      // @ts-ignore
      const $content = document.querySelector(this.container)
      const scrollTop = $content ? $content.scrollTop : 0
      from.meta.scrollTop = scrollTop
    }
    next()
  },
  methods: {
    scrollToAnchor() {
      // @ts-ignore
      const { scrollTop } = this.$route.meta
      // @ts-ignore
      const $content = document.querySelector(this.container)
      if (scrollTop && $content) {
        $content.scrollTop = scrollTop
      }
    }
  }
}

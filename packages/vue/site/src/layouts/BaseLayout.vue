<template>
  <div>
    <HeaderCom />
    <div style="padding: 20px; margin: 0 auto; width: 960px">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Header from './header/index.vue'
import NProgress from 'nprogress'

export default {
  components: {
    HeaderCom: Header
  },
  props: ['name'],
  methods: {
    mountedCallback() {
      NProgress.done()
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

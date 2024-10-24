<template>
  <mt-demo-header/>
  <mt-demo-footer/>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Header from './header/index.vue'
  import Footer from './footer/index.vue'

  export default defineComponent({
    name: 'mt-demo-layout',
    components: {
      MtDemoHeader: Header,
      MtDemoFooter: Footer
    },
  })
</script>

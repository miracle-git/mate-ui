<template>
  <mt-demo-header/>
  <mt-demo-footer/>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Header from './header'
  import Footer from './footer'

  export default defineComponent({
    name: 'mt-demo-layout',
    components: {
      MtDemoHeader: Header,
      MtDemoFooter: Footer
    },
  })
</script>

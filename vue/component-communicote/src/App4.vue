<template>
  <div>
    <Head @add="handle"/>
    <List :msg="msg"/>
  </div>
</template>

<script>
  import Head from '@/components/body4/Head.vue'
  import List from '@/components/body4/List.vue'
  export default {
    components: {
      Head,
      List
    },
  }
</script>

<style lang="scss" scoped>

</style>
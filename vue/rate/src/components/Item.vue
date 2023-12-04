<template>
  <div>
      首页最帅: {{ name }}
  </div>
</template>

<script setup>
  const props = defineProps({
    name:String
  })
</script>

<style  scoped>

</style>
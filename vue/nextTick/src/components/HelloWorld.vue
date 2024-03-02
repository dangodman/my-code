<template>
  <div>
    <p ref="refP">消息:{{ message }}</p>
  </div>
</template>

<script setup>
import {nextTick, ref} from 'vue'
const message = ref('初始消息')
const refP = ref(null)

// setTimeout(() => {
//   console.log(refP.value);
// },1000)
nextTick(() => {
  console.log(refP.value);
})
</script>

<style scoped>

</style>
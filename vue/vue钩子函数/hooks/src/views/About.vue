<template>
  <div>
    About Page
    <Hello />
  </div>
</template>

<script setup>
// import {onBeforeRouteUpdate,onBeforeRouteLeave} from 'vue-router'

// onBeforeRouteLeave((to,from,next) => {
//   console.log(to,from);
//   const flag = window.confirm('你确定要离开这个页面吗?')
//   if(flag) {
//     next()
//   }
// })
import Hello from "../components/Hello.vue";
import { onMounted } from "vue";
onMounted(() => {
  console.log("about mounted");
});
</script>

<style lang="css" scoped></style>

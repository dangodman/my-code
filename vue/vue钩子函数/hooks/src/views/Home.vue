<template>
  <div>
    Home Page
    <Hello />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Hello from "../components/Hello.vue";

onMounted(() => {
  console.log("首页的onMounted");
});


onActivated(() => {  // 当被缓存的组件再次生效时触发
  console.log("首页的onActivated");  
})
onDeactivated(() => {  // 当组件被缓存起来时触发
  console.log("首页的onDeactivated");  
})
</script>

<style lang="css" scoped></style>

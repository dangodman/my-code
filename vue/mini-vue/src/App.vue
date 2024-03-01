<template>
  <div>
    <!-- <p>{{ state.count }}</p> -->
    <!-- <button @click="state.count++">add</button> -->

    <p>{{ age.num }}</p>
    <button @click="age.num++">add</button>
  </div>
</template>

<script setup>
import { reactive,ref, computed, watch, watchEffect, effect } from "vue";
// import { reactive } from "../reactivity/reactive.js";

const state = reactive({
  count: 1,
  msg: 2,
});

// const num = computed(() => {
//   return state.count * 10;
// });
// watch(
//   () => state.count,
//   (newval, oldval) => {
//     console.log(newval, oldval);
//   },
//   {immediate: true}
// );

// effect(
//   () => {
//     console.log("hello world",state.count);
//   },
//   { lazy: false,
//     scheduler:() => {  // 当调度函数生效的时候，副作用函数就不再触发
//       console.log("调度器中的任务执行了");
//     }
//   }
// );

// watchEffect(() => {
//   console.log("watchEffect",state.count);
// },
// {
//   flush:'post',
//   onTrack() {  // 调度函数
//     console.log("onTrack,会在count收集依赖的环节被调用");
//   },
//   onTrigger() { // 调度函数
//     console.log("onTrigger,会在依赖触发的额环节被调用");
//   },
// });





const age = ref({num:18})
console.log(age.value.num);
</script>

<style scoped></style>

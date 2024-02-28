<template>
  <div>
    <p>{{ state.count }}</p>
    <p>{{ num }}</p>
    <button @click="state.msg++">add</button>
  </div>
</template>

<script setup>
import { reactive, computed, watch } from "vue";
// import { reactive } from "../reactivity/reactive.js";

const state = reactive({
  count: 1,
  msg: 2,
});

const num = computed(() => {
  return state.count * 10;
});
watch(
  () => state.count,
  (newval, oldval) => {
    console.log(newval, oldval);
  }
);
</script>

<style scoped></style>

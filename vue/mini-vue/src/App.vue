<template>
  <div>
    <p>{{ state.count }}</p>
    <button @click="state.count++">add</button>
  </div>
</template>

<script setup>
import { reactive } from "vue";
// import { reactive } from "../reactivity/reactive.js";

const state = reactive({
  count: 1,
});
</script>

<style scoped></style>

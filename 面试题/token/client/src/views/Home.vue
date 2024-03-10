<template>
  <div>Home Page</div>
</template>

<script setup>
import { onMounted } from "vue";
import { home } from "../api/user.js";
onMounted(() => {
  home()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<style lang="css" scoped></style>

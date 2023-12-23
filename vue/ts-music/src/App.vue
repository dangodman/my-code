<template>
  <Banner />
  <ul>
    <li v-for="mv in personalizedMv" :key="mv.id">
      <img :src="mv.picUrl" alt="">
      <p>{{ mv.name }}</p>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted, toRefs } from 'vue'
import { usePersonalizedStore } from './store/personalized';
import Banner from './components/Banner.vue'
const { personalizedMv } = toRefs(usePersonalizedStore())
const { getPersonalized } = usePersonalizedStore()
onMounted(async () => {
  await getPersonalized()
})
</script>

<style scoped></style>
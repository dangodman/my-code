<template>
  <div>
    JMain
    <div v-for="user in users" >
      <Item  :name="user"  :key="user" />
    </div>
  
  </div>
</template>

<script setup>
  import Item from './Item.vue'
  import {ref} from 'vue'
  const users = ref(['路修远','沸羊羊'])
  setTimeout(() => {
    users.value = [...users.value,'Yiko']   
  }, 2000)
  
fetch('https://k9gtiz.laf.run/get-list')
    .then(res => res.json())
   .then(data => {
      users.value = data.data.map((item)=>item.txt)
    })
</script>

<style  scoped>

</style>
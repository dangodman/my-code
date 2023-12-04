<script setup>
// import Rate from './components/Rate.vue'
import JHead from './components/jHead.vue'
import JMain from './components/JMain.vue'
import JSide from './components/JSide.vue'
import JAdver from './components/JAdver.vue'
</script>

<template>
  <div class="header">
    <JHead />
  </div>
  <div class="body">
    <div class="aside">
      <JSide />
    </div>
    <div class="main">
      <JMain />
    </div>
    <div class="right">
      <JAdver />
    </div>
  </div>
</template>

<style scoped>
.body{
  display: flex;
}
.aside{
  width: 200px;
  background-color: #f5f5f5;
}
.main{
  flex: 1;
  background-color: #ececec;
}
.right{
  width: 200px;
  background-color: #f5f5f5;
}
</style>

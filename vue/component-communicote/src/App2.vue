<template>
  <div>
    <Head @add="(message) =>{lists.push(message)}"/>
    <div class="body">
      <ul>
        <li v-for="(item,index) in lists" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Head from '@/components/body2/Head.vue'
  export default {
    components:{
      Head
    },
    data(){
      return {
        lists:['html', 'css'],
        message:''
      }
    },
      
  }
</script>

<style lang="scss" scoped>

</style>
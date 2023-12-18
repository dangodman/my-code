<template>
  <div>
    <Head @add="handle"/>
    <List :msg="msg"/>
  </div>
</template>

<script>
  import Head from '@/components/body3/Head.vue'
  import List from '@/components/body3/List.vue'
  export default {
    components: {
      Head,
      List
    },
    data(){
      return {
        msg:''
      }
    },
    methods:{
      handle(message){
        this.msg = message
        console.log(message)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
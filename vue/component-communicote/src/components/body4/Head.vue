<template>
  <div class="head">
    <input type="text" v-model="message">
    <button @click="submit">确定</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      message: ''
    }
  },
  methods: {
    submit() {
      // 把数据放进store
      if(!this.message) return 
      this.listAdd(this.message)
      this.message = ''
    },
    ...mapMutations(['listAdd'])
  }
}
</script>

<style scoped></style>
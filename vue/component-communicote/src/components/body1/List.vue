<template>
  <div class="body">
    <ul>
      <li v-for="(item, index) in lists" :key="index">{{ item }}</li>
    </ul>
    <button @click="changeProps">修改</button>
  </div>
</template>

<script>
export default {
  props: {
    lists: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
     
    }
  },
  methods: {
    changeProps() {
      this.lists[0] = 'HTML'
    }
  }
}
</script>

<style lang="scss" scoped></style>
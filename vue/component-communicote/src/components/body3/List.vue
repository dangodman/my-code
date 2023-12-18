<template>
  <div class="body">
    <ul>
      <li v-for="(item, index) in lists" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: ['html', 'css'],
    }
  },
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  watch: {
    msg(newVal) {
      this.lists.push(newVal)
    }
  }
}
</script>

<style lang="scss" scoped></style>
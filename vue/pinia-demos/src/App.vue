<template>
  <div>
    <TodoList :todos="todos" :addTodo="addTodo" />  
    <Item />
    <Bang :title="作者榜" :items="authors" />
  </div>
</template>

<script setup>
// 以组件为开发单元
import TodoList from './components/TodoList.vue'
// const todos = ref([
//   { text: "haha" }
// ])
// todos 来到 vuex mapState  pinia
import { useTodoStore } from './store/todo.js'
const { todos, addTodo } = useTodoStore()
// console.log(todoStore.todos[0]) 
</script>

<style scoped></style>
<template>
  <div class="note-list">
    <ul v-if="list.data.length">
      <li v-for="item in list.data" @click="goNoteDetail(item.id)">
        <div class="img">
          <img :src="item.head_img" alt="" />
        </div>
        <p class="time">{{ item.c_time }}</p>
        <p class="title">{{ item.title }}</p>
      </li>
    </ul>
    <p class="empty" v-else>当前分类下还没有文章哦</p>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "../api";
const router = useRouter(); // 路由实例
const route = useRoute(); // 当前路由详情
const list = reactive({
  data: [],
});
onMounted(async () => {
  // 页面加载完毕中发请求拿到当前分类的数据
  const { data } = await axios.post("/findNoteListByType", {
    note_type: route.query.title,
  });
  console.log(data);
  list.data = data;
});
const goNoteDetail = (id) => {
  router.push({ path: "/noteDetail", query: { id } });
};
</script>

<style lang="less" scoped>
.note-list {
  width: 100%;
  padding: 1rem 0.667rem 0;
  box-sizing: border-box;
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 50px;
    li {
      img {
        width: 100%;
        height: 4rem;
        border-radius: 0.27rem;
      }
      .time {
        font-size: 0.37rem;
        color: rgba(16, 16, 16, 1);
        margin: 10px 0 5px 0;
      }
      .title {
        width: 4rem;
        font-size: 0.37rem;
        color: rgba(16, 16, 16, 1);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>

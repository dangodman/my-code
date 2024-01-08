<template>
  <div class="note-list">
    <ul>
      <li>
        <div class="img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM2pG4vPcektrcdvV-bDDNxvLXmhxKWhjxbKQWP8fQ82mBFZFGbZtS0ZfdfA&s"
            alt=""
          />
        </div>
        <p class="time">2023/05/20</p>
        <p class="title">今天去吃了猪脚饭了吃饭了吃猪脚了</p>
      </li>
      <li>
        <div class="img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM2pG4vPcektrcdvV-bDDNxvLXmhxKWhjxbKQWP8fQ82mBFZFGbZtS0ZfdfA&s"
            alt=""
          />
        </div>
        <p class="time">2023/05/20</p>
        <p class="title">今天去吃了猪脚饭</p>
      </li>
      <li>
        <div class="img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM2pG4vPcektrcdvV-bDDNxvLXmhxKWhjxbKQWP8fQ82mBFZFGbZtS0ZfdfA&s"
            alt=""
          />
        </div>
        <p class="time">2023/05/20</p>
        <p class="title">今天去吃了猪脚饭</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
onMounted(() => {
  // 页面加载完毕中发请求拿到当前分类的数据
});
</script>

<style lang="less" scoped>
.note-list {
  width: 100%;
  padding: 1rem 0.667rem 0;
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 30px;
    li {
      img {
        width: 100%;
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

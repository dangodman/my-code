<template>
  <Header :seller="sellerData" />
  <div class="tab">
    <div class="tab-wrapper">
      <router-link to="/goods">商品</router-link>
    </div>
    <div class="tab-wrapper">
      <router-link to="/comment">评论</router-link>
    </div>
    <div class="tab-wrapper">
      <router-link to="/seller">商家</router-link>
    </div>
  </div>
  <router-view />
</template>

<script>
import Header from '@/components/header/Header.vue'
import { getSeller } from '@/api'
export default {
  components: {
    Header
  },
  data() {
    return {
      sellerData: {}
    }
  },
  created() {
    getSeller().then(res => {
      console.log(res)
      this.sellerData = res
    })
  }
}
</script>
<style lang="less">
@import '@/common/style/variable.less';

.tab {
  display: flex;
  height: 36px;

  &-wrapper {
    flex: 1;
    text-align: center;
    line-height: 36px;

    a {
      text-decoration: none;
      color: @color-font;
      display: inline-block;
      width: 100%;
      height: 100%;

      &.router-link-active {
        color: @color-red;
        border-bottom: 2px solid @color-red;
      }
    }
  }
}</style>

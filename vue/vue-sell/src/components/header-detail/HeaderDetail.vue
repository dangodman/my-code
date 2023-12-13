<template>
  <div>
    <transition name="fade">
      <div class="header-detail">
        <div class="detail-wrapper">
          <div class="detail-main">
            <h1 class="name">{{ detailData.name }}</h1>
            <div class="star">
              <span class="star-item " :class="startList[0]"></span>
              <span class="star-item " :class="startList[1]"></span>
              <span class="star-item " :class="startList[2]"></span>
              <span class="star-item " :class="startList[3]"></span>
              <span class="star-item " :class="startList[4]"></span>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul class="supports" v-for="item in detailData.supports">
              <li class="support-item">
                <SupportIcon :size="1" :type="item.type" />
                <span class="text">{{ item.description }}</span>
              </li>

            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              <p class="content">{{ detailData.bulletin }}</p>
            </div>
          </div>
        </div>
        <div class="detail-close" @click.stop="hideDetail">X</div>
      </div>
    </transition>
  </div>
</template>

<script>
import SupportIcon from '@/components/support-icon/SupportIcon.vue'
export default {
  components: {
    SupportIcon
  },
  data() {
    return {
     
    }
  },
  props: {
    detailData: {
      type: Object,
      default: () => { }
    }
  },
  methods: {
    hideDetail() { //子父组件通讯
      this.$emit('hide', false) // 创建一个hide事件
    },
  },
  computed: {
    startList() {
      let score = Math.round(this.detailData.score)
      let list = new Array(5).fill('off');
      for (let i = 0; i < score; i++) {
        list[i] = 'on';
      }
      return list;
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/common/style/variable.less';

.header-detail {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: @color-background-s;
  color: @color-white;
  backdrop-filter: blur(10px); // 底层虚化
  z-index:999;

  &.fade-enter-from,
  &.fade-leave-to {
    opacity: 0;
    background: @color-background;
  }

  &.fade-enter-active,
  &.fade-leave-active {
    transition: all 0.5s ease;
  }

  .detail-wrapper {
    margin-top: 64px;
    padding-bottom: 64px;

    .name {
      font-size: @fontsize-large;
      text-align: center;
      font-weight: bold;
    }

    .star {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 18px;
      padding: 2px 0;

      .star-item {
        width: 20px;
        height: 20px;
        background-size: 20px 20px;
        margin-right: 22px;

        &.on {
          background-image: url('@/assets/images/star-on.png');
        }

        &.off {
          background-image: url('@/assets/images/star-off.png');
        }
      }
    }

    .title {
      display: flex;
      margin: 28px auto 24px;
      width: 80%;

      .line {
        border-bottom: 1px solid hsla(0, 0%, 100%, .2);
        flex: 1;
        position: relative;
        top: -6px;
      }

      .text {
        font-size: @fontsize-medium;
        font-weight: 700;
        padding: 0 12px;
      }
    }

    .supports {
      margin: 0 auto;
      width: 80%;

      .support-item {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        padding: 0 12px;

        .text {
          margin-left: 4px;
          font-size: @fontsize-small;
          line-height: 16px;
        }
      }
    }

    .bulletin {
      margin: 0 auto;
      width: 80%;

      .content {
        font-size: @fontsize-small;
        line-height: 24px;
        padding: 0 12px;
      }
    }
  }

  .detail-close {
    width: 30px;
    height: 30px;
    position: fixed;
    bottom: 30px;
    left: 50%;
    margin-left: -15px;
    text-align: center;
    line-height: 30px;
  }
}</style>
<template>
  <div class="goods">
    <div class="goods-content">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li class="menu-item" :class="{ 'current': currentIndex === index }" v-for="(item, index) in goods" :key="index"
            @click="selectMenu(index)">
            <span class="text">
              <SupportIcon v-if="item.type != -1" :size="3" :type="item.type" />
              {{ item.name }}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <!-- 一个菜系 -->
          <li class="food-list" v-for="(item, index) in goods" :key="index" ref="foodList">
            <h1 class="title">{{ item.name }}</h1>
            <!-- 一道道菜 -->
            <ul>
              <li class="food-item" v-for="(food, idx) in item.foods" :key="idx">
                <div class="pic">
                  <img :src="food.image" alt="">
                </div>
                <div class="content">
                  <h2 class="name">{{ food.name }}</h2>
                  <p class="desc">{{ food.description }}</p>
                  <div class="extra">
                    <span class="count">月售{{ food.sellCount }}份</span>
                    <span>好评率{{ food.rating }}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{ food.price }}</span>
                    <span class="old" v-if="food.oldPrice">￥{{ food.oldPrice }}</span>
                  </div>
                  <!-- 加号 -->
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="car-wrapper">购物车</div>
  </div>
</template>

<script>
import { getGoods } from '@/api'
import SupportIcon from '@/components/support-icon/SupportIcon.vue'
import BScroll from '@better-scroll/core'
export default {
  components: {
    SupportIcon
  },
  data() {
    return {
      goods: [],
      // currentIndex: 0,
      foodsScroll: {}, // 被BScroll修饰后的容器
      scrolly: 0,
      foodList: [], // 所有的菜系dom
      listHeight: [] // 所有菜系dom 的高度
    }
  },
  created() {
    // 获取商品数据
    getGoods().then((res) => {
      console.log(res)
      this.goods = res

      this.$nextTick(() => { // $nextTick回调会在页面加载完毕之后才执行
        this.betterScroll()
        this._calculateHeight()
      })
    })
  },
  methods: {
    betterScroll() {
      // 获取到menu的dom结构
      new BScroll(this.$refs.menuWrapper, {
        click: true
      }),
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
          click: true,
          scrollY: true,
          probeType: 3
        })
      this.foodList = this.$refs.foodList
      // 给右侧容器监听上了滚动事件
      this.foodsScroll.on('scroll', pos => {
        this.scrolly = Math.round(Math.abs(pos.y))

      })
    },
    selectMenu(index) {
      this.currentIndex = index
      this.foodsScroll.scrollToElement(this.$refs.foodList[index], 300)
    },
    _calculateHeight() {
      let height = 0
      this.listHeight.push(0)
      this.foodList.forEach(li => {
        height += li.clientHeight
        this.listHeight.push(height)
      })
      console.log(this.listHeight);
    }
  },
  computed: {
    currentIndex() {
      // 随着右侧的滚动this.scrolly 返回不同的下标
      for (let i = 0; i < this.listHeight.length; i++) {
        const h1 = this.listHeight[i]
        const h2 = this.listHeight[i + 1]
        if (!h2 || (this.scrolly >= h1 && this.scrolly < h2)) {
          return i
        }
      }
      return 0 
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/common/style/variable.less';

.goods {
  position: absolute;
  width: 100%;
  bottom: 46px;
  top: 177px;
  overflow: hidden;

  &-content {
    display: flex;
    width: 100%;
    height: 100%;

    .menu-wrapper {
      flex: 0 0 80px;
      background: @color-background-ssss;

      .menu-item {
        padding: 0 10px;
        font-size: @fontsize-small;
        height: 54px;
        display: flex;
        justify-content: center;
        align-items: center;

        &.current {
          background: #fff;
          font-weight: 700;
        }
      }
    }

    .foods-wrapper {
      flex: 1;

      .title {
        height: 26px;
        line-height: 26px;
        font-size: @fontsize-small;
        color: rgb(147, 153, 159);
        background: @color-background-ssss;
        padding-left: 14px;
        border-left: 2px solid #d9dde1;
      }

      .food-item {
        display: flex;
        padding: 18px;

        .pic {
          flex: 0 0 57px;
          margin-right: 10px;

          img {
            width: 100%;
          }
        }

        .content {
          flex: 1;

          .name {
            font-size: @fontsize-medium;
            color: rgb(7, 17, 27);
            margin: 2px 0 8px 0;
          }

          .desc,
          .extra {
            font-size: @fontsize-small-s;
            color: rgb(147, 153, 159);
            margin-bottom: 8px;
            line-height: 10px;

            .count {
              margin-right: 12px;
            }
          }

          .price {
            font-weight: 700;
            line-height: 10px;

            .now {
              font-size: @fontsize-medium;
              color: @color-red;
              margin-right: 8px;
            }

            .old {
              font-size: @fontsize-small-s;
              color: rgb(147, 153, 159);
              text-decoration: line-through;
            }
          }
        }
      }
    }
  }



  .car-wrapper {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 48px;
    background: #aaa;
  }
}
</style>
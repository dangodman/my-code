<template>
  <span class="support-icon" :class="iconClass"></span>
</template>

<script>
export default {
  // 接收父组件传过来的值
  props: {
    size: {
      type: Number,
      default: 1
    },
    type: {
      type: Number,
      default: 0
    }
  },
  computed:{ // 计算属性中的函数名直接当成数据源使用
    iconClass(){
      const classMap = ['decrease','discount','special','invoice','guarantee']
      return `icon-${this.size} ${classMap[this.type]}`
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/common/style/mixin.less';
.support-icon {
  display: inline-block;
  background-repeat: no-repeat;
}
.icon-1{
  width:12px;
  height:12px;
  background-size:100% 100%;
  &.decrease{
    .bg-image('./support-ico/decrease_1')
  }
  &.discount{
   .bg-image('./support-ico/discount_1')
  }
  &.special{
   .bg-image('./support-ico/special_1')
  }
  &.invoice{
   .bg-image('./support-ico/invoice_1')
  }
  &.guarantee{
   .bg-image('./support-ico/guarantee_1')
  }
}
.icon-2{
  width:16px;
  height:16px;
  background-size:100% 100%;
  &.decrease{
    .bg-image('./support-ico/decrease_2')
  }
  &.discount{
   .bg-image('./support-ico/discount_2')
  }
  &.special{
   .bg-image('./support-ico/special_2')
  }
  &.invoice{
   .bg-image('./support-ico/invoice_2')
  }
  &.guarantee{
   .bg-image('./support-ico/guarantee_2')
  }
}
.icon-3{
  width:12px;
  height:12px;
  background-size:100% 100%;
  &.decrease{
    .bg-image('./support-ico/decrease_3')
  }
  &.discount{
   .bg-image('./support-ico/discount_3')
  }
  &.special{
   .bg-image('./support-ico/special_3')
  }
  &.invoice{
   .bg-image('./support-ico/invoice_3')
  }
  &.guarantee{
   .bg-image('./support-ico/guarantee_3')
  }
}
.icon-4{
  width:16px;
  height:16px;
  background-size:100% 100%;
  &.decrease{
    .bg-image('./support-ico/decrease_4')
  }
  &.discount{
   .bg-image('./support-ico/discount_4')
  }
  &.special{
   .bg-image('./support-ico/special_4')
  }
  &.invoice{
   .bg-image('./support-ico/invoice_4')
  }
  &.guarantee{
   .bg-image('./support-ico/guarantee_4')
  }
}
</style>
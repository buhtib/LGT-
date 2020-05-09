<!-- 包含头部和尾部的 容器 -->
<template>
  <div class="base-layout">
    <page-header></page-header>
    <!-- banner -->
    <Banner></Banner>
    <!-- <carousel></carousel> -->
    <!-- 中间文字 -->
    <center-text :centerText="$route.meta.centerText" />
    <transition enter-active-class="animated fadeIn">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <share></share>
    <page-footer></page-footer>

    <!-- 置顶组件 -->
    <!-- <a-back-top :visibilityHeight="400" /> -->
  </div>
</template>

<script>
import carousel from '../page/Home/carousel';

export default {
  name: "BaseLayout",
  components: {
      carousel
  },
};
</script>

<style lang="less" scoped>
.base-layout {
  width: 100%;
  height: 100%;
}

</style>
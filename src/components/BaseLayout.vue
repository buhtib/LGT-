<!-- 包含头部和尾部的 容器 -->
<template>
  <div class="base-layout">
    <page-header></page-header>
    <!-- banner -->
    <Banner></Banner>
    <!-- 中间文字 -->
    <center-text :centerText="$route.meta.centerText" />
    <transition enter-active-class="animated fadeIn">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <page-footer></page-footer>

    <!-- 置顶组件 -->
    <a-back-top :visibilityHeight="400" />
  </div>
</template>

<script>
export default {
  name: "BaseLayout"
};
</script>

<style lang="less" scoped>
.base-layout {
  width: 100%;
  height: 100%;
}
.carousel {
  height: calc(100vh - 150px);
}
</style>
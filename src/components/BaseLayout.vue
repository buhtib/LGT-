<!-- 包含头部和尾部的 容器 -->
<template>
  <div class="base-layout">
    <page-header></page-header>
    <!-- 中间文字 -->
    <center-text :centerText="$route.meta.centerText" />

    <transition enter-active-class="animated fadeIn">
      <router-view></router-view>
    </transition>
    <page-footer></page-footer>

  </div>
</template>

<script>
export default {
  name: "BaseLayout",
};
</script>

<style lang="less" scoped>
.base-layout {
  width: 100%;
  height: 100%;
}
</style>
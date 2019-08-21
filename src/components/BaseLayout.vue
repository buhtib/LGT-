<!-- 包含头部和尾部的 容器 -->
<template>
    <div class="base-layout">
        <page-header></page-header>
        <transition enter-active-class="animated fadeIn">
            <router-view></router-view>
        </transition>
        <page-footer></page-footer>

        <!-- 置顶组件 -->
        <back-top :visibilityHeight="100" />
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
</style>
<!-- 包含头部和尾部的 容器 -->
<template>
    <div class="base-layout">
        <page-header></page-header>
            <router-view></router-view>
        <page-footer></page-footer>
    </div>
</template>

<script>
export default {
    name:'BaseLayout'
}
</script>

<style lang="less" scoped>
    .base-layout {
        width: 100%;
    }
</style>
<!-- 首页-->
<template>
    <div class="home">
        <div class="carousel">
            <carousel interval="100"/>
        </div>

        <div class="home-intro"></div>
    </div>
</template>

<script>
import Carousel from "./Carousel";

export default {
    name: "Home",
    components: {
        Carousel
    }
};
</script>

<style lang="less" scoped>
.home {
    min-height: 100%;
    .carousel {
        height: calc(100vh - 170px);
    }
    .home-intro {
    }
}
</style>
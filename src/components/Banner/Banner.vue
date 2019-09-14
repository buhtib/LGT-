<template>
  <div class="carousel">
    <a-carousel autoplay  v-if="!$route.meta.banner" >
        <div class="carousel">
            <img src="~@/assets/img/banner1.jpg" alt="slide" class="img_cover" />
        </div>
        <div class="carousel">
            <img src="~@/assets/img/banner2.jpg" alt="slide" class="img_cover" />
        </div>
        <div class="carousel">
            <img src="~@/assets/img/banner3.jpg" alt="slide" class="img_cover" />
        </div>
    </a-carousel>
  
    <img
      :src="require('../../assets/img/banner'+$route.meta.banner+'.jpg')"
      alt="图片加载失败"
      class="img_cover"
      v-if="$route.meta.banner"
    />
  </div>
</template>

<script>
export default {
  name: "",

  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang='less' scoped>
.carousel {
    width: 100%;
    height: calc(100vh - 150px);
}
</style>
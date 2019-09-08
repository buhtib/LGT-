<template>
  <div class="banner-box">
    <div v-if="$route.meta.title === '首页' ">
      <a-carousel autoplay style="overflow:hidden">
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
    </div>
    <img
      src="~@/assets/img/banner1.jpg"
      alt="图片加载失败"
      v-if="$route.meta.title === 'LGT创意' "
      class="banner"
    />

    <img
      src="~@/assets/img/banner2.jpg"
      alt="图片加载失败"
      v-if="$route.meta.title === '服务范围' "
      class="banner"
    />

    <img
      src="~@/assets/img/banner3.jpg"
      alt="图片加载失败"
      v-if="$route.meta.title === 'LGT项目' "
      class="banner"
    />

    <img
      src="~@/assets/img/banner1.jpg"
      alt="图片加载失败"
      v-if="$route.meta.title === '联系我们' "
      class="banner"
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
.banner-box{
    .banner{
        width: 1356px;
    }
}
</style>
<template>
  <div class="carousel" v-if="$route.meta.banner == 0">
    <a-carousel arrows autoplay effect="fade">
    <div
      slot="prevArrow"
      class="custom-slick-arrow"
      style="left: 10px;zIndex: 1"
    >
      <a-icon type="left-circle" />
    </div>
    <div slot="nextArrow"  class="custom-slick-arrow" style="right: 10px">
      <a-icon type="right-circle" />
    </div>
    <div class="carousel"> <img src="~@/assets/img/banner1.jpg" alt="slide" class="img_cover" /></div>
    <div class="carousel"> <img src="~@/assets/img/banner2.jpg" alt="slide" class="img_cover" /></div>
    <div class="carousel"> <img src="~@/assets/img/banner3.jpg" alt="slide" class="img_cover" /></div>
  </a-carousel>

  </div>
</template>

<script>
export default {
  name: "carousel",

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


.ant-carousel /deep/ .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}

.ant-carousel /deep/ .custom-slick-arrow:before {
  display: none;
}
.ant-carousel /deep/ .custom-slick-arrow:hover {
  opacity: 0.5;
}
</style>
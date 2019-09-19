<!-- LGT项目的详情页-->
<template>
  <!-- section -->
  <div class="project-details">
    <div class="text-box">
      <p class="title">公寓画册设计</p>
      <p class="content">品牌画册设计，是消费者对产品的视觉体验，是产品个性的直接和主要传递者，是企业形象定位的直接表现。好的包装设计是企业创造利润的重要手段之一</p>
    </div>
    <div class="big-box img-box">
      <div class="blockone">
        <img src="~@/assets/img/0 (1).png" alt />
        <div class="fill-block"></div>
      </div>
      <div class="blockone">
        <img src="~@/assets/img/0 (2).png" alt />
        <div class="fill-block"></div>
      </div>
      <div class="blockone">
        <img src="~@/assets/img/0 (3).png" alt />
        <div class="big-fill-block"></div>
      </div>
      <div class="blockone">
        <img src="~@/assets/img/0 (4).png" alt />
        <div class="fill-block"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Details",

  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang='less' scoped>
.project-details {
  // border: 1px solid #000;
  .text-box {
    p {
      margin: 0;
      text-align: center;
    }
    margin: 78px 0;
    .title {
      margin-bottom: 16px;
    }
  }
  .img-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .blockone {
      .fill-block {
        width: 789px;
        height: 40px;
        background-color: #393836;
      }
      .big-fill-block {
        width: 789px;
        height: 137px;
        background-color: #393836;
      }
    }
  }
}
</style>
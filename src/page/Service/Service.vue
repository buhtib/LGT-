<!-- 服务范围-->
<template>
  <div class="service">
    <div class="section">
      <ul class="service-range clearfix">
        <li v-for="(item, i) in project" :key="i" class="service-range-item box-shadow1">
          {{ item }}
        </li>
      </ul>

      <div class="service-design font18">
        <center-text :centerText="centerText" />

        <div
          class="d-flex justify-content-center align-items-center color333 font16"
          style="margin-top:19px;"
        >
          品牌设计讲究的是设计思路，而不是将讲不清楚的品牌形象设计转成主观视觉的设计。
        </div>

        <ul class=" service-desgin clearfix">
          <li class="service-desgin-item box-shadow1">网站开发</li>
          <li class="service-desgin-item box-shadow1">APP开发</li>
          <li class="service-desgin-item box-shadow1">品牌VI设计</li>
          <li class="service-desgin-item box-shadow1">包装设计</li>
          <li class="service-desgin-item box-shadow1">LOGO设计</li>
        </ul>

        <div class="banner">
          <img v-lazy="$imgUrl" alt="" class="img_cover" />
        </div>
      </div>

      <div
        class="look-more_btns d-flex justify-content-center align-items-center"
      >
        <a-button
          class="look-more_btn font20 font-weight-bold"
          size="large"
          @click="$router.push('project')"
          >了解LGT品牌服务项目</a-button
        >
        <a-button
          class="look-more_btn font20 font-weight-bold"
          size="large"
          @click="$router.push('linkus')"
          >联系我们</a-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Service",
  data() {
    return {
      centerText: {
        header: "CREATIVE DESIGN",
        bottom: "创意设计"
      },
      project: [
        "LOGO设计",
        "宣传册设计",
        "品牌VI手册设计",
        "名片设计",
        "展架设计",
        "小程序开发",
        "海报设计",
        "易拉宝设计",
        "网站开发",
        "画册设计",
        "包装设计",
        "APP开发"
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.service {
  margin-top: 8px;
  .service-range {
    &-item {
      float: left;
      width: 14.28%;
      height: 30px;
      margin-top: 30px;
      margin-right: 14.28%;
      text-align: center;
      font-size: 20px;
      letter-spacing: 2px;
      color: #333;
      background-color: #ffffff;
      border-radius: 10px;
      &:nth-child(4n) {
        margin-right: 0;
      }
    }
  }
  .service-desgin {
    .service-range;
    &-item {
      margin-right: 7.15%;
      &:nth-child(4) {
        margin-right: 7.15%;
      }
      &:nth-child(5n) {
        margin-right: 0;
      }
    }
  }
  .title {
    margin-bottom: 10px;
    padding-left: 10px;
    border-left: 8px solid #ccc;
  }
  .service-intro_text {
    margin: 20px 0;
  }

  .service-project {
    padding: 0 160px;
  }

  .service-design {
    .banner {
      height: 500px;
    }
  }

  .look-more_btns {
    margin-top: 40px;
    .look-more_btn {
      box-sizing: border-box;
      width: 286px;
      height: 50px;
      &:first-of-type {
        margin-right: 42px;
      }
    }
  }
}
</style>

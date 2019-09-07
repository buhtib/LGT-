<!-- 首页-->
<template>
  <div class="home">
    <a-carousel autoplay style="overflow:hidden">
      <div class="carousel" >
        <img src="~@/assets/img/banner1.jpg" alt="slide" class="img_cover" />
      </div>
       <div class="carousel" >
        <img src="~@/assets/img/banner2.jpg" alt="slide" class="img_cover" />
      </div>
       <div class="carousel" >
        <img src="~@/assets/img/banner3.jpg" alt="slide" class="img_cover" />
      </div>
    </a-carousel>

    <div class="section">
      <div class="home-intro">
        <a-row :gutter="30" class="row font16" type="flex">
          <a-col :span="11">
            <h1 class="left_title color348">关于我们</h1>
            <h1 class="left_title_noboder color666">About us</h1>
            <div class="text_indent2 ">
              <font class="colora7 font20">随着</font>
              设计界时代的发展，商机处处？还是危机重重呢？改变思路，达到您的目标，是我们的责任！这是一个设计最好的时代，也是最坏的时代，新的品牌以及新的商业模式的出现让老品牌危机处处，LGT设计工作室擅长品牌改造设计、包装设计、网站开发等业务。
            </div>
            <br />
            <div class="text_indent2 ">
              工作室由多位专业的设计师提供最佳的设计方案来协助您解决问题，知人者智，与其胡思乱想，不如让工作室成为您的品牌设计师，与您的品牌一同成长，达到高峰！
            </div>
            <br />
            <div class="text_indent2 ">
              LGT设计工作室的成员都是程序界与设计界的精英，是一家有原创作经验丰富的团队，网站开发与平面设计为一体的设计工作室，工作室有专业的设计师、经验丰富的开发队员，年轻而具创造力的设计制作团队。经过多重工作实战磨练，其能力和默契配合可以胜任任何具有挑战性的工作。
            </div>
          </a-col>
          <a-col :span="13" class="d-flex align-items-end justify-content-end">
            <img
              v-lazy="require('../../assets/img/gzs.png')"
              alt=""
              style="height:300px; width:430px;"
            />
          </a-col>
        </a-row>

        <a-row class="row font16 grid">
          <a-col :span="12">
            <a-row
              v-for="(item, row_index) in 3"
              :key="row_index"
              :class="row_index == 1 ? 'my-1' : ''"
            >
              <a-col
                :span="7"
                v-for="(item, col_index) in 3"
                :key="col_index"
                class="grid-item "
                :class="col_index == 0|| col_index == 1  ? 'mr-1' : ''"
              > 
                <img v-lazy="grid(row_index, col_index)" alt="" />
              </a-col>
            </a-row>
          </a-col>
          <a-col :span="10" offset="2">
            <h1 class="right_title color348">我们，因你而在</h1>
            <h1 class="right_title_noboder color666">Because of you</h1>
            <div class="text_indent2 ">
              <font class="colora7 font20">LGT</font>
              设计工作室已经服务各行业超过三百多家的公司以及店铺，这些都是我们有信心赢得客户良好口碑和高度满意的依据，唯有客户的满意才能让我们继续努力向前冲，追随时代的发展，保持设计的原创。
            </div>
            <br />
            <div class="text_indent2 ">
              客户的满意！就是我们的收获！秉承“客户成功就是我们的成功”的服务理念，为用户提供便利、经济的个性化全程网络应用解决方案，让用户在互联网经济时代，关注自身的核心业务，通过互联网应用提升自身的核心竞争力。
            </div>
            <a-button
              type="primary"
              class="look-more_btn"
              @click="$router.push('brand')"
              >了解更多</a-button
            >
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    grid(row, col) {
      return require("../../assets/img/home-anli-" + row + col + ".png");
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  // min-height: 100%;
  .carousel {
    height: calc(100vh - 150px);
  }
  .home-intro {
    .text_indent2 {
      text-indent: 2em;
    }
    .row {
      margin-top: 40px;
      .left_title {
        line-height: 40px;
        margin-bottom: 10px;
        padding-left: 10px;
        font-size: 30px;
        font-weight: bold;
        border-left: 10px solid #ccc;
      }
      .left_title_noboder {
        .left_title;
        line-height: 20px;
        margin-bottom: 40px;
        padding-right: 20px;
        border: 0;
      }
      .right_title {
        .left_title;
        padding: 0;
        padding-right: 10px;
        text-align: right;
        border: 0;
        border-right: 10px solid #ccc;
      }
      .right_title_noboder {
        .right_title;
        line-height: 20px;
        padding-right: 20px;
        margin-bottom: 40px;
        border: 0;
      }
      .look-more_btn {
        float: right;
      }
    }

    .grid {
      &-item {
        height: 96px;
        line-height: 96px;
        text-align: center;
        border-radius: 5px;
        background-color: #bfbfbf;
      }
    }
  }
}
</style>
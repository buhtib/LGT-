<!-- LGT创意-->
<template>
  <div class="brand">

    <div class="section">
      <div class="brand-people">
        <a-row
          class="row font12 animated fadeInUp"
          v-for="(row, index) in peoples"
          :key="index"
          type="flex"
          justify="space-between"
        >
          <a-col :span="8" v-for="(col, index) in row" :key="index" class="col ">
            <div class="col_img">
              <img v-lazy="col.img" alt style="height:200px;" />
            </div>
            <div class="col-list">
              <ul>
                <li class="font18 lineheight1">
                  {{ col.name }}&nbsp;&nbsp;
                  <span class="font16">{{ col.job }}</span>
                </li>
                <li class="col-list-line"></li>
                <li class="font14 ">
                  <div>{{ col.intro_text_row1 }}</div>
                  <div>{{ col.intro_text_row2 }}</div>
                </li>
              </ul>
            </div>
          </a-col>
        </a-row>
      </div>

      <div
        class="look-more_btns d-flex justify-content-center align-items-center"
      >
        <a-button
          class="look-more_btn font20 font-weight-bold"
          size="large"
          @click="$router.push('service')"
          >了解LGT品牌服务内容</a-button
        >
        <a-button
          class="look-more_btn font20 font-weight-bold"
          size="large"
          @click="$router.push('project')"
          >了解LGT品牌服务案例</a-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Brand",
  data() {
    return {
      peoples: [
        {
          col1: {
            name: "智能灌溉",
            img:require("../../assets/img/irrigation.png"),
            intro_text_row1:
              "智能灌溉系统、智能农业物联网精细农业自控系统。是保证农业作物需水量的前提下，实现节约用水，节省人工，节省成本的应用解决方案。",
          },
          col2: {
            name: "智能灌溉",
            img:require("../../assets/img/irrigation.png"),
            intro_text_row1:
              "智能灌溉系统、智能农业物联网精细农业自控系统。是保证农业作物需水量的前提下，实现节约用水，节省人工，节省成本的应用解决方案。",
          },
           col3: {
            name: "智能灌溉",
            img:require("../../assets/img/irrigation.png"),
            intro_text_row1:
              "智能灌溉系统、智能农业物联网精细农业自控系统。是保证农业作物需水量的前提下，实现节约用水，节省人工，节省成本的应用解决方案。",
          },
        },
        {
          col1: {
            name: "智能家居",
            img:require("../../assets/img/device.png"),
            intro_text_row1:
              "这是一套无线人工智能，结合你的居家环境，生活习惯，灵活，稳定，安全。不会给你带来需要重新装修的烦恼，无线升级方案，让你无忧享有智能生活。",
          },
          // col2: {
          //   name: "叶国凤",
          //   job: "品牌设计",
          //   img:require("../../assets/img/Y.jpg"),
          //   intro_text_row1:
          //     "曾参与各大行业的品牌设计以及品牌定位升级，服务近百个品牌的项目。",
          //   intro_text_row2: "LGT设计工作室创始人之一。"
          // },
          col2: {
            name: "智能家居",
            img:require("../../assets/img/device.png"),
            intro_text_row1:
              "这是一套无线人工智能，结合你的居家环境，生活习惯，灵活，稳定，安全。不会给你带来需要重新装修的烦恼，无线升级方案，让你无忧享有智能生活。",
          },
          col3: {
            name: "智能家居",
            img:require("../../assets/img/device.png"),
            intro_text_row1:
              "这是一套无线人工智能，结合你的居家环境，生活习惯，灵活，稳定，安全。不会给你带来需要重新装修的烦恼，无线升级方案，让你无忧享有智能生活。",
          },
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.brand {
  .brand-people {
    margin-top: 50px;
    .row {
      margin-bottom: 40px;
      .col {
        width: 20%;
        padding: 0 10px;
        .col_img {
          text-align: center;
        }
        .col-list {
          margin-top: 28px;
          .lineheight1 {
            color: #000000;
          }
          .col-list-line {
            width: 100%;
            height: 1px;
            margin: 8px 0 12px;
            background-color: #ccc;
          }
        }
      }
    }
  }
  .look-more_btns {
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

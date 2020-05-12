<!-- 公共底部  -->
<template>
  <div class="page-footer bg2c colorccc font12">
    <div class="section d-flex">
      <div class="page-footer-section d-flex align-items-center justify-content-between">
        <div class="pic">
          <img v-lazy="require('../../assets/img/logo.png')" alt="hehe" />
        </div>

        <ul class="service clearfix">
          <div class="mr-2 mb-2">服务范围</div>
          <li v-for="(item, index) in serviceList" :key="index" class="mb-1 mr-1">
            <span>{{ item }}</span>
          </li>
        </ul>

        <ul class="contact">
          <li class="d-flex mb-2">
            <div class="icon d-flex">
              <div class="icon_img">
                <img src="~@/assets/img/email-white.png" alt srcset />
              </div>
              <span class="separation-line">|</span>
            </div>
            <span>1019114350@qq.com</span>
          </li>
          <li class="d-flex mb-2">
            <div class="icon d-flex">
              <div class="icon_img">
                <img src="~@/assets/img/tel-white.png" alt srcset />
              </div>
              <span class="separation-line">|</span>
            </div>
            <span>19195682297</span>
          </li>
          <li class="d-flex">
            <div class="icon d-flex">
              <div class="icon_img">
                <img src="~@/assets/img/address-white.png" alt srcset />
              </div>
              <span class="separation-line">|</span>
            </div>
            <span>南宁市西乡塘区西乡塘街道新村</span>
          </li>
        </ul>

        <a-row class="qr-code h-100" type="flex" justify="center" align="middle">
          <a-col
            :span="12"
            class="d-flex flex-column justify-content-center align-items-center"
            style="padding-right:85px;"
          >
            <div class>
              <img
                class="gw-qrcode"
                v-lazy="require('../../assets/img/gw-qrcode (2).png')"
                alt="hehe"
              />
            </div>
            <span class="mt-1">资深品牌顾问</span>
          </a-col>
          <a-col :span="12" class="d-flex flex-column justify-content-center align-items-center">
            <div class>
              <img v-lazy="require('../../assets/img/wx-qrcode.png')" alt="hehe" />
            </div>
            <span class="mt-1">LGT公众号</span>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
  data() {
    return {
      serviceList: [
        "LOGO设计",
        "画册设计",
        "易拉宝",
        "海报设计",
        "VI品牌",
        "品牌包装",
        "宣传页",
        "名片设计",
        "网站开发",
        "小程序",
        "网站维护",
        "APP开发",
        "智能灌溉",
        "智能家居"
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.page-footer {
  position: relative;
  z-index: 99;
  height: 180px;
  margin-top: 40px;
  padding: 40px 0;
  .section {
    .page-footer-section {
      width: 100%;
      height: 100%;
      .pic {
        width: 130px;
        height: 90px;
        line-height: 80px;
        text-align: center;
        background-color: #fff;
        border-radius: 4px;
      }

      .service {
        width: 400px;
        margin: 0;
        > li {
          min-width: 24%;
          white-space: nowrap;
          float: left;
          span {
            cursor: pointer;
            &:hover {
              color: #348ccd;
            }
          }
        }
      }

      .contact {
        margin: 0;
        padding-right: 30px;
        white-space: nowrap;
        .icon {
          .icon_img {
            width: 20px;
          }
          .separation-line {
            margin: 0 16px;
          }
        }
      }

      .qr-code {
        white-space: nowrap;
        .gw-qrcode {
          width: 84px;
          height: 82px;
          overflow: hidden;
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
        }
      }
    }
  }
}
</style>
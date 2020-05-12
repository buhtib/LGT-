<!-- 分享drodpown-->
<template>
  <div class="share-page">
    <div class="share-box">
      <template>
        <a-dropdown placement="topCenter" class="share1" overlayClassName="resetStyle">
          <a class="ant-dropdown-link">
            <a-icon type="share-alt" class="share-icon font20 colorfff" />
          </a>
          <a-menu slot="overlay" class="share1-menu">
            <a-menu-item>
              <a href="tencent://message/?uin=1374037049&Site=&Menu=yes">
                <a-icon type="qq" class="colorfff" />
              </a>
            </a-menu-item>
            <a-menu-item class="wechat-position" @mouseenter="enter" @mouseleave="leave">
              <a-icon type="wechat" class="colorfff" />
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </template>

      <div class="wechat-QRcode-box" v-show="isShowWechatQRCode">
        <div class="wx-arrow">
          <span>◆</span>
        </div>
        <div class="wechat-QRcode-img">
          <img src="../../assets/img/gw-qrcode (2).png" />
        </div>
        <p>扫一扫二维码图案</p>
        <p>加微信沟通需求更方便</p>
      </div>

      <template>
        <a-dropdown class="share2">
          <a class="ant-dropdown-link">
            <a-back-top :visibilityHeight="200">
              <a-icon type="up" class="share-icon font20 colorfff" />
            </a-back-top>
          </a>
        </a-dropdown>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "share",

  data() {
    return {
      isShowWechatQRCode: false
    };
  },

  methods: {
    enter() {
      this.isShowWechatQRCode = true;
    },
    leave() {
      this.isShowWechatQRCode = false;
    }
  }
};
</script>

<style lang='less' scoped>
.share-page {
  position: fixed;
  z-index: 100;
  display: block;
  bottom: 95px;
  right: 10px;

  .share-box {
    .share1 {
      .wechat-position {
        position: relative;
      }
    }

    .share2 {
      /deep/ .ant-back-top {
        right: 10px;
        bottom: 50px;
      }
    }

    .share-icon {
      height: 40px;
      width: 40px;
      line-height: 40px;
      border-radius: 4px;
      background-color: Rgba(0, 0, 0, 0.5);
      text-align: center;
    }

    .wechat-QRcode-box {
      position: absolute;
      top: -80px;
      left: -155px;
      width: 140px;
      height: 140px;
      padding: 10px 10px 0;
      background-color: #ffffff;
      color: #000000;
      font-size: 9px;
      text-align: center;
      .wx-arrow {
        top: 50px;
        right: -16px;
        position: absolute;
        z-index: -1;
        span {
          font-family: Simsun;
          font-size: 32px;
          line-height: 32px;
          overflow: hidden;
          color: #73d661;
          color: Rgba(0, 0, 0, 0.5);
        }
      }
      p {
        font-size: 9px;
        margin: 0;
      }
    }
  }
}
</style>
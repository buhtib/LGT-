<!-- 公共头部  -->
<template>
  <div class="page-header" ref="container">
    <a-affix :offsetTop="0.00000001">
      <div class="page-header-intro d-flex justify-content-between section">
        <div
          class="page-header-intro_logo d-flex justify-content-center align-items-center"
        >
          <img src="~@/assets/img/logo.png" alt="logo" />
        </div>
        <ul
          class="page-header-intro_area d-flex flex-column align-items-center justify-content-center"
        >
          <li>
            <span class="line"></span>
            <span class="txt">用设计塑造品牌价值</span>
            <span class="line"></span>
          </li>
          <li class="d-flex">
            <div>
              <img src="~@/assets/img/email-blue.png" alt="" />&nbsp;&nbsp;
              <span>1019114350@qq.com &nbsp;&nbsp; &nbsp; &nbsp;</span>
            </div>
            <div>
              <img src="~@/assets/img/wx-blue.png" alt="" />&nbsp;&nbsp;
              <img src="~@/assets/img/tel-blue.png" alt="" />&nbsp;&nbsp;
              <span>电话/微信：18219082540</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="nav d-flex justify-content-center">
        <div class="row align-items-center section">
          <router-link
            class="col-xl r-link"
            v-for="(tab, i) in navList"
            :key="i"
            :to="tab.path"
            exact
            >{{ tab.name }}</router-link
          >
        </div>
      </div>
    </a-affix>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  data() {
    return {
      navList: [
        { name: "首页", path: "/home" },
        { name: "LGT创意", path: "/brand" },
        { name: "服务范围", path: "/service" },
        { name: "LGT项目", path: "/project" },
        { name: "联系我们", path: "/linkus" }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.page-header {
  width: 100%;
  background-color: #fff;
  /deep/ .ant-affix {
    background-color: #fff;
  }
  .page-header-intro {
    height: 110px;
    .page-header-intro_logo {
      width: 30%;
      height: 100%;
    }
    .page-header-intro_area {
      width: 40%;
      height: 100%;

      > li {
        &:first-of-type {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          font-size: 16px;
          color: #348ccd;
          .line {
            flex: 1;
            height: 1px;
            background-color: #348ccd;
          }
          .txt {
            margin: 0 8px;
          }
        }
        &:last-of-type {
          margin-top: 10px;
          font-size: 14px;
          color: #333;
        }
      }
    }
  }

  .nav {
    background-color: #348ccd;
    .row {
      height: 40px;
      font-size: 14px;
      .col-xl {
        padding: 10px 5px;
        text-align: center;
        color: #fff;
      }
    }
  }
}
</style>
<!-- 公共头部  -->
<template>
  <div class="page-header" ref="container">
    <a-affix :offsetTop="0.00000001">
      <div class="logo-box" @click="goHome">
        <div>
          <img src="../../assets/img/logo.png" class="logo" />
        </div>
        <span class="name">智能桂联</span>
      </div>
      <div class="nav d-flex justify-content-center">
        <div class="row align-items-center">
          <router-link
            :class="_navStyle"
            v-for="(tab, i) in navList"
            :key="i"
            :to="{path:tab.path}"
            exact
          >{{ tab.name }}</router-link>
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
        { name: "应用方案", path: "/brand" },
        { name: "小程序", path: "/applets" },
        { name: "经典项目", path: "/project" },
        { name: "联系我们", path: "/linkus" }
      ]
    };
  },
  watch: {},
  computed: {
    _navStyle() {
      return this.$route.meta.title === "详情" ? "detailsCol" : "col-xl r-link";
    }
  },
  methods: {
    goHome() {
      this.$router.push({ name: "home"});
    }
  }
};
</script>

<style lang="less" scoped>
.page-header {
  width: 100%;
  height: 80px;
  .logo-box {
    position: absolute;
    left: 10%;
    top: 50%; 
    z-index: 11;
    width: 76px;
    height: 45px;
    transform: translateY(-50%);
    cursor: pointer;
    .logo {
      width: 100%;
      height: 100%;
      padding-bottom: 3px;
    }
    .name {
      width: 76px;
      height: 18px;
      font-family: SourceHanSansCN-Regular;
      font-size: 17px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 19px;
      letter-spacing: 2px;
      color: #ffffff;
    }
  }
  .nav {
    position: relative;
    background-color: #000000;
    opacity: 0.8;
    .row {
      width: 50%;
      height: 80px;
      font-size: 14px;
      .col-xl {
        padding:30px 5px;
        text-align: center;
        color: #ffffff;
      }
    }
  }

  .r-link {
    &.router-link-exact-active {
      color: #ffffff !important;
    }
  }
  .detailsCol {
    margin-right: 40px;
    font-size: 14px;
    color: #fff;
  }
}
</style>
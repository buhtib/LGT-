<template>
  <div id="app">
    <router-view :key="$route.fullpath"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      centerText: {
        header: "",
        bottom: ""
      }
    };
  },
  watch: {
    $route(to, from) {
      console.log(to);
      switch (to.name) {
        case "brand":
          this.centerText = {
            header: "Introduction",
            bottom: "LGT核心团队"
          };
          break;
        case "service":
          this.centerText = {
            header: "Services",
            bottom: "服务范围"
          };
          break;
        case "project":
          this.centerText = {
            header: "Cases",
            bottom: "LGT的项目"
          };
          break;
        case "linkus":
          this.centerText = {
            header: "Contact",
            bottom: "联系我们咨询项目"
          };
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style lang="less">
@import "./style/base.less";
@import "./style/global.less";
@import "./style/bootstarp-ui.less";

#app {
  height: 100%;
  width: 100%;
}
</style>

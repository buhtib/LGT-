<template>
  <div class="page-header">
    <div class="container section">
      <div class="row align-items-center">
        <router-link  class="col-xl" v-for="(tab, i) in navList" :key="i"  :to="tab.path">
          {{ tab.name }}
        </router-link >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  data() {
    return {
      navList: [
        { name: "首页", path: "/" },
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
  //默认relative 但能有fixed效果
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #eee;
  .row {
    height: 50px;
  }
  .col-xl {
    text-align: center;
  }
}
</style>
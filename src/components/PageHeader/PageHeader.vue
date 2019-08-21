<!-- 公共头部  -->
<template>
  <div class="page-header sticky-top">
    <div class=" section">
      <div class="page-header-intro">
        <div class="page-header-intro_logo">
          <img :src="$imgUrl" alt="logo" class="img_cover" />
        </div>
        <ul class="page-header-intro_area">
          <li>
            <span class="line"></span>
            <span class="txt">用设计塑造品牌价值</span>
            <span class="line"></span>
          </li>
          <li>
            邮箱：1019114350@qq.com &nbsp;&nbsp; &nbsp; &nbsp;
            电话/微信：18219082540
          </li>
        </ul>
      </div>

      <div class="row align-items-center">
        <router-link
          class="col-xl r-link"
          v-for="(tab, i) in navList"
          :key="i"
          :to="tab.path"
          exact
        >
          {{ tab.name }}
        </router-link>
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
  //默认会relative 但能有fixed效果
//   position: sticky;
//   top: 0;
  width: 100%;
  background-color: #eee;
  .page-header-intro {
    display: flex;
    justify-content: space-between;
    height: 120px;
    .page-header-intro_logo {
      width: 30%;
      height: 100%;
    }
    .page-header-intro_area {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 50%;
      height: 100%;

      > li {
        &:first-of-type {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          .line {
            flex:1;
            height: 1px;
            background-color: #666;
          }
          .txt {
            margin: 0 8px;
          }
        }
        &:last-of-type {
          margin-top: 10px;
          font-size: 12px;
          font-weight: bold;
        }
      }
    }
  }

  .row {
    height: 50px;
    .col-xl {
      padding: 10px 5px;
      text-align: center;
    }
  }
}
</style>
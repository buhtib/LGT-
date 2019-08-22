<!-- LGT项目-->
<template>
  <div class="project">
    <div class="banner-text">
      <ul class="li-text">
        <li>
          <span class="all-case">全部案例</span>
        </li>
        <li>
          <span>品牌VI设计</span>
        </li>
        <li>
          <span>APP开发</span>
        </li>
        <li>
          <span>海报设计</span>
        </li>
        <li>
          <span>LOGO设计</span>
        </li>
        <li style="opacity:0">
          <span>全部案例</span>
        </li>
        <li>
          <span>画册设计</span>
        </li>
        <li>
          <span>包装设计</span>
        </li>
        <li>
          <span>网站开发</span>
        </li>
        <li>
          <span>包装设计</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project"
};
</script>

<style lang="less" scoped>
.project {
  .banner-text {
    display: flex;
    justify-content: center;
    align-items: center;
    .li-text {
      display: flex;
      height: 200px;
      line-height: 1;
      font-size: 30px;
      margin: 50px 0;
      justify-content: center;
      flex-wrap: wrap;
      li {
        padding: 0 50px;
        font-weight: bold;
        span{
          text-align: center;
        }
        .all-case {
          padding: 30px 20px;
          background: rgb(201, 201, 201);
        }
      }
    }
  }
}
</style>
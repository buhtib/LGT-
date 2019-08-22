<!-- LGT项目-->
<template>
  <div class="project">
    <div class="section">
      <div class="d-flex flex-row bd-highlight mb-3 justify-content-center">
        <div class="p-2 bd-highlight font-weight-bold text">全部案例</div>
        <div class="p-2 bd-highlight text">品牌VI设计</div>
        <div class="p-2 bd-highlight text">APP开发</div>
        <div class="p-2 bd-highlight text">海报设计</div>
        <div class="p-2 bd-highlight text">LOGO设计</div>
      </div>

      <div
        class="d-flex flex-row-reverse bd-highlight justify-content-center"
        style="padding-bottom:50px"
      >
        <div class="p-2 bd-highlight text">画册设计</div>
        <div class="p-2 bd-highlight text">包装设计</div>
        <div class="p-2 bd-highlight text">网站开发</div>
        <div class="p-2 bd-highlight text">包装设计</div>
        <div style="opacity:0;display:inline-block" class="p-2 bd-highlight text">
          包装设计
        </div>
      </div>

      <a-row
        class="mb-3 logo-row"
        v-for="(item, i) in 5"
        :key="i"
      >
        <a-col :span="6" class="h-100 logo-col ">皓月天誉LOGO设计</a-col>
        <a-col :span="6" class="h-100 logo-col ">皓月天誉LOGO设计</a-col>
        <a-col :span="6" class="h-100 logo-col ">皓月天誉LOGO设计</a-col>
        <a-col :span="6" class="h-100 logo-col">皓月天誉LOGO设计</a-col>
      </a-row>
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
  .text {
    font-size: 28px;
  }
  .logo-row {
    height: 300px;
  }
  .logo-col {
    background: rgb(201, 201, 201);
  }
}
</style>
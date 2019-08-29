<!-- LGT项目的详情页-->
<template>
  <div class="project-details section">
    <a-button class="back-btn" @click="back">返回</a-button>
  </div>
</template>

<script>
export default {
  name: "details",

  data() {
    return {};
  },

  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang='less' scoped>
.project-details {
  border: 1px solid #000;
  .back-btn {
    width: 24%;
    height: 50px;
  }
}
</style>
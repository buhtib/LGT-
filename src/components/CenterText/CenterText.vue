<template>
  <div class="center-text" v-if="centerText">
    <div class="header">{{centerText.header}}</div>
    <div class="center"></div>
    <div class="bottom">{{centerText.bottom}}</div>
  </div>
</template>

<script>
export default {
  name: "CenterText",
  props: {
    centerText: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang='less' scoped>
.center-text {
  padding-top: 50px;
  .header {
    line-height: 1;
    font-size: 38px;
    font-weight: bold;
    text-align: center;
  }
  .center {
    width: 13rem;
    margin: 10px auto;
    border-top: 1px solid #dddddd;
  }
  .bottom {
    //继承属性
    .header;
    font-size: 18px;
  }
}
</style>
<!-- 联系我们-->
<template>
  <div class="link-us">
    <div class="select section">
      <p class="title">欢迎来到LGT工作室！请选择您需要服务项目。</p>
      <div class="radio-group">
        <a-radio-group :options="plainOptions" @change="onChange1"  class="radio"/>
        <br />
        <a-radio-group :options="options" @change="onChange2" class="radio"/>
        <br />
        <a-radio-group :options="optionsWithDisabled" @change="onChange3" class="radio"/>
      </div>
    </div>
    <div class="form">
      <p class="title">欢迎来到LGT品牌！请输入您的信息。</p>
      <div>
        <a-form :form="form">
          <a-form-item>
            <a-input placeholder="您的姓名！" v-model="form.name" />
          </a-form-item>
          <a-form-item>
            <a-input placeholder="您的公司！" v-model="form.company" />
          </a-form-item>
          <a-form-item>
            <a-input placeholder="您的电话！" v-model="form.tel" />
          </a-form-item>
          <a-form-item>
            <a-input placeholder="您的邮箱！" v-model="form.email" />
          </a-form-item>
          <a-form-item>
            <a-textarea placeholder="您还可以补充说明您的要求？LGT客服会尽快为您服务！" :rows="4" v-model="form.textarea" />
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit" @click="submission">确定</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
const plainOptions = [
  { label: "LOGO设计", value: "LOGO设计" },
  { label: "宣传册设计", value: "宣传册设计" },
  { label: "品牌VI手册设计", value: "品牌VI手册设计" }
];
const options = [
  { label: "名片设计", value: "名片设计" },
  { label: "展架设计", value: "展架设计" },
  { label: "小程序开发", value: "小程序开发" }
];
const optionsWithDisabled = [
  { label: "海报设计", value: "海报设计" },
  { label: "易拉宝设计", value: "易拉宝设计" },
  { label: "网站开发", value: "网站开发" }
];
export default {
  name: "LinkUs",
  data() {
    return {
      plainOptions,
      options,
      optionsWithDisabled,
      form: {
        name: "",
        company: "",
        tel: "",
        email: "",
        textarea: ""
      }
    };
  },
  methods: {
    onChange1(e) {
      console.log("radio1 checked", e.target.value);
    },
    onChange2(e) {
      console.log("radio2 checked", e.target.value);
    },
    onChange3(e) {
      console.log("radio3 checked", e.target.value);
    },
    submission() {}
  }
};
</script>

<style lang="less" scoped>
.link-us {
  .title {
    font-size: 22px;
  }
  .select {
    .radio-group{
      display: flex;
      justify-content: center;
      .radio{
        font-size: 50px;
        font-weight: bold;
        margin: 20px 150px;
      }
    }
  }
  .form {
    width: 90%;
    margin: 0 auto;
  }
}
</style>
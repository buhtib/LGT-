<!-- 联系我们-->
<template>
  <div class="link-us">
    <div class="select section">
      <p class="title">欢迎来到LGT工作室！请选择您需要的服务项目</p>
      <div class="radio-group section">
        <a-checkbox-group :options="plainOptions" @change="onChange1" class="checkbox" />

        <a-checkbox-group :options="options" @change="onChange2" class="checkbox" />

        <a-checkbox-group :options="optionsWithDisabled" @change="onChange3" class="checkbox" />
      </div>
    </div>
    <div class="bottom-box section">
      <div class="left-box">
        <div class="text-box">
          <div class="text-box text">
            <div class="text-box sign"></div>一群狂热的年轻人，用自己的视野重新塑造产品、爱生活，爱艺术，希望通过一己之力改变周围的世界.
          </div>
        </div>
      </div>
      <div class="right-box">
        <span class="title">欢迎来到LGT品牌！</span>
        <div class="form-box">
          <a-form :form="form" class="form">
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="您的姓名"
            >
              <a-input
                class="item-input"
                v-decorator="[
                'username',
                  {rules: [{ required: true, message: '请输入您的姓名！' }]}
                ]"
                placeholder="Please input your name"
              />
            </a-form-item>
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="电话号码"
            >
              <a-input
                class="item-input"
                v-decorator="[
                'tel',
                  {rules: [{ required: true, message: '请输入您的电话号码！' }]}
                ]"
                placeholder="Please input your telephone number"
              />
            </a-form-item>
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="电子邮箱"
            >
              <a-input
                class="item-input"
                v-decorator="[
                'email',
                  {rules: [{ required: true, message: '请输入您的邮箱！' }]}
                ]"
                placeholder="Please input your email"
              />
            </a-form-item>
            <a-form-item
              label="公司名称"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-input placeholder="Please input your corporate name" class="item-input" />
            </a-form-item>
            <a-form-item
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
              label="留言内容"
            >
              <a-textarea
                class="item-input-last"
                v-decorator="[
                  'leavingMsg',
                  {rules: [{ required: true, message: '请输入您的留言内容！' }]}
                ]"
                placeholder="Please input your Leaving a message"
              ></a-textarea>
            </a-form-item>
            <a-form-item
              :label-col="formTailLayout.labelCol"
              :wrapper-col="formTailLayout.wrapperCol"
            >
              <a-button type="primary" @click="check">提交</a-button>
            </a-form-item>
          </a-form>
        </div>
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
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }
};
export default {
  name: "LinkUs",
  data() {
    return {
      plainOptions,
      options,
      optionsWithDisabled,
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this)
    };
  },
  methods: {
    // 多选框
    onChange1(checkedValues) {
      console.log("checked = ", checkedValues);
      console.log("value = ", this.value);
    },
    onChange2(checkedValues) {
      console.log("checked = ", checkedValues);
      console.log("value = ", this.value);
    },
    onChange3(checkedValues) {
      console.log("checked = ", checkedValues);
      console.log("value = ", this.value);
    },
    check() {
      this.form.validateFields(err => {
        if (!err) {
          console.info("success");
        }
      });
    },
    handleChange(e) {
      this.checkNick = e.target.checked;
      this.$nextTick(() => {
        this.form.validateFields(["nickname"], { force: true });
      });
    }
  }
};
</script>

<style lang="less" scoped>
.link-us {
  padding-top: 30px;
  .title {
    font-size: 22px;
  }
  .select {
    .title {
      margin-bottom: 40px;
      font-size: 15px;
      color: #333333;
      text-align: center;
    }
    .radio-group {
      display: flex;
      justify-content: center;
      .checkbox {
        font-size: 20px;
        color: #333333;
        margin: 0 108px;
      }
    }
  }
  .bottom-box {
    display: flex;
    padding-top: 40px;
    .left-box {
      width: 310px;
      .text-box {
        .sign {
          display: inline-block;
          width: 13px;
          height: 26px;
          margin-right: 25px;
          background-color: #348ccd;
        }
        .text {
          display: inline-block;
          font-size: 28px;
          color: #333333;
        }
      }
    }
    .right-box {
      position: relative;
      width: 558px;
      height: 572px;
      margin-left: 276px;
      border-style: solid;
      border-top-width: 12px;
      border-right-width: 6px;
      border-bottom-width: 12px;
      border-left-width: 6px;
      border-radius: 10px;
      color: #348ccd;
      .title {
        position: absolute;
        top: 42px;
        left: 43px;
        font-size: 14px;
        color: #333333;
      }
      .form-box {
        width: 454px;
        margin-top: 100px;
        margin-left: 58px;
      }
    }
  }
}
</style>
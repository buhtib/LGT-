<!-- 联系我们-->
<template>
  <div class="link-us">
    <div class="select section">
      <p class="title">欢迎来到LGT工作室！请选择您需要服务项目</p>
      <div class="radio-group section">
        <a-radio-group :options="plainOptions" @change="onChange1" class="radio" />
        <a-radio-group :options="options" @change="onChange2" class="radio" />
        <a-radio-group :options="optionsWithDisabled" @change="onChange3" class="radio" />
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
          <div>
            <a-form :form="form" class="form">
              <a-form-item class="form-item">
                <span>您的姓名:</span>
                <a-input v-model="form.name" class="form-input"  />
              </a-form-item>
              <a-form-item class="form-item">
                <span>公司地址:</span>
                <a-input v-model="form.company" class="form-input" />
              </a-form-item>
              <a-form-item class="form-item">
                <span>电子邮箱:</span>
                <a-input v-model="form.tel" class="form-input" />
              </a-form-item>
              <a-form-item class="form-item">
                <span>公司名称:</span>
                <a-input v-model="form.email" class="form-input" />
              </a-form-item>
              <a-form-item class="form-item">
                <span class="leaving-msg">留言内容:</span>
                <a-textarea
                  placeholder="请输入留言内容"
                  v-model="form.textarea"
                  class="form-input"
                  style="width:340px;height:168px"
                />
              </a-form-item>
              <a-button type="primary" html-type="submit" @click="submission" class="sub-btn">确定</a-button>
            </a-form>
          </div>
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
      .radio {
        font-size: 20px;
        color: #333333;
        margin: 0 208px;
        .ant-radio-wrapper {
          margin: 30px 0;
        }
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
      .title{
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
        .form {
          .form-item {
            margin-bottom: 16px;
            line-height: 30px;
            .ant-form-item-control-wrapper{
              line-height: 30px;
            }
            span {
              margin-right: 10px;
            }
            .leaving-msg{
              position: relative;
              bottom: 150px;
            }
            .form-input {
              width: 340px;
              height: 30px;
            }
          }
          .sub-btn {
            width: 110px;
            height: 38px;
            margin: 4px 68px;
            background-color: #348ccd;
          }
        }
      }
    }
  }
}
</style>
<!-- LGT项目-->
<template>
  <div class="project">
    <div class="section">
      <div class="d-flex flex-row bd-highlight mb-3 justify-content-center">
        <div class="p-2 bd-highlight font-weight-bold text allCase" @click="isShow('全部案例')">全部案例</div>
        <div class="p-2 bd-highlight text" @click="isShow('品牌VI设计')">品牌VI设计</div>
        <div class="p-2 bd-highlight text" @click="isShow('APP开发')">APP开发</div>
        <div class="p-2 bd-highlight text" @click="isShow('海报设计')">海报设计</div>
        <div class="p-2 bd-highlight text" @click="isShow('LOGO设计')">LOGO设计</div>
      </div>

      <div
        class="d-flex flex-row-reverse bd-highlight justify-content-center"
        style="padding-bottom:50px"
      >
        <div class="p-2 bd-highlight text" @click="isShow('画册设计')">画册设计</div>
        <div class="p-2 bd-highlight text" @click="isShow('包装设计')">包装设计</div>
        <div class="p-2 bd-highlight text" @click="isShow('网站开发')">网站开发</div>
        <div class="p-2 bd-highlight text" @click="isShow('包装设计')">包装设计</div>
        <div style="opacity:0;font-size:28px" class="p-2 bd-highlight">包装设计</div>
      </div>

      <div class="logoList">
        <a-row class="mb-3 logo-row" v-for="(item, i) in list1" :key="i" :gutter="16">
          <a-col :span="6" class="h-100 logo-col">{{ item.text1 }}</a-col>
          <a-col :span="6" class="h-100 logo-col">{{ item.text2 }}</a-col>
          <a-col :span="6" class="h-100 logo-col">{{ item.text3 }}</a-col>
          <a-col :span="6" class="h-100 logo-col">{{ item.text4 }}</a-col>
        </a-row>

        <a-row class="mb-3 logo-row" v-for="(item, i) in list2" :key="i" :gutter="16">
          <a-col :span="6" class="h-100 logo-col">{{ item.text1 }}</a-col>
          <a-col :span="6" class="h-100 logo-col">{{ item.text2 }}</a-col>
          <a-col :span="6" class="h-100 logo-col">{{ item.text3 }}</a-col>
          <a-col :span="6" class="h-100 logo-col">{{ item.text4 }}</a-col>
        </a-row>

        <a-row class="mb-3 logo-row" v-for="(item, i) in list3" :key="i" :gutter="16">
          <a-col :span="6" class="h-100 logo-col">
              <img v-lazy="'http://pic15.nipic.com/20110809/2801706_150850625000_2.jpg'">
              {{ item.text1 }}</a-col>
          <a-col :span="6" class="h-100 logo-col">{{ item.text2 }}</a-col>
          <a-col :span="6" class="h-100 logo-col">{{ item.text3 }}</a-col>
          <a-button class="lookMore" @click="lookMore">查看更多</a-button>
        </a-row>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  data() {
    return {
      list1: [
        {
          text1: "数寄屋桥次郎店铺'画册' ",
          text2: "品存耳机网站开发' ",
          text3: "顾家家居LOGO+整套VI手册设计' ",
          text4: "裤兜网LOGO设计 "
        }
      ],
      list2: [
        {
          text1: "沐格 more grace海报设计 ",
          text2: "睿杏堂LOGO设计' ",
          text3: "水印长天LOGO设计' ",
          text4: "英醇礼LOGO以及茶包装设计 "
        }
      ],
      list3: [
        {
          text1: "飞行管家APP设计及开发",
          text2: "快乐柠檬网站开发 ",
          text3: "私潮APP开发设计"
        }
      ],
    };
  },
  methods: {
    isShow(val) {
      switch (val) {
        case "全部案例":
          break;
        case "品牌VI设计":
          break;
        case "APP开发":
          break;
        case "海报设计":
          break;
        case "LOGO设计":
          break;
        case "画册设计":
          break;
        case "包装设计":
          break;
        case "网站开发":
          break;
        case "包装设计":
          break;
      }
    },
    lookMore() {
      
    }
  }
};
</script>

<style lang="less" scoped>
.project {
  .allCase {
    background: rgb(201, 201, 201);
  }
  .text {
    font-size: 28px;
    cursor: pointer;
  }
  .logo-row {
    height: 300px;
  }
  .logo-col {
    background: rgb(201, 201, 201);
    cursor: pointer;
  }
  .logoList{
    .lookMore{
      position: absolute;
      right: 0;
      bottom: 0;
      width: 200px;
      height: 50px;
    }
  }
}
</style>
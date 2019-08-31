<!-- LGT项目-->
<template>
  <div class="project">
    <div class="section">
      <div class="select-project font24">
        <a-row
          type="flex"
          justify="center"
          v-for="(row, index) in projectNameList"
          :key="index"
          class="my-5"
        >
          <a-col
            :span="3"
            v-for="(col, index) in row"
            :key="index"
            @click="changeSelectProjectAction(col.type)"
            class="col p-2  mr-5 text-center"
            :class="{ active: currentSelect == col.type }"
          >
            {{ col.name }}
          </a-col>
        </a-row>
      </div>

      <div class="logoList ">
        <ul class="clearfix font18">
          <li
            v-for="(item, index) in projectList[currentSelect]"
            :key="index"
            @click="gotodetails"
          >
            {{ item.name }}
          </li>
        </ul>

        <div class="lookMore d-flex justify-content-end align-items-center">
          <a-button class="lookMore-btn" @click="lookMore">查看更多</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  data() {
    return {
      projectNameList: [
        [
          { name: "全部案例", type: "all" },
          { name: "品牌VI设计", type: "vi" },
          { name: "APP开发", type: "app" },
          { name: "海报设计", type: "pt" },
          { name: "LOGO设计", type: "logo" }
        ],
        [
          { name: "画册设计", type: "pa" },
          { name: "包装设计", type: "pg" },
          { name: "网站开发", type: "web" }
        ]
      ],
      projectList: {},
      currentSelect: "all"
    };
  },
  mounted() {
    this.getAllProject();
  },
  methods: {
    getAllProject() {
      _axios
        .get("caselist")
        .then(res => {
          this.projectList = res;
          this.sortAllProject();
        })
        .catch(err => {});
    },
    //分类
    sortAllProject() {
      let projectList = {};

      ["app", "logo", "pa", "pg", "pt", "vi", "web"].map(type => {
        projectList[type] = this.projectList.filter(item => {
          return item.type == type;
        });
      });
      projectList.all = this.projectList;

      this.projectList = projectList;
    },

    changeSelectProjectAction(type) {
      this.currentSelect = type;
    },
    lookMore() {},
    gotodetails() {
      this.$router.push({ name: "details" });
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
  .logoList {
    .lookMore {
      .lookMore-btn {
        width: 200px;
        height: 50px;
      }
    }
    > ul {
      li {
        float: left;
        width: 24%;
        height: 240px;
        margin: 0 1% 20px 0;
        background-color: #eee;
        color: blue;
        cursor: pointer;
      }
    }
  }

  .select-project {
    // width: 80%;
    // margin: 0 auto;
    .col {
      cursor: pointer;
      &.active {
        background: rgb(201, 201, 201);
        transition: background 0.5s;
        font-weight: bold;
      }
    }
  }
}
</style>
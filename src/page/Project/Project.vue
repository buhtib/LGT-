<!-- LGT项目-->
<template>
  <div class="project">
    <div class="section">
      <div class="select-project font24">
        <a-row type="flex" justify="center" v-for="(row, index) in projectNameList" :key="index">
          <a-col
            :span="3"
            v-for="(col, index) in row"
            :key="index"
            @click="changeSelectProjectAction(col.type)"
            class="col mr-5 text-center"
            :class="{ active: currentSelect == col.type }"
          >
            <span>{{col.type_name}}</span>
          </a-col>
        </a-row>
      </div>

      <div class="logo-list">
        <ul class="clearfix font18">
          <li v-for="(item, index) in projectList[currentSelect]" :key="index">
            <a-button type="primary" class="look-details" @click="gotodetails(item)">查看详情</a-button>
            <img v-lazy="item.img" style="width:100%;height:100%;" />
            <span class="logo-list text">{{ item.name }}</span>
          </li>
        </ul>

        <div class="look-more d-flex justify-content-end align-items-center">
          <a-button class="look-more-btn" @click="lookMore">查看更多</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { casetype, caselist } from "../../api/project";
export default {
  name: "Project",
  data() {
    return {
      projectNameList: [],
      projectList: {},
      currentSelect: "all",
      pageForm: {
        pageNum: 1, // 当前页码
        pageSize: 10 // 每页条数
      }
    };
  },
  watch: {
    $route: "watchRouter"
  },
  mounted() {
    // this.getAllProject();
  },
  methods: {
    // 重置数据
    watchRouter(to, from) {
      if (to.path == "/project") {
        this.pageForm = {
          pageNum: 1, // 当前页码
          pageSize: 10 // 每页条数
        };
        this.currentSelect = "all"; // 类型
        this.getAllProject();
      }
    },
    // 获取数据
    async getAllProject() {
      this.pageForm.pageNum = 1; // 重置页数
      const pageNum = this.pageForm.pageNum; // 开始页数
      const pageSize = this.pageForm.pageSize; // 结束页数
      const type = this.currentSelect; // 类型

      let form = {
        pageNum,
        pageSize,
        type
      };
    
      await casetype().then(res => {
        if (res.code === 0) {
          const result = res.data.reverse();
          var arr = [];
          // 一维数组分割为多维数组
          for (var i = 0; i < result.length; i += 4) {
            arr.push(result.slice(i, i + 4));
          }
          this.projectNameList = arr;
        }
      });

      await caselist(form).then(res => {
        if (res.code === 0) {
          this.projectList = res.data;
          this.sortAllProject();
        }
      });
    },
    //分类
    sortAllProject() {
      let projectList = {};

      const classificationArr = [
        "app",
        "logo",
        "pa",
        "pg",
        "vi",
        "web",
        "pb",
        "sm",
        "pt"
      ];

      classificationArr.map(type => {
        projectList[type] = this.projectList.filter(item => {
          return item.type == type;
        });
      });
      projectList.all = this.projectList;

      this.projectList = projectList;
    },

    changeSelectProjectAction(type) {
      this.currentSelect = type;
      this.getAllProject();
    },
    // 查看更多
    lookMore() {
      this.pageForm.pageNum++;
      const pageNum = this.pageForm.pageNum;
      const pageSize = this.pageForm.pageSize;
      const type = this.currentSelect;

      let form = {
        pageNum,
        pageSize,
        type
      };

      caselist(form).then(res => {
        // 追加数据
        if (res.code === 0 && res.data.length !== 0) {
          this.projectList[this.currentSelect] = this.projectList[
            this.currentSelect
          ].concat(res.data);
        } else {
          this.$message.warning("没有更多数据了！");
        }
      });
    },
    // 查看详情
    gotodetails(item) {
      // this.$router.push({ name: "details", query: { name: item.name } });
      const url = item.url;
      const name = item.name;

      if (!url) {
        window.open(`/management?id=${name}&type=pdf&suffix=pdf`);
      } else {
        window.open(url);
      }
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
  .logo-list {
    margin-top: 40px;
    .look-more {
      .look-more-btn {
        width: 200px;
        height: 50px;
      }
    }
    > ul {
      li {
        position: relative;
        top: -74px;
        float: left;
        width: 24%;
        height: 281px;
        margin: 74px 1% 20px 0;
        background-color: #eee;
        color: blue;
        text-align: center;
        cursor: pointer;
        img {
          &:hover {
            opacity: 0.3;
            transition: 0.8s;
          }
        }
        .look-details {
          position: absolute;
          z-index: 1;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 109px;
          margin: auto;
          opacity: 0;
        }
        &:hover .look-details {
          opacity: 1;
          transition: 0.8s;
        }
        span {
          display: inline-block;
          margin-top: 18px;
          font-size: 18px;
          color: #333333;
        }
      }
    }
  }

  .select-project {
    height: 150px;
    margin-top: 40px;
    .ant-row-flex {
      margin-top: 30px;
    }
    .col {
      width: 160px;
      height: 30px;
      margin: 0 50px;
      font-size: 20px;
      color: #333333;
      border-radius: 5px;
      background: #ffffff;
      box-shadow: 0px 0px 10px -5px rgba(0, 0, 0);
      cursor: pointer;
      &.active {
        color: #ffffff;
        background-color: #348ccd;
        border-radius: 5px;
        transition: background 0.5s;
        font-weight: bold;
      }
    }
  }
}
</style>
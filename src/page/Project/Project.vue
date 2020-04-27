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
            <span>{{col.name}}</span>
          </a-col>
        </a-row>
      </div>

      <div class="logo-list">
        <ul class="clearfix font18">
          <li v-for="(item, index) in projectList[currentSelect]" :key="index">
            <a-button type="primary" class="look-details" @click="gotodetails(item)">查看详情</a-button>
            <img v-lazy="item.img" alt style="width:100%;height:100%;" />
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
import { caselist } from "../../api/project";
export default {
  name: "Project",
  data() {
    return {
      projectNameList: [
        [
          { name: "全部案例", type: "all" },
          { name: "品牌VI设计", type: "vi" },
          { name: "APP开发", type: "app" },
          { name: "LOGO设计", type: "logo" }
        ],
        [
          { name: "全部案例", type: "all" },
          { name: "画册设计", type: "pa" },
          { name: "包装设计", type: "pg" },
          { name: "网站开发", type: "web" }
        ]
      ],
      projectList: {},
      currentSelect: "all",
      pageForm: {
        pageNum: 1, // 当前页码
        pageSize: 10, // 每页条数
      }
    };
  },
  mounted() {
    this.pageForm = {
      pageNum: 1, // 当前页码
      pageSize: 10, // 每页条数
      type: "all"
    };
    console.log('mounted');
    
    this.getAllProject();
  },
  methods: {
    getAllProject() {
      this.pageForm.pageNum = 1; // 重置页数
      const pageNum = this.pageForm.pageNum; // 开始页数
      const pageSize = this.pageForm.pageSize; // 结束页数
      const type = this.currentSelect; // 类型

      let form = {
        pageNum,
        pageSize,
        type
      };

      caselist(form).then(res => {
          this.projectList = res.data;
          this.sortAllProject();
        }).catch(err => {
          console.log(err, "err");
        });
    },
    //分类
    sortAllProject() {
      let projectList = {};

      ["app", "logo", "pa", "pg", "vi", "web"].map(type => {
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
    gotodetails(item) {
      // this.$router.push({ name: "details", query: { name: item.name } });
      const name = item.name;
      window.open(`/management?id=${name}&type=pdf&suffix=pdf`);
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
    height: 90px;
    margin-top: 40px;
    .ant-row-flex:last-child {
      margin-top: 30px;
      .col:first-child {
        opacity: 0;
      }
    }
    .col {
      width: 160px;
      height: 30px;
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
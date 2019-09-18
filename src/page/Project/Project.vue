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

      <div class="logoList">
        <ul class="clearfix font18">
          <li v-for="(item, index) in projectList[currentSelect]" :key="index">
            <a-button type="primary" class="look-details" @click="gotodetails(item)">查看详情</a-button>
            <img
              v-lazy="require('../../assets/img/project-li-cover.png')"
              alt
              style="width:100%;height:100%;"
            />
            <span class="logoList text">{{ item.name }}</span>
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
      projectList: [],
      currentSelect: "all",
      pageForm: {
        start: 0, // 当前页码
        end: 9, // 每页条数
        totalPage: 0 // 总页数
      }
    };
  },
  mounted() {
    this.getAllProject();
  },
  methods: {
    getAllProject() {
      const start = this.pageForm.start;
      const end = this.pageForm.end;
      const type = this.currentSelect;
      caselist(start, end, type)
        .then(res => {
          console.log(res);
          this.projectList = res.data;

          // 一共多少页
          this.pageForm.totalPage = Math.ceil(
            res.data.length / this.pageForm.end
          );

          // 判断是否还有更多页
          if (this.pageForm.start >= this.pageForm.totalPage) {
            this.$message.warning("没有更多数据了！");
          }

          // 追加数据
          if (res.status === 200) {
            this.projectList = this.projectList.concat(res.data);
          }

          this.sortAllProject();
        })
        .catch(err => {});
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
      if (this.pageForm.start < this.pageForm.totalPage) {
        this.pageForm.start++;
        this.getAllProject();
      }
    },
    gotodetails(item) {
      this.$router.push({ name: "details", query: { name: item.name } });
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
    margin-top: 40px;
    .lookMore {
      .lookMore-btn {
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
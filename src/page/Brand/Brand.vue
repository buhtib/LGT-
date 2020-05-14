<!-- LGT创意-->
<template>
  <div class="brand">

    <div class="section">
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Brand",
  data() {
    return {
     
    };
  }
};
</script>
<style lang="less" scoped>
.brand {
  .brand-people {
    margin-top: 50px;
    .row {
      margin-bottom: 40px;
      .col {
        width: 20%;
        padding: 0 10px;
        .col_img {
          text-align: center;
        }
        .col-list {
          margin-top: 28px;
          .lineheight1 {
            color: #000000;
          }
          .col-list-line {
            width: 100%;
            height: 1px;
            margin: 8px 0 12px;
            background-color: #ccc;
          }
        }
      }
    }
  }
  .look-more_btns {
    .look-more_btn {
      box-sizing: border-box;
      width: 286px;
      height: 50px;
      &:first-of-type {
        margin-right: 42px;
      }
    }
  }
}
</style>

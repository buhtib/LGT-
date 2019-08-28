<!-- 公共头部  -->
<template>
    <div class="page-header" ref="container">
        <a-affix :offsetTop="0.00000001">

            <div class="section">
                <div class="page-header-intro d-flex justify-content-between">
                    <div class="page-header-intro_logo">
                        <img v-lazy="$imgUrl" alt="logo" class="img_cover" />
                    </div>
                    <ul
                        class="page-header-intro_area d-flex flex-column align-items-center justify-content-center"
                    >
                        <li>
                            <span class="line"></span>
                            <span class="txt">用设计塑造品牌价值</span>
                            <span class="line"></span>
                        </li>
                        <li>
                            邮箱：1019114350@qq.com &nbsp;&nbsp; &nbsp; &nbsp;
                            电话/微信：18219082540
                        </li>
                    </ul>
                </div>

                <div class="row align-items-center">
                    <router-link
                        class="col-xl r-link"
                        v-for="(tab, i) in navList"
                        :key="i"
                        :to="tab.path"
                        exact
                    >{{ tab.name }}</router-link>
                </div>
            </div>

        </a-affix>
    </div>
</template>

<script>
export default {
    name: "PageHeader",
    data() {
        return {
            navList: [
                { name: "首页", path: "/home" },
                { name: "LGT创意", path: "/brand" },
                { name: "服务范围", path: "/service" },
                { name: "LGT项目", path: "/project" },
                { name: "联系我们", path: "/linkus" }
            ],
        };
    }
};
</script>

<style lang="less" scoped>
.page-header {
    width: 100%;
    background-color: #eee;
    /deep/ .ant-affix {
        background-color: #eee;
    }
    .page-header-intro {
        height: 120px;
        .page-header-intro_logo {
            width: 30%;
            height: 100%;
        }
        .page-header-intro_area {
            width: 50%;
            height: 100%;

            > li {
                &:first-of-type {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    .line {
                        flex: 1;
                        height: 1px;
                        background-color: #666;
                    }
                    .txt {
                        margin: 0 8px;
                    }
                }
                &:last-of-type {
                    margin-top: 10px;
                    font-size: 12px;
                    font-weight: bold;
                }
            }
        }
    }

    .row {
        height: 50px;
        .col-xl {
            padding: 10px 5px;
            text-align: center;
        }
    }
}
</style>
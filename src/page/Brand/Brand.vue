<!-- LGT创意-->
<template>
    <div class="brand">
        <div class="brand-title d-flex justify-content-center align-items-center mt-2">（品牌创始人）</div>

        <div class="section">
            <div class="brand-people">
                <a-row
                    :gutter="180"
                    class="row font12"
                    v-for="(row, index) in peoples"
                    :key="index"
                >
                    <a-col
                        :span="8"
                        v-for="(col, index) in row"
                        :key="index"
                    >
                        <img
                            v-lazy="$imgUrl"
                            alt
                            class="img_cover"
                            style="height:200px;"
                        />
                        <div class="col-list">
                            <ul>
                                <li class="font20">
                                    {{col.name}}&nbsp;&nbsp;
                                    <span class="font16">{{col.job}}</span>
                                </li>
                                <li class="col-list-line"></li>
                                <li>
                                    <div>{{col.intro_text_row1}}</div>
                                    <div>{{col.intro_text_row2}}</div>
                                </li>
                            </ul>
                        </div>
                    </a-col>
                </a-row>
            </div>

            <div class="look-more_btns d-flex justify-content-center align-items-center">
                <a-button
                    class="look-more_btn font20 font-weight-bold mr-5"
                    size="large"
                    @click="$router.push('service')"
                >了解LGT品牌的服务内容</a-button>
                <a-button
                    class="look-more_btn font20 font-weight-bold"
                    size="large"
                    @click="$router.push('project')"
                >了解LGT品牌的服务案例</a-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Brand",
    data() {
        return {
            peoples: [
                {
                    col1: {
                        name: "汤基彬",
                        job: "项目主管",
                        intro_text_row1:
                            "曾参与各大行业的网站开发，有着丰富的经验开发知识。用自身的专业挑战事业的最颠峰。",
                        intro_text_row2: "LGT设计工作室创始人之一。"
                    },
                    col2: {
                        name: "卢广宗",
                        job: "开发者",
                        intro_text_row1:
                            "曾在OPPO公司参与多项开发的项目，是中国互联网的年轻一代开发者。",
                        intro_text_row2: "LGT设计工作室创始人之一。"
                    },
                    col3: {
                        name: "李嘉诚",
                        job: "开发者",
                        intro_text_row1:
                            "担任多家公司的项目负责人兼以及负责公司项目开发，也在各大行业中参与其开发。",
                        intro_text_row2: "LGT设计工作室创始人之一。"
                    }
                },
                {
                    col1: {
                        name: "汤少清",
                        job: "设计总监",
                        intro_text_row1:
                            "曾从事不同行业的设计工作，2016年开始参与内地的品牌设计业务。",
                        intro_text_row2: "LGT设计工作室创始人之一。"
                    },
                    col2: {
                        name: "叶国凤",
                        job: "品牌设计",
                        intro_text_row1:
                            "曾参与各大行业的品牌设计以及品牌定位升级，服务近百个品牌的项目。",
                        intro_text_row2: "LGT设计工作室创始人之一。"
                    },
                    col3: {
                        name: "汤少萍",
                        job: "HR负责人",
                        intro_text_row1:
                            "主要接待客户并解决客户的要求问题，品牌知识资深的HR，曾接待来自不同行业的客户。",
                        intro_text_row2: "LGT设计工作室创始人之一。"
                    }
                }
            ],
        };
    },
};
</script>
<style lang="less" scoped>
.brand {
    .brand-people {
        margin-top: 50px;
        .row {
            margin-bottom: 20px;
            .col-list {
                width: 80%;
                margin-top: 20px;
                .col-list-line {
                    width: 100%;
                    height: 1px;
                    margin: 8px 0;
                    background-color: #ccc;
                }
            }
        }
    }
    .look-more_btns {
        .look-more_btn {
            width: 24%;
            height: 50px;
        }
    }
}
</style>

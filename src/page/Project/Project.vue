<!-- LGT项目-->
<template>
    <div class="project">
        <div class="section">
            <div class="select-project font24">
                <a-row
                    type="flex"
                    justify="center"
                    v-for="(row, index) in projectList"
                    :key="index"
                    class="my-5"
                >
                    <a-col
                        :span="3"
                        v-for="(col, index) in row"
                        :key="index"
                        @click="changeSelectProjectAction(col.type)"
                        class="col p-2  mr-5 text-center"
                        :class="{active: currentSelect == col.type}"
                    >
                        {{col.name}}
                    </a-col>
                </a-row>
            </div>

            <div class="logoList">
                <a-row
                    class="mb-3 logo-row"
                    v-for="(item, i) in list1"
                    :key="i"
                    :gutter="16"
                >
                    <a-col
                        :span="6"
                        class="h-100 logo-col"
                    >{{ item.text1 }}</a-col>
                    <a-col
                        :span="6"
                        class="h-100 logo-col"
                    >{{ item.text2 }}</a-col>
                    <a-col
                        :span="6"
                        class="h-100 logo-col"
                    >{{ item.text3 }}</a-col>
                    <a-col
                        :span="6"
                        class="h-100 logo-col"
                    >{{ item.text4 }}</a-col>
                </a-row>

                <a-row
                    class="mb-3 logo-row"
                    v-for="(item, i) in list2"
                    :key="i"
                    :gutter="16"
                >
                    <a-col
                        :span="6"
                        class="h-100 logo-col"
                    >{{ item.text1 }}</a-col>
                    <a-col
                        :span="6"
                        class="h-100 logo-col"
                    >{{ item.text2 }}</a-col>
                    <a-col
                        :span="6"
                        class="h-100 logo-col"
                    >{{ item.text3 }}</a-col>
                    <a-col
                        :span="6"
                        class="h-100 logo-col"
                    >{{ item.text4 }}</a-col>
                </a-row>

                <a-row
                    class="mb-3 logo-row"
                    v-for="(item, i) in list3"
                    :key="i"
                    :gutter="16"
                >
                    <a-col
                        :span="6"
                        class="h-100 logo-col"
                    >{{ item.text1 }}</a-col>
                    <a-col
                        :span="6"
                        class="h-100 logo-col"
                    >{{ item.text2 }}</a-col>
                    <a-col
                        :span="6"
                        class="h-100 logo-col"
                    >{{ item.text3 }}</a-col>
                    <a-button
                        class="lookMore"
                        @click="lookMore"
                    >查看更多</a-button>
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
            projectList: [
                [
                    { name: "全部案例", type: "0" },
                    { name: "品牌VI设计", type: "1"},
                    { name: "APP开发", type: "2" },
                    { name: "海报设计", type: "3" },
                    { name: "LOGO设计", type: "4" }
                ],
                [
                    { name: "画册设计", type: "5" },
                    { name: "包装设计", type: "6" },
                    { name: "网站开发", type: "7" }
                ]
            ],
            currentSelect: 0,
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
            ]
        };
    },
    methods: {
        // isShow(val) {
        //     switch (val) {
        //         case "全部案例":
        //             break;
        //         case "品牌VI设计":
        //             break;
        //         case "APP开发":
        //             break;
        //         case "海报设计":
        //             break;
        //         case "LOGO设计":
        //             break;
        //         case "画册设计":
        //             break;
        //         case "包装设计":
        //             break;
        //         case "网站开发":
        //             break;
        //         case "包装设计":
        //             break;
        //     }
        // },
        changeSelectProjectAction(type) {
            this.currentSelect = type
        },
        lookMore() {}
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
            position: absolute;
            right: 0;
            bottom: 0;
            width: 200px;
            height: 50px;
        }
    }

    .select-project {
        // width: 80%;
        // margin: 0 auto;
        .col {
            cursor: pointer;
            &.active {
                background: rgb(201, 201, 201);
                font-weight: bold;
            }
        }
    }
}
</style>
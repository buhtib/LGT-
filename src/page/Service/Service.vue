<!-- 服务范围-->
<template>
    <div class="service">
        <div class="section">
            <div class="service-intro font20">
                <h1 class="font20 title">我们提供全方位胡品牌服务</h1>
                <div class="service-intro_text">坚持原创和品牌的服务理念，快速推出个性化的服务，才能更好的吸引客户，为客户创造价值，通过对市场的调查，了解品牌的特性、品牌的发展、网站开发等业务，只为提供客户最全面的方案！</div>
            </div>

            <div class="service-project border border-dark">
                <a-row
                    type="flex"
                    class=" row font30 font-weight-bold"
                    v-for="(row, index) in project"
                    :key="index"
                    :gutter="100"
                >
                    <a-col
                        :span="8"
                        class="my-4"
                        v-for="(col, index) in row"
                        :key="index"
                    >
                        <span>{{ col }}</span>
                    </a-col>
                </a-row>
            </div>

            <div class="service-design font18">
                <center-text :centerText="centerText" />

                <div class="d-flex justify-content-center align-items-center mt-4">品牌设计讲究的是设计思路，而不是将讲不清楚的品牌形象设计转成主观视觉的设计。</div>
                <div class="d-flex justify-content-center align-items-center mt-4">
                    <ul class="d-flex">
                        <li class="px-2 border-right border-dark">网站开发LOGO</li>
                        <li class="px-2 border-right border-dark">APP开发</li>
                        <li class="px-2 border-right border-dark">品牌VI设计</li>
                        <li class="px-2 border-right border-dark">包装设计</li>
                        <li class="px-2">设计</li>
                    </ul>
                </div>
                <div class="banner">
                    <img v-lazy="$imgUrl" alt="" class="img_cover">
                </div>
            </div>

            <div class="look-more_btns d-flex justify-content-center align-items-center mt-5">
                <a-button
                    class="look-more_btn font20 font-weight-bold mr-5"
                    size="large"
                    @click="$router.push('project')"
                >了解LGT品牌的项目</a-button>
                <a-button
                    class="look-more_btn font20 font-weight-bold"
                    size="large"
                    @click="$router.push('linkus')"
                >联系我们</a-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Service",
    data() {
        return {
            centerText: {
                header: "Creative Design",
                bottom: "创意设计"
            },
            project: [
                ["LOGO设计", "宣传册设计", "品牌VI手册设计"],
                ["名片设计", "展架设计", "小程序开发"],
                ["海报设计", "易拉宝设计", "网站开发"],
                ["画册设计", "包装设计", "APP开发"]
            ]
        };
    }
};
</script>

<style lang="less" scoped>
.service {
    margin-top: 100px;
    .title {
        margin-bottom: 10px;
        padding-left: 10px;
        border-left: 8px solid #ccc;
    }
    .service-intro_text {
        margin: 20px 0;
    }

    .service-project {
        padding: 0 160px;
    }

    .service-design {
        .banner {
            height: 300px;
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

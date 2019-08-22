<!--轮播组件-->
<!--文档参考-->

<!-- https://better-scroll.github.io/docs/zh-CN/plugins/slide.html#%E4%BD%BF%E7%94%A8 -->
<!-- https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-options.html#startx -->
<template>
    <div class="slide-banner">
        <div class="banner-wrapper">
            <div class="slide-banner-scroll" ref="slide">
                <div class="slide-banner-wrapper">
                    <div class="slide-item " v-for="(item, index) in pageList" :key="index">
                        <img :src="$imgUrl" alt="slide" class="img_cover" />
                    </div>
                </div>
            </div>
            <div class="docs-wrapper">
                <span
                    class="doc"
                    v-for="(item, index) in pageList"
                    :key="index"
                    :class="{'active': currentPageIndex === index}"
                    @click="goToPage(index)"
                ></span>
            </div>
        </div>
        <div class="btn-wrap">
            <div class="carousel-control-prev" @click="prePage">
                <span class="carousel-control-prev-icon"></span>
                <span class="sr-only">Previous</span>
            </div>
            <div class="carousel-control-next" @click="nextPage">
                <span class="carousel-control-next-icon"></span>
                <span class="sr-only">Next</span>
            </div>
        </div>
    </div>
</template>

<script>
//核心
import BScroll from "@better-scroll/core";
//轮播
import Slide from "@better-scroll/slide";
BScroll.use(Slide);

export default {
    //滚动间隔时间
    props: ["time"],
    data() {
        return {
            slide: null,
            //滚动到对应的 index
            currentPageIndex: 0,
            //循环播放的 timer
            playTimer: 0,
            //数据
            pageList: ["page 1", "page 2", "page 3"]
        };
    },
    mounted() {
        this.init();
    },
    beforeDestroy() {
        clearTimeout(this.playTimer);
        //销毁
        this.slide.destroy();
    },
    methods: {
        init() {
            clearTimeout(this.playTimer);
            this.slide = new BScroll(this.$refs.slide, {
                scrollX: true,
                scrollY: false,
                slide: {
                    loop: true,
                    //滚动到下一个的阀值
                    threshold: 200
                },
                useTransition: true,
                // 用来避免惯性动画带来的快速滚动时的闪烁问题
                momentum: false,
                // 当你设置了 slide.loop 为 true 时，bounce 值需要设置为 false，否则会在循环衔接的时候出现闪烁。
                bounce: false,
                stopPropagation: true,
                probeType: 2
            });

            this.slide.on("beforeScrollStart", () => {
                clearTimeout(this.playTimer);
            });
            this.slide.on("scrollEnd", () => {
                this.autoGoNext();
            });
            this.slide.on("slideWillChange", page => {
                this.currentPageIndex = page.pageX;
            });
            this.autoGoNext();
        },
        nextPage() {
            this.slide.next();
        },
        prePage() {
            this.slide.prev();
        },
        //设置自动轮播 及时间
        autoGoNext() {
            clearTimeout(this.playTimer);
            this.playTimer = setTimeout(() => {
                this.nextPage();
            }, this.time);
        },
        //跳转到指定页面
        goToPage(index) {
            clearTimeout(this.playTimer);
            this.slide.goToPage(index);
            this.autoGoNext();
        }
    }
};
</script>

<style lang="less" scoped>
.slide-banner {
    height: 100%;
    .banner-wrapper {
        position: relative;
        height: 100%;
        .slide-banner-scroll {
            height: 100%;
            overflow: hidden;
            .slide-banner-wrapper {
                height: 100%;
                white-space: nowrap;
                font-size: 0;
                .slide-item {
                    display: inline-block;
                    height: 100%;
                    width: 100%;
                    line-height: 100%;
                    text-align: center;
                    font-size: 26px;
                }
            }
        }
        .docs-wrapper {
            position: absolute;
            bottom: 4px;
            left: 50%;
            transform: translateX(-50%);
            .doc {
                display: inline-block;
                margin: 0 2px;
                width: 80px;
                height: 20px;
                border: 1px solid black;
                background: #fff;
                cursor: pointer;
                &.active {
                    background: #aaa;
                }
            }
        }
    }

    .btn-wrap {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        .carousel-control-prev,
        .carousel-control-next {
            cursor: pointer;
        }
    }
}
</style>
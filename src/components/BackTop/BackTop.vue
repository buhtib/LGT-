  <!--置顶组件  -->
<template>
    <div @click="scrollToTop" class="back-top">
        <div class="back-top-content" v-bind="o">
            <div class="back-top-icon">
                <img src="~@/assets/img/icon_totop.png" alt="top" class="img_cover" />
            </div>
        </div>
    </div>
</template>

<script>
//动画贝塞尔曲线设置
const easeInOutCubic = (t, b, c, d) => {
    const cc = c - b;
    t /= d / 2;
    if (t < 1) {
        return (cc / 2) * t * t * t + b;
    } else {
        return (cc / 2) * ((t -= 2) * t * t + 2) + b;
    }
};

function getDefaultTarget() {
    return window;
}

export default {
    name: "BackTop",
    props: {
        //距离顶部多少触发显示
        visibilityHeight: {
            type: Number,
            default: 1000
        }
    },
    data() {
        return {
            scrollEvent: null,
            o: {
                style: { opacity: 0 }
            }
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.scrollEvent = addEventListener("scroll", this.onscroll);
        });
    },
    beforeDestroy() {
        if (this.scrollEvent) {
            this.scrollEvent.removeEventListener("scroll", this.onscroll);
        }
    },
    methods: {
        //获取滚动距离
        getCurrentScrollTop() {
            const getTarget = this.target || getDefaultTarget;
            const targetNode = getTarget();

            if (targetNode === window) {
                return (
                    window.pageYOffset ||
                    document.body.scrollTop ||
                    document.documentElement.scrollTop
                );
            }
            return targetNode.scrollTop;
        },
        //置顶
        scrollToTop(e) {
            const scrollTop = this.getCurrentScrollTop();
            const startTime = Date.now();

            const frameFunc = () => {
                const timestamp = Date.now();
                const time = timestamp - startTime;

                this.setScrollTop(easeInOutCubic(time, scrollTop, 0, 450));
                if (time < 450) {
                    requestAnimationFrame(frameFunc);
                } else {
                    this.setScrollTop(0);
                }
            };
            requestAnimationFrame(frameFunc);
        },

        //设置距顶部的滚动距离
        setScrollTop(value) {
            const getTarget = this.target || getDefaultTarget;
            const targetNode = getTarget();

            if (targetNode === window) {
                document.body.scrollTop = value;
                document.documentElement.scrollTop = value;
            } else {
                targetNode.scrollTop = value;
            }
        },

        //监听滚动
        onscroll() {
            let Top = this.getCurrentScrollTop();

            if (Top > this.visibilityHeight) {
                this.o.style.opacity = 1;
            } else {
                this.o.style.opacity = 0;
            }
        }
    }
};
</script>

<style lang="less" scoped>
.back-top {
    position: fixed;
    right: 100px;
    bottom: 50px;
    height: 40px;
    width: 40px;
    margin: 0;
    padding: 0;
    line-height: 1.5;
    font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI",
        "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue",
        Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
        "Segoe UI Symbol";
    font-size: 14px;
    font-variant: tabular-nums;
    color: rgba(0, 0, 0, 0.65);
    box-sizing: border-box;
    list-style: none;
    z-index: 10;
    cursor: pointer;
}
.back-top-content {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.45);
    color: #fff;
    text-align: center;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    overflow: hidden;
}
.back-top-icon {
    margin: 5px auto;
    width: 30px;
    height: 30px;
}
</style>
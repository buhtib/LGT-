<!--轮播组件-->
<template>
    <div class="wrapper" ref="wrapper">
        <ul class="content">
            <li >

            </li>
        </ul>
    </div>
</template>

<script>
//核心
import BScroll from '@better-scroll/core'
//轮播
import Slide from '@better-scroll/slide'

export default {
    name:'Carousel',
    data() {
        return {
            
        }
    },
    mounted() {
        this.$nextTick(()=>{
            //使用轮播插件
            BScroll.use(Slide)
            //初始化
            let bs = new BScroll(this.$refs.wrapper, {
                startX: 0,
                startY: 0,
                scrollX: 'true' 
            })
        })
    }
};
</script>

<style lang="less" scoped>
    .wrapper {
        width: 100%;
        height: 500px;
        overflow: hidden;
        background-color: antiquewhite;
        .content {
            width: 10000px;
            height: 100px;
            background-color: red;
        }
    }
</style>
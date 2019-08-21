<!--轮播组件-->
<template>
    <div id="carouselExampleIndicators" class="carousel slide " data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img
                    class="d-block w-100 img_cover"
                    :src="$imgUrl"
                    alt="First slide"
                />
            </div>
            <div class="carousel-item">
                <img
                    class="d-block w-100 img_cover"
                    :src="$imgUrl"
                    alt="Second slide"
                />
            </div>
            <div class="carousel-item">
                <img
                    class="d-block w-100 img_cover"
                    :src="$imgUrl"
                    alt="Third slide"
                />
            </div>
        </div>
        <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
        >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
        >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>

<script>
export default {
    name:'Carousel',
    props:['interval'],
    mounted() {
        this.$nextTick(()=>{
            $('.carousel').carousel({
                //轮播切换时间
                interval: this.interval
            })
        })

        $('#myCarousel').on('slide.bs.carousel', function ( ...rest ) {
            console.log(rest)
        })
    }
};
</script>

<style lang="less" scoped>
.carousel {
    height: 100%;
    .carousel-inner, .carousel-item {
        height: 100%;
    }
}
</style>
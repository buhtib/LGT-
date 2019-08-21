<!-- 公共底部  -->
<template>
    <div class="page-footer">
        <div class="section d-flex">
            <div class="page-footer-left d-flex align-items-center">
                <div class="pic mr-5">
                    <img :src="$imgUrl" alt="hehe" class="img_cover" />
                </div>
                <ul class="contact ml-5">
                    <li>
                        <p>邮箱：1019114350@qq.com</p>
                    </li>
                    <li>
                        <p>电话：18219082540</p>
                    </li>
                    <li>
                        <p>地址：深圳市龙华区民治樟坑一区129栋</p>
                    </li>
                </ul>
            </div>

            <div class="page-footer-right d-flex align-items-center justify-content-around">
                <div class="row justify-content-center w-100">
                    <div class="col-4 d-flex flex-column align-items-center">
                        <div class="pic">
                            <img :src="$imgUrl" alt="hehe" class="img_cover" />
                        </div>
                        <span class="mt-1">资深品牌顾问</span>
                    </div>
                    <div class="col-4 d-flex flex-column align-items-center">
                        <div class="pic">
                            <img :src="$imgUrl" alt="hehe" class="img_cover" />
                        </div>
                        <span class="mt-1">LGT公众号</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PageFooter"
};
</script>

<style lang="less" scoped>
.page-footer {
    // box-sizing: content-box;
    height: 180px;
    margin-top: 50px;
    padding: 40px 0;
    background-color: #eee;
    .section {
        .page-footer-left {
            width: 60%;
            height: 100%;
            border-right: 1px solid black;
            .pic {
                width: 20%;
                height: 100%;
            }
        }
        .page-footer-right {
            width: 40%;
            font-size: 14px;
            .pic {
                width: 80px;
                height: 80px;
            }
        }
    }
}
</style>
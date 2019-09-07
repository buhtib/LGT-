/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)
    //进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
const NotFound = () =>
    import ( /* webpackChunkName: "page" */ '@/components/notFound.vue');


let routes = [{
        path: '/',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/components/BaseLayout.vue'),
        redirect: '/home',
        children: [{
                path: '/home',
                name: 'home',
                meta: {
                    title: '首页'
                },
                component: () =>
                    import ( /* webpackChunkName: "page" */ '@/page/Home/Home.vue')
            },
            {
                path: '/brand',
                name: 'brand',
                meta: {
                    title: 'LGT创意',
                    centerText: {
                        header: "LGT核心团队",
                        bottom: "品牌创始人"
                    }
                },
                component: () =>
                    import ( /* webpackChunkName: "page" */ '@/page/Brand/Brand.vue')
            },
            {
                path: '/service',
                name: 'service',
                meta: {
                    title: '服务范围',
                    centerText: {
                        header: "SERVICE SCOPE",
                        bottom: "服务范围"
                    }
                },
                component: () =>
                    import ( /* webpackChunkName: "page" */ '@/page/Service/Service.vue')
            },
            {
                path: '/project',
                name: 'project',
                meta: {
                    title: 'LGT项目',
                    centerText: {
                        header: "LGT PROJECT",
                        bottom: "LGT项目"
                    }
                },
                component: () =>
                    import ( /* webpackChunkName: "page" */ '@/page/Project/Project.vue'),

            },
            {

                path: "/details",
                name: "details",
                component: () =>
                    import ( /* webpackChunkName: "page" */ '@/page/Project/Details.vue')

            },
            {
                path: '/linkus',
                name: 'linkus',
                meta: {
                    title: '联系我们',
                    centerText: {
                        header: "CONTACT US",
                        bottom: "联系我们"
                    }
                },
                component: () =>
                    import ( /* webpackChunkName: "page" */ '@/page/LinkUs/LinkUs.vue')
            },
        ]
    },

    {
        name: '404',
        path: '/404',
        meta: {
            title: '404'
        },
        component: NotFound
    },
    {
        path: '*',
        redirect: '/404'
    }
]
const router = new Router({
    base: '/',
    mode: 'hash',
    routes
})

router.beforeEach((to, from, next) => {
    NProgress.start();
    //对网页 title 进行改变
    const title = to.meta && to.meta.title;
    if (title) {
        document.title = title;
    }
    next();
})


router.afterEach((to, from) => {
    //每次都置顶页面防止缓存 滚动距离
    Vue.prototype.$scrollTop(0)
    // 做一些额外处理，比如进度条的效果
    NProgress.done();
})

export default router;
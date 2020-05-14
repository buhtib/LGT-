/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)
    //进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
const NotFound = () =>
    import ( /* webpackChunkName: "page" */ '@/components/error/notFound');


let routes = [{
        path: '/',
        component: () =>
            import ( /* webpackChunkName: "page" */ '@/components/BaseLayout'),
        redirect: '/home',
        children: [{
                path: '/home',
                name: 'home',
                meta: {
                    title: '首页',
                    banner: 0
                },
                component: () =>
                    import ( /* webpackChunkName: "page" */ '@/page/Home/Home')
            },
            {
                path: '/brand',
                name: 'brand',
                meta: {
                    title: '应用方案',
                    // centerText: {
                    //     header: "INTERNET OF THINGS APPLICATION SCHEME",
                    //     bottom: "万物互联应用方案"
                    // },
                    banner: 1
                },
                component: () =>
                    import ( /* webpackChunkName: "page" */ '@/page/Brand/Brand')
            },
            {
                path: '/applets',
                name: 'applets',
                meta: {
                    title: '小程序',
                    // centerText: {
                    //     header: "applets",
                    //     bottom: "小程序"
                    // },
                    banner: 2
                },
                component: () =>
                    import ( /* webpackChunkName: "page" */ '@/page/applets/applets')
            },
            {
                path: '/project',
                name: 'project',
                meta: {
                    title: '经典项目',
                    // centerText: {
                    //     header: "ZNGL PROJECT",
                    //     bottom: "经典项目"
                    // },
                    banner: 3
                },
                component: () =>
                    import ( /* webpackChunkName: "page" */ '@/page/Project/Project'),

            },
            {
                path: '/linkus',
                name: 'linkus',
                meta: {
                    title: '联系我们',
                    centerText: {
                        header: "CONTACT US",
                        bottom: "联系我们"
                    },
                    banner: 1
                },
                component: () =>
                    import ( /* webpackChunkName: "page" */ '@/page/LinkUs/LinkUs')
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
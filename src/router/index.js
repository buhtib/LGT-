/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)
//进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
const NotFound = () =>
    import( /* webpackChunkName: "page" */ '@/components/notFound.vue');


let routes = [
    {
        path: '/',
        component: () => import( /* webpackChunkName: "page" */ '@/components/BaseLayout.vue'),
        redirect:'/home',
        children:[
            {
                path: '/home',
                name: 'home',
                component: () => import( /* webpackChunkName: "page" */ '@/page/Home/Home.vue')
            },
            {
                path: '/brand',
                name: 'brand',
                component: () => import( /* webpackChunkName: "page" */ '@/page/Brand/Brand.vue')
            },
            {
                path: '/service',
                name: 'service',
                component: () => import( /* webpackChunkName: "page" */ '@/page/Service/Service.vue')
            },
            {
                path: '/project',
                name: 'project',
                component: () => import( /* webpackChunkName: "page" */ '@/page/Project/Project.vue')
            },
            {
                path: '/linkus',
                name: 'linkUs',
                component: () => import( /* webpackChunkName: "page" */ '@/page/LinkUs/LinkUs.vue')
            },
        ]
    },
    
    {
        name: '404',
        path: '/404',
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
    next();
})


router.afterEach((to, from) => {
    // 做一些额外处理，比如进度条的效果
    NProgress.done();
})

export default router;

/**
 * 存放公共组件位置
 */
import PageHeader from '@/components/PageHeader/PageHeader'
import PageFooter from '@/components/PageFooter/PageFooter'


export default {
    install(Vue) {
        Vue.component('PageHeader',PageHeader)
        Vue.component('PageFooter',PageFooter)
    },
}
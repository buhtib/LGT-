/**
 * 存放公共组件位置
 */
import PageHeader from '@/components/PageHeader/PageHeader'
import PageFooter from '@/components/PageFooter/PageFooter'
import CenterText from '@/components/CenterText/CenterText'


export default {
    install(Vue) {
        Vue.component('PageHeader', PageHeader)
        Vue.component('PageFooter', PageFooter)
        Vue.component('CenterText', CenterText)
    },
}
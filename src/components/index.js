
import publicFn from '@/public'

/**
 * 存放公共组件位置
 */
import PageHeader from '@/components/PageHeader/PageHeader'
import PageFooter from '@/components/PageFooter/PageFooter'
import CenterText from '@/components/CenterText/CenterText'

//使用阿里图标库 的IconFont组件
import { Icon } from 'ant-design-vue';
import { scriptUrl } from '@/utils/utils';
const IconFont = Icon.createFromIconfontCN({
  scriptUrl
})


export default {
    install(Vue) {
        Vue.component('PageHeader', PageHeader)
        Vue.component('PageFooter', PageFooter)
        Vue.component('CenterText', CenterText)

        publicFn(Vue)
        //假的占位图地址  后面接上尺寸
        Vue.prototype.$imgUrl = 'http://placehold.it/1000x1000'
    },
}
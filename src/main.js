// 兼容ie polyfill
import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

/**
 * 挂载公共组件 及全局方法
 */
import commonComponents from '@/components'
Vue.use(commonComponents);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

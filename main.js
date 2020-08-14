import Vue from 'vue'
import App from './App'

// 引入全局组件分割线

import divider from './components/index/divider.vue'
Vue.component("divider",divider)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

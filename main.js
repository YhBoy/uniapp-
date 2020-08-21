import Vue from 'vue'
import App from './App'
import store from './store/index.js'

Vue.prototype.$store = store
// 引入全局组件分割线

import divider from './components/index/divider.vue'
Vue.component("divider",divider)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    store,
	...App
	
})
app.$mount()

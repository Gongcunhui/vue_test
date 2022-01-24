// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App'
import plugins from './components/plugins'
Vue.use(plugins)

// 关闭生产提示
Vue.config.productionTip = false
const vm = new Vue({
    render: h => h(App)
}).$mount('#app')
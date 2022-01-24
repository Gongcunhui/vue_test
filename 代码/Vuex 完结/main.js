// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App'
import store from './store'


// 关闭生产提示
Vue.config.productionTip = false
new Vue({
    render: h => h(App),
    store,
    beforeCreate() {
        Vue.prototype.$bus = this //全局事件总线
    },
}).$mount('#app')
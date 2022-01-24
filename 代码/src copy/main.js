// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 引入路由器
import router from './router'
// 关闭生产提示
Vue.config.productionTip = false
new Vue({
    render: h => h(App),
    router,
    beforeCreate() {
        Vue.prototype.$bus = this
    },
}).$mount('#app')
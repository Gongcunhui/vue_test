import Vue from 'vue'
import App from './App.vue'
//引入store
// import store from './store'

//引入VueRouter
import VueRouter from 'vue-router'
//引入router
import router from './router'
//关闭vue生产提示
Vue.config.productionTip = false
    //使用VueRouter
Vue.use(VueRouter)

//创建vm
const vm = new Vue({
    el: '#app',
    router,
    // store,
    render: h => h(App),
    /*  beforeCreate() {
         Vue.prototype.$bus = this //安装全局事件总线2222
     } */
})
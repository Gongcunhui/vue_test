import Vue from 'vue'
import App from './App.vue'
//引入store
import store from './store'

//关闭vue生产提示
Vue.config.productionTip = false
    //使用vuex插件：创建vm后 可以传入store配置项了(让所有的vc都有$store)


//安装全局事件总线111
// const demo = Vue.extend({})
// const d = new demo()
// Vue.prototype.x =d

//创建vm
const vm = new Vue({
    el: '#app',
    store,
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this //安装全局事件总线2222

    }
})
import Vue from 'vue'
import App from './App.vue'

//关闭vue生产提示
Vue.config.productionTip = false


//安装全局事件总线111
// const demo = Vue.extend({})
// const d = new demo()
// Vue.prototype.x =d

//创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    // beforeCreate() {
    //     Vue.prototype.$bus = this //安装全局事件总线2222
    // }
})
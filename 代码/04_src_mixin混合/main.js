import Vue from 'vue'
import App from './App.vue'
//----------------全局引入mixin
// import {mixin,mixin2} from '../mixin'
//关闭vue生产提示

Vue.config.productionTip = false
    //-------------------使用mixin
    //Vue.mixin(mixin)
    //Vue.mixin(mixin2)
    //创建vm
new Vue({
    el: '#app',
    render: h => h(App)
})
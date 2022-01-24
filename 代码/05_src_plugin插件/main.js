import Vue from 'vue'
import App from './App.vue'
import plugins from './plugins' //引入插件
//关闭vue生产提示
Vue.config.productionTip = false


//使用插件
Vue.use(plugins, 1, 2, 3)
    //创建vm
new Vue({
    el: '#app',
    render: h => h(App)
})
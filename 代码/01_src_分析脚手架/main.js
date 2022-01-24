/* 该文件是整个项目的入口文件 */
/*
关于不同版本的Vue:
            1.vue .js与vue.runtime.[xxx].js的区别: 
                (1) vue.js是完整版的Vue,包含:核心功能+模板解析器。
                (2) vue.runtime.xx.js是运行版的Vue,只包含:核心功能; 没有模板解析器。
            2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，
               需要使用render函数接收到的createElement函数去指定具体内容。 

*/

//引入vue （这里的vue是一个残却版的vue（不包含模板解析器） 所以里面没有template 所以需要使用render来将app.vue放入容器）
import Vue from 'vue'
import app from './app.vue'

Vue.config.productionTip = false
let a
new Vue({
    //将app放入容器
    render: h => h(app), //====>  render(creatElemen){return creatElement('h1','学习脚手架')} ,h是一个函数传入给render
}).$mount('#app')
// 该文件用于创建vuex中最为核心的store

//引入vue
import Vue from 'vue'
//引入vuex 和 使用vuex
import Vuex from 'vuex'
import personOptions from './personOptions'
import countOptions from './countOptions'
Vue.use(Vuex)

//求和相关相关配置

//准备actions：用于响应组件中的动作
//准备actions：用于操作书记（state）
//准备actions：用于用于存储数据
//准备getters
//创建store 并暴露store
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }
})
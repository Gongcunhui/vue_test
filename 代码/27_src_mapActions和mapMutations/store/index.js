// 该文件用于创建vuex中最为核心的store

//引入vue
import Vue from 'vue'
//引入vuex 和 使用vuex
import Vuex from 'vuex'
Vue.use(Vuex)
    //准备actions：用于响应组件中的动作
const actions = {
        // jia(miniStore, value) {
        //     console.log('actions中的jia被调用了');
        //     miniStore.commit('JIA', value)
        // },
        // jian(miniStore, value) {
        //     console.log('actions中的jian被调用了');
        //     miniStore.commit('JIAN', value)
        // },
        jiaOdd(miniStore, value) {
            console.log('context的jiaOdd被调用了');
            if (miniStore.state.sum % 2) {
                miniStore.commit('JIA', value)
            }
        },
        jiaWait(miniStore, value) {
            console.log('context的jiaWaite被调用了');
            setTimeout(() => {
                miniStore.commit('JIA', value)
            }, 2000);
        }
    }
    //准备actions：用于操作书记（state）
const mutations = {
        JIA(state, value) {
            console.log('mutations中的JIA被调用了');
            state.sum += value
        },
        JIAN(state, value) {
            console.log('mutations中的JIAN被调用了');
            state.sum -= value
        }
    }
    //准备actions：用于用于存储数据
const state = {
    sum: 0,
    school: '尚硅谷',
    subject: '前端'
}
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

//创建store 并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})
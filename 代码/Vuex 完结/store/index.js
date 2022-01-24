import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const testOptions = {
    namespaced: true,
    actions: {
        jia: function({ commit }, num) {
            commit('JIA', num)
            console.log(num);
        },
        jian: function({ commit }, num) {
            commit('JIAN', num)
            console.log(num);
        },
        jiaOdd: function(context, num) {
            if (context.state % 2) {
                context.commit('JIA', num)
            }
        },
        jiaWait: function({ commit }, num) {
            setTimeout(() => {
                commit('JIA', num)
            }, 2000);
        }
    },
    mutations: {
        JIA: function(state, num) {
            state.n += num
                // console.log(state.n);
        },
        JIAN: function(state, num) {
            state.n -= num
                // console.log(state.n);
        },
    },
    state: {
        n: 1,
        school: "尚硅谷",
        sub: '前端',
    },
    getters: {
        bigN(state) {
            return state.n * 10
        }
    }
}

const test2Options = {
        actions: {},
        mutations: {
            ADD(state, per) {
                state.personList.unshift(per)
            }
        },
        state: {
            personList: [{
                id: '001',
                name: '张三'
            }]
        },
        getters: {}
    }
    // 创建并暴露store
export default new Vuex.Store({
    modules: {
        testOptions,
        test2Options
    }
})
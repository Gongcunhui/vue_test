const countOptions = {
        namespaced: true,
        actions: {
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
        },
        mutations: {
            JIA(state, value) {
                console.log('mutations中的JIA被调用了');
                state.sum += value
            },
            JIAN(state, value) {
                console.log('mutations中的JIAN被调用了');
                state.sum -= value
            },
        },
        state: {
            sum: 0,
            school: '尚硅谷',
            subject: '前端',
        },
        getters: {
            bigSum(state) {
                return state.sum * 10
            }
        }
    }
    //向外暴露 countOptions
export default countOptions
import { nanoid } from "nanoid"
import axios from 'axios'
const personOptions = {
        namespaced: true,
        actions: {
            addperosn_wang(context, value) {
                if (value.name.indexOf('王') === 0) {
                    context.commit('ADD_PERSON', value)
                } else {
                    alert('添加的人不姓王！！')
                }
            },
            addperson_server(context) {
                axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                    response => {
                        context.commit('ADD_PERSON', { id: nanoid(), name: response.data })
                    },
                    error => {
                        alert(error.message)
                    }
                )
            }
        },
        mutations: {
            ADD_PERSON(state, value) {
                state.personList.unshift(value)
            }
        },
        state: {
            personList: [{
                id: "001",
                name: '张三'
            }]
        },
        getters: {
            firstPersonName(state) {
                return state.personList[0].name
            }
        }
    }
    //向外暴露 personOptions
export default personOptions
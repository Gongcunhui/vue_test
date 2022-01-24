// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App'

import { Button, Row, DatePicker } from 'element-ui'
Vue.use(Button.name, Button)
Vue.use(DatePicker.name, DatePicker)
Vue.use(Row.name, Row)


// 引入路由器

// 关闭生产提示
Vue.config.productionTip = false
new Vue({
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    },
}).$mount('#app')
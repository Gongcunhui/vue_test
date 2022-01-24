//该文件专门用于创建整个应用的路由器


//引入组件
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
//创建并暴露路由器
export default new VueRouter({
    routes: [{
            name: 'guanyu',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [{
                path: 'news',
                component: News
            }, {
                path: 'message',
                component: Message,
                children: [{
                    name: 'detail',
                    path: 'detail/:id/:title',
                    component: Detail,
                }]
            }]
        }
    ]
})
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
                    //路由的props第一种写法：值为对象,对象中的所有key-value都会传递给该路由组件
                    // props: { a: 1, b: 'hello' }

                    //路由的props第二种写法：值为布尔值，若布尔值为真，就会把该路由组件收到的params参数，
                    //以props形式传递给该路由组件
                    // props: true

                    //路由的props第三种写法：值为函数，该函数返回的对象中每一组key-value都通过props传递给该路由组件
                    props($route) {
                        return { id: $route.params.id, title: $route.params.title }
                    }
                }]
            }]
        }
    ]
})
import Home from '../pages/Home'
import About from '../pages/About'
import VueRouter from 'vue-router'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建一个路由器
const router = new VueRouter({
    mode: 'history',
    routes: [{
        name: 'about',
        path: '/about',
        component: About,
        meta: { title: "about" }
    }, {
        name: 'home',
        path: '/home',
        component: Home,
        meta: { title: "home" },
        children: [{
            name: 'news',
            path: 'news',
            component: News,
            meta: { isAuth: true, title: 'news' },
        }, {
            name: 'message',
            path: "message",
            component: Message,
            meta: { isAuth: true, title: 'message' },
            children: [{
                name: 'detail',
                path: 'detail/:id/:title',
                component: Detail,
                meta: { title: 'detail', isAuth: true },
                // 路由的props配置：一、值为对象，该对象的k-v都会以props的形式传递给当前路由组件 ，缺点是 死数据
                // props: { a: 1, b: 2 },
                //路由的props配置：二、值为布尔值，若布尔值为真，就会把组件收到的params参数传递给组件,缺点是只能传递params参数
                // props: true,
                //路由的props第三种写法：值为函数，该函数返回的对象中每一组key-value都通过props传递给该路由组件
                props($route) {
                    return { id: $route.params.id, title: $route.params.id }
                },

                // 局部前置路由守卫
                beforeEnter(to, from, next) {
                    if (to.meta.isAuth) {
                        if (localStorage.getItem('a') === 1) {
                            next()
                        } else {
                            alert('a的值不正确，无法查看！')
                        }
                    } else {
                        next()
                    }
                },
            }]
        }]
    }]
})

// 全局前置路由守卫
router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        if (localStorage.getItem('a') === '1') {
            next()
        } else {
            alert('a的值不正确，无法查看！')
        }
    } else {
        next()
    }
})

//全局后置路由守卫
router.afterEach((to, from) => {
    document.title = to.meta.title || '硅谷系统'
})
export default router
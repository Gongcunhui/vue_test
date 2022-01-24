//该文件专门用于创建整个应用的路由器


//引入组件
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
//创建并暴露路由器
const router = new VueRouter({
        routes: [{
                name: 'guanyu',
                path: '/about',
                component: About,
                meta: { title: '关于' }
            },
            {
                name: 'zhuye',
                path: '/home',
                meta: { title: '主页' },
                component: Home,
                children: [{
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' }
                }, {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },
                    children: [{
                        name: 'detail',
                        path: 'detail/:id/:title',
                        meta: { title: '详情' },
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
    //全局前置路由守卫  —— 初始化时调用一次，以及每次路由被切换之前被调用一次
    //to:跳去哪一个组件的route实例  from：从那个组件调过来  next():允许路由跳转
router.beforeEach((to, from, next) => {
        console.log('@@前置路由守卫');
        // document.title = to.meta.title || 'app组件'
        console.log(to, from);
        if (to.meta.isAuth) {
            if (localStorage.getItem('school') === 'atguigu1') {
                next()
            } else {
                alert('学校名不对，无权限查看，应该为atguigu1')
            }
        } else {
            next()
        }
    })
    //全局后置路由守卫  —— 初始化时调用一次，以及每次路由被切换之后被调用一次
router.afterEach((to, from) => {
    console.log('@@后置路由守卫');
    console.log(to, from);
    document.title = to.meta.title || 'app组件'
})
export default router
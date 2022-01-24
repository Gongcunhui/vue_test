1
## 2 关于不同版本的vue：
    1.vue .js与vue.runtime.[xxx].js的区别: 
        (1) vue.js是完整版的Vue,包含:核心功能+模板解析器。
        (2) vue.runtime.xx.js是运行版的Vue,只包含:核心功能; 没有模板解析器。
    2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，
    需要使用render函数接收到的createElement函数去指定具体内容

## 3 vue.config.js配置文件
   (1)使用 vue inspect > output.js可以查看到vue脚手架的默认配置
   (2)使用vue.config.js可以对脚手架进行个性化定制 详情见vue官网

## 4 ref属性
1.被用来给元索或子组件注册用信息(id的替代者)
2.应用在html标签上获取的是真实DOM元素，应用在组件标签上:是组件实例对象(vc)
3.使用方式:
   打标识: <h1 ref="xxx">innerText</h1> 或<Schoo1 ref="xxx" ></School> 
   获取: this.$refs.xxx


## 5 prop配置项
        功能:让:组件接收外部传过来的数据
        (1).传递数据:<Demo name=" xxx"/>
        (2).接收数据:
                第一种方式(只接收) : props:['name' ]
                第二种方式(限制类型) :props:{name : Number}
                第三种方式(限制类型、限制必要性、指定默认值) : props:{
                                                              name:type:String, //类型
                                                              required:false, //必要性
                                                              default:'老王'//默认值}
备注: props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告。 
      若业务需求确实需要修改,那么请复制props的内容到data中一份,然后去修改data中的数据。 例如：myAge：this.age




## 6 mixin混合（混入）
    功能:可以把个组件共用的配置提取成一个 混入对象使用方式:
    第一步定义混合，例如:
                    const mixin={
                        data(){....},
                        methods:{....}
                        mouted(){}
                    }
   第二步使用混入，例如:
       (1).全局混入: Vue.mixin(xxx)  (在main.js文件中)
       (2).局部混入: mixins:['xxx']  （在具体组件文件中）

## 7 plugin插件
功能:用于增强Vue
本质:包含instal1方法的一个对象，install的第一个参数是Vue, 第二个以后的参 数是插件使用者传递的数据。
定义插件:
    对象.install = function (Vue, options) {
                                Vue.filter(....)      // 1.添加全局过滤器
                                Vue.directive(....)  // 2.添加全局指令 
                                Vue.mixin(....)       //  3.配置全局混入(合) 
                                Vue.prototype.$myMethod = function () {...} // 4.添加实例方法
                                Vue.prototype.$myProperty = xxxx  // 4.添加实例属性
    }
使用插件: Vue . use()

## 8 scoped属性
（1）作用：让style样式在局部生效，防止冲突
（2）写法：style scoped>

## 9 总结TodoList案例
    1.组件化编码流程:
        (1).拆分静态组件:组件要按照功能点拆分，命名不要与html元素冲突。
        (2).实现动态组件:考虑好数据的存放位置，数据是一个组件在用， 还是一些组件在用:
                                1一个组件在用:放在组件自身即可。
                                2些组件在用:放在他们共同的父组件.上(状态提升)。(3).实现交互:从绑定事件开始。
    2. props适用于: .
        (1).父组件==>子组件通信
        (2).子组件==>父组件通信(要求父先给子一个函数)
    3.使用v-modeI时要切记: v-model绑定的值不能是props传过来的值，因为props是不可以修改的!
    4. props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。

## 10 webStorage
    1.存储内容大小一般支持5MB左右(不同浏览器可能还不一-样)
    2.浏览器端通过Window.sessionStorage和Window.localStorage属性来实现本地存储机制。
    3.相关API:
        1.xxxxStorage.setItem('key', 'value');
            该访法接受-个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。
        2.xxxxStorage . getItem( 'person');
            该方法接受-个键名作为参数,返回键名对应的值。
        3.xxxxStorage . removeItem('key');
            该方法接受一个键名作为参数, 并把该键名从存储中删除。
        4.xxxxStorage.clear()
            该方法会清空存储中的所有数据。
    4.备注:SessionStorage和LocalStorage的区别：
        1.SessionStorage存储的内容会随着浏览器窗口关闭而消失。
        2.LocalStorage存储的内容，需要手动清除才会消失。
        3.xxxxStorage .getItem(xxx)如果xxx对应的value获取不到，那么getltem的返回值是nill。 
        4. JSON.parse(null)的结果依然是null。

## 11 组件的自定义事件
    1.一种组件间通信的方式，适用于:子组件===>父组件
    2.使用场景: A是父组件, B是子组件，B想给A传数据，那么就要在A（父）中给B（子）绑定自定义事件(事件的回调在A中)。
    3.绑定自定义事件:
        1.第一种方式，在父组件中: <Demo @atguigu="test"/> 或| <Demo v-on:atguigu="test"/>
        2.第二种方式，在父组件中: <Demo ref=" demo"/>
                                export default{
                                    mounted(){
                                       this.$refs.xxx. $on(' atguigu' ,this .test)
                                }}
    3.若想让自定义事件只能触发一个次， 可以使用once修饰符,或$once方法。
    4.触发自定义事件: this. $emit( 'atguigu'，数据) 
    
    5.解绑自定义事件
          1:this. $off('atguigu')  :解绑一个自定义事件
          2:this. $off(['atguigu','atguigu','atguigu']) ：解绑多个自定义事件
          3:this.$off()  ：解绑全部自定义事件
    
    6.组件上也可以绑定原生DOM事件,需要使用 native 修饰符。
    7.注意:通过this.$refs.xxx.$on('atguigu',回调)绑定自定义事件时，回调要么配置在methods中,要么用箭头函数,否则this指向会出问题!4


## 12 全局事件总线($bus)
全局事件总线(GIpbalEventBus)
    1.种组件间通信的方式，适用于任意组件间通信。
    2.安装全局事件总线: new Vue({
                        ....
                        beforeCreate() {
                        Vue.prototype.$bus = this 
                        //安装全局事件总线，$bus就是当前应用的vm
                        },
                    })
    3.使用事件总线:
            1.接收数据（绑定自定义事件）: A组件想接收数据，则在A组件中给$bus绑定自定义事件,事件的回调留在A组件自身。
                (1) methods:{
                        demo(data){
                            //将接收的data供自己使用操作
                        },
                    mounted() {
                        this.$bus.$on('event',this.demo)
                    }
                (2)mounted() {
                        this.$bus.$on('event',(data)=>{
                            //将接收的data供自己使用操作
                        })
                    }
           2.提供数据（调用自定义事件）: this.$bus.$emit('event',data)

    4.最好在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件。
            beforeDestroy(){
                this.$bus.$off('event')
            }

## 13 消息订阅发布
    消息订阅与发布(pubsub) :一种组件间通信的方式，适用于任意组件间通信
    使用步骤:       
        1.安装pubsub: npm i pubsub-js
        2.引入: import pubsub from ° pubsub-js'
        3.接收数据: A组件想接收数据，则在A组件中订阅消息,订阅的回调留在A组件自身。 methods( ){
            demo(data){.....}
            },
        mounted() {
        this.pid = pubsub.subscribe('xxx'，this.demo) //订阅消息
        }
4.提供数据: pubsub.publish('xxx',数据)
5.最好在beforeDestroy钩子中，用PubSub.unsubscribe(pid)去取消订阅。


## 14 nextTick
nextTick
    1.语法: this.$nextTick(回调函数)
    2.作用:在下一-次DOM更新结束后执行其指定的回调。
    3.什么时候用:当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。

## 15 过度与动画
作用：在插入，更新或移除dom元素的时候，在合适的时候给元素添加类名

写法:
1.准各好祥式:
   ·元素迸入的祥式:xxx(v)-enter:进入的起点   xxx-enter-to进入的终点 xxx-enter-active：进入的过程
       
   ·元素高幵的祥式:xxx(v)-leave:离开的起点  xxx-leave-to离开的终点 xxx-leave-active：离开的过程
          
    注意：（xxx是name属性的值 没有name属性时xxx-就是v-）

2.使用< transition>包裏要辻度的元素，并配置name属性:  < transition name="xxx">
                                                        <  h1 v-show="isShow" >你好啊!< /h1>
                                                    < /transition〉

3.注:若有个元素需要辻度，則需要使用: < transition-group>, 且毎个元素都要指定key値。

## 16 插槽
1.作用:让父组件可以向子组件的指定位置插入html结构，也是一种组件间的通信的方式，适用于父组件==>子组件。
2.分类:默认插槽、具名插槽、作用域插槽
3.使用方式:
    1.默人插槽:
        父組件中·
            < Category> 
               < div>htm1结构< /div>
            < /Category>
        子组件中:
            <template>
                <div>
                    <!--定乂插槽-->
                    <slot>插槽默认内容...</slot>
                </div>
            </template>
    2.具名插槽: 
        父组件中:
            <Category>
                <template slot="center">
                    <div>htm1结构1</div>
                </template>
                <template v-slot:footer>
                    <div>htm1结构2</div>
                </template>
            </Category>
        子组件中：
            <template>
                <div>
                    <!--定乂插槽-->
                    <slot name='center'>插槽默认内容...</slot>
                    <slot name='footer'>插槽默认内容...</slot>
                </div>
            </template>
    3.作用域插槽
        1.理解：数据在子组件（插槽定义者）中，但根据数据生成的结构需要组件的使用者来决定。（game的数组在子组件，数据使用出来的结构在app父组件）
        2.具体编码：
        父组件中：
             <Category title="游戏">
                <template slot-scope='game'>  <!--   slot-scope='game'  ===   scope='game'    -->
                    <ul>
                        <li v-for="(item,index) in game.games" :key="index">{{item}}</li>
                    </ul>
                </template>
            </Category>
            <Category title="游戏">
                <template slot-scope='game'>
                    <ol>
                        <li v-for="(item,index) in game.games" :key="index">{{item}}</li>
                    </ol>
                    <h4>{{game}}</h4>  <!-- 传过来的数据是对象的形式-->
                </template>
            </Category>
        子组件中：
            <template>
                <div class="category">
                    <h3>{{title}}分类</h3>
                    <slot :games='games'></slot>    <!-- 作用域插槽 ：可以传数据给插槽的使用者（以对象的形式）-->
                </div>
            </template>
           


## 17 Vuex
    1.概念：在Vue中实现集中状态（数据）管理的一个插件，对Vue应用中多个组件的共享状态进行集中式的管理（读/写），也是组件间通信的一种方式，
          且适用在任何组件
    2.如何使用：多个组件需要共享数据时
    3.搭建vue环境：
        1.创建文件：src/store/index.js
            //引入vue
            import Vue from 'vue'
            //引入vuex 和 使用vuex
            import Vuex from 'vuex'
            Vue.use(Vuex)
            //准备actions：用于响应组件中的动作
            const actions = {}
            //准备actions：用于操作书记（state）
            const mutations = {}
            //准备actions：用于用于存储数据
            const state = {}
            //创建store 并暴露store
            export default new Vuex.Store({
                        actions,
                        mutations,
                        state,
            })
        2.在main.js中创建vm时传入store配置项
                import Vue from 'vue'
                import App from './App.vue'
                    //引入store
                import store from './store'
                    //创建vm
                const vm = new Vue({
                        el: '#app',
                        store,
                        render: h => h(App),
                        beforeCreate() {
                                Vue.prototype.$bus = this //安装全局事件总线2222
                        }
                })
        4.基本使用
            1.初始化数据，配置actions对象，mutations对象和state对象  详见24_src_vuex实现数字运算
            2.组件中读取vuex中的数据：this.$store.state.xxx
            3.组件中修改vuex的数据：一，this.$store.dispatch('actions中的方法名',数据名)
                                   二，this.$store.commit('mutations中的方法名',数据名)
                                   （备注：若没有网络请求和其他业务逻辑，可以跳过actions，即不写dispatch，直接编写commit去调用mutations中的方法）

## 18 四个map方法的使用

1.mapState方法：用于帮助我们映射state中的数据为计算属性
        //222.借助mapState生成计算属性，从state中读取数据（对象写法）
        ...mapState({sum:'sum',school:'school',subject:'subject'}),

        //222.借助mapState生成计算属性，从state中读取数据（数组写法）
        ...mapState(['sum','school','subject']), //sum school subject（名字必须一样）
                                                    既作为vc中的计算属性又作为store中state里面的数据

2.mapGetters方法：用于帮助我们映射getters中的数据为计算属性
        //222.借助mapGetteers生成计算属性，从getters中读取数据（对象写法）
        ...mapGetters({bigSum:'bigSum'}), //对象写法
        //222.借助mapGetters生成计算属性，从getters中读取数据（数组写法）
        ...mapGetters(['bigSum'])

3.mapActions方法：用于帮助我们生成与actions对话的方法，即包括：$store.dispatch('方法名',数据名)
        //借助mapActions生成对应的方法，方法中会自己调用dispatch去联系actions（对象写法）
        ...mapActions({oddAdd:'jiaOdd',waitAdd:'jiaWait'}),
        ...mapActions(['jiaOdd','jiaWait']),     //(数组写法) vc中的方法和actions中的方法名一样时
        
4.mapMutations方法：用于帮助我们生成与mutations对话的方法，即包括：$store.commmit('方法名',数据名)
        //借助mapMutations生成对应的方法，方法中会自己调用commit去联系mutations（对象写法）
        ...mapMutations({add:'JIA',decrement:'JIAN'}),
        ...mapMutations(['JIA','JIAN']),//（数组写法）  //vc中的方法和muations中的方法名一样时

## 19 vuex模块化+命名空间（namespace）
1.目的:让代码更好维护，让多种数据分类更加明确。
2.修改store.js（store下的index.js）：
                    //1.根据功能分类
                    const countAbout = {
                        namespaced:true,//开启命名空间
                        state:{x:1},
                        mutations: { . .. }，
                        actions: { ... }
                        getters: {
                            bigSum(state){
                                return state.sum * 10
                        }
                    }
                    const personAboutpersonAbout = {
                        namespaced:true,//开启命名空间
                        state:{ ... },
                        mutations: { ... }，
                        actions: { ... }
                    }

                    //2.注册
                    const store = new Vuex.Store({
                        modules: {
                            countAbout：countAbout,
                            personAbout：personAbout
                        }
                    })

3.开启命名空向后，组件中读取state数据:
//方式一:（利用vc中computed）自己直接读取： this.$store.state.personAbout.list

//方式二·借助mapStatei读取.
import {mapState} from 'vuex'
...mapState('countAbout' ,['sum', 'school' ,'subject']),

4.开启命名空向后，组件中读取getters数据:
//方式一·自己直接读取 ：this.$store.getters['personAbout/firstPersonName']

//方式二:借助mapGetters读取:
先引入
...mapGetters('countAbobt',['bigSum'])

5.幵后命名空向后，组件中凋用dispatch
//方式一:自己直接dispatch：this.$store.dispatch('personAbout/addPersonWang' ,personObj)

//方式二·借助mapActions:
...mapActions('countAbout' , {incrementOdd: 'jiaOdd' , incrementWait: 'jiaWait'})

6.幵店命名空向后,组件中凋用commit

//方式一:自己直接commit  ：this.$store.commit(' personAbout/ADD_ PERSON' ,person)
//方式二:借助mapMutations: 
...mapMutations('personAbout',{addperosn_wang:'ADD_ PERSON'})

## 20 vue-router
路由：
    1.理解：一个路由（route）就是一组隐射关系（key-value），多个路由需要路由器（router）进行管理
    2.key是路径 value是组件
基本使用
        1.安装vue-router,命令: npm i vue-router
        2.应用插件: 1.import VueRouter from 'vue-router'  2. Vue.use(VueRouter)
        3.编写router配置项:
            //引|入VueRouter
            import VueRouter from 'vue-router'
            //引入组件
            import About from '../components/About'
            import Home from '../components/Home'
            //创建router实例对象，去管理一组一组的路由规则 
            const router = new VueRouter({
                                    routes :[{
                                        path:' /about', 
                                        component : About},
                                            {
                                        path:' /home', 
                                        component :Home}
                                         ]
                                       })

        3.暴露router
        export default router
    
        4.实现切换(active-class可配置高亮样式)
        <router-link active-class=" active" to="/about" >About</ router- link>
        5.指定展示位置
        <router-view>/router-view>

## 路由的几个注意点
1.路由组件通常存放在pages文件夹，一般组件通常存放在 components文件夹。
2.通过切换 隐藏了的路由组件,默认是被销毁掉的，需要的时候再去挂载。
3.每个组件都有自己的$route属性，里面存储着自己的路由信息。
4.整个应用只有一个router, 可以通过组件的$router属性获取到。

## 21 多级（嵌套）路由
        1.配置路由规则，使用children配置项:
                  routes:[{
                        path: '/about', 
                        component : About,
                        },
                        {
                        path: ' /home ',
                        component : Home ,
                        children:[ //通过children配置子级路由
                            {
                                path: 'news', //此处一定不要写: /news 
                                component : News
                            }
                            {
                                path: 'message',//此处一定不要写: /message
                                component :Message
                            }]
                      }]
        2. 跳转（要写完整路径）:（/父路由path/子路由path）
                    <router-link to="/home/news">News</router-link>
                    <router-link to="/home/messages">Messags</router-link>

## 22 路由的query参数
4.路由的query参数
1.传递参数
    <!--跳转并携带query参数，to的字符串写法1-->
    <router-link :to="`/home/message/detail?id=${m.id}&title=${m.tiile}`" >跳转</router -link>
    <!--跳转并携带query参数，to的对象写法2-->
    <router-link
        :to="{
        path: ' /home/message/detail',
        query:{
            id:666,
            title:'你好啊'
        }>
    跳转</router- link>

2.接收参数:
    $route.query.id
    $route.query.title


## 23 命名路由

    1.作用:可以简化路由的跳转。
    2.如何使用
        1.给路由命名:
        routes: {
            path: ' /demo ' ,
            component : Demo,
            children:[{                        
                        path:'test',
                        component: Test, 
                        children: [{
                                    name: 'hello' //给路由命名 
                                    path: 'welcome',
                                    component :Hello, 
                        }]
            }]
        }
        2.简化跳转：
                  简化前：
                  <router-link to="/demo/test/welcome"> 跳转 </router-link>
                  简化后：
                  <router-link :to="{name:'hello'}"> 跳转 </router-link>
                  简化后传query参数写法：
                  <router-link :to="{
                      name:'hello',  //不配name：path:'/demo/test/welcome'
                      query:{
                          id:'001',
                          title:'消息001'
                      }
                  }"> 


## 24 路由的params参数
1.配置路由，声明接收params参数 
    routes: [{
                path: 'message',
                component: Message,
                children: [{
                    name: 'detail',
                    path: 'detail/:id/:title',  //这里必须使用:占位符接受params参数
                    component: Detail,
                }]
            }]
2.传递参数：
    <!-- 跳转路由并携带params参数，to的字符串写法 -->
        <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>
    <!-- 跳转路由并携带params参数，to的对象写法(必须使用命名路由写法) -->
            <router-link :to="{
              name:'detail',  //这里必须使用name  不能使用path
              params:{
                id:m.id,
                title:m.title
              }
            }">
            {{m.title}}
            </router-link>
3.接受参数：
    $route.params.id
    $route.params.xxx 


  特别注意：路由携带params参数时,若使用to的对象写法，则不能使用path配置项，只能使用name配置（路由命名）

## 25 路由的props配置
作用：让路由组件收到参数更方便
                {
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
            }   

## 26 <router-link replace>的replace属性 
 <router-link>的replace属性
1.作用:控制路由跳转时操作浏览器历史记录的模式
2.浏览器的历史记录有两种写入方式:分别为push和replace，push是追加历史记录，replace是替换当前记录
3.路由跳转时候，默认为push
4..如何开启replace模式: <router-link replace .....</router-link>



## 27 编程式路由导航
1.作用:不借助<router-link>实现路由跳转，让路由跳转更加灵活
2.具体编码：
   //router的几个API：push,replace
    methods: {
      pushShow(m){
        // console.log(this.$router);
        this.$router.push({
          name:'detail',
              params:{
                id:m.id,
                title:m.title
              }
        })
      },
      replaceShow(m){
        this.$router.replace({
          name:'detail',
              params:{
                id:m.id,
                title:m.title
              }
        })
      }
    },

this.$router.back()后退
this.$router.forward()前进
this.$router.go(3)  //可前进可后退  （正数为前进，负数为后退）

## 28 缓存路由组件：
            <keep-alive :include="['News','Message']">  <!--include="News"指的是组件名   -->
            <router-view></router-view>
            </keep-alive>


## 29 2个新的生命周期钩子（activated和deactivated）
  1.activated  ：路由组件激活时 调用
  2.deactivated ：路由组件被销毁时  调用

## 30 路由守卫---全局路由守卫(beforeEach和afterEach)
const router = new VueRouter({
    routes:[{
        ....
    }]
})
//全局前置路由守卫(beforeEach)  —— 初始化时调用一次，以及每次路由被切换之前被调用一次

    //to:跳去哪一个组件的route实例  from：从那个组件调过来  next():允许路由跳转

/* router.beforeEach((to, from, next) => {
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
        }) */

//全局后置路由守卫(afterEach)  —— 初始化时调用一次，以及每次路由被切换之后被调用一次

router.afterEach((to, from) => {
    console.log('@@后置路由守卫');
    console.log(to, from);
    document.title = to.meta.title || 'app组件'
})
export defalut router

## 31 路由守卫---独享（局部）路由守卫（beforeEnter）
   注意：独享（局部）路由守卫 ：只有前置守卫
   代码实现：
               {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                    //@@独享路由守卫
                    beforeEnter(to, from, next) {
                        console.log('@@独享路由守卫');
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

                    }
                }

## 32 组件内路由守卫
//进入守卫，通过路由规则(必须)，进入该组件时被调用
beforeRouteEnter (to, from, next) {
    },
//离开守卫，通过路由规则（必须），离开该组件时被调用
beforeRouteLeave (to, from, next) {
    },

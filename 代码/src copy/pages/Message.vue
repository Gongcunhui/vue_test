<template>
   <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
            <!-- 路由跳转并携带query参数：to的模板字符串写法 -->
                <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
            <!-- 路由跳转并携带query参数：to的对象写法 -->
                 <!-- <router-link :to="{
                     path:'/home/message/detail',
                     query:{
                         id:m.id,
                         title:m.title
                     }
                 }">{{m.title}}</router-link>&nbsp;&nbsp; -->

                 <!-- 路由跳转并携带params参数：to的模板字符串写法 -->
                 <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

                 <!-- 路由跳转并携带params参数：to的对象写法(只能使用name跳转) -->
                 <router-link :to="{
                     name:'detail',   //必须使用命名路由
                     params:{
                         id:m.id,
                         title:m.title
                     }
                 }">{{m.title}}</router-link>
                 <button @click="pushShow(m)">push查看</button>
                 <button @click="replaceShow(m)">replace查看</button>
            </li>
        </ul>
        <hr/>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:"Message",
    data() {
        return {
            messageList:[
                { id:'001',title:'message1'},
                { id:'002',title:'message2'},
                { id:'003',title:'message3'},
            ]
        }
    },
    methods: {
        pushShow(m){
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
}
</script>

<style>

</style>
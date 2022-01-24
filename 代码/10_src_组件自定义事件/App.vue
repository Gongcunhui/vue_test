<template>
<div class="app">
    <h1>{{msg}},{{name}}</h1>
    <!-- 通过父组件给子组件传递函数 的props实现：子给父传递数据 -->
    <school :getSchoolName="getSchoolName"/>

    <!-- 1111通过父组件给子组件绑定一个自定义事实现：子给父传递数据（第一种写法，使用@或v-on）  -->
    <!-- <student @atguigu='getStudentName' @atguigu2='ab'/> -->

    <!-- 222通过父组件给子组件绑定一个自定义事实现：子给父传递数据（第二种写法，使用ref）  -->
    <student ref="student"/> 
    <!-- @click.native   native修饰符：保证事件是内置事件 不是自定义事件  -->

</div>

</template>

<script>
import Student from './components/Student'
import School from './components/School'

export default {
    name:'App',
    components:{Student,School},
    data() {
        return {
            msg:"你好啊",
            name:''
        }
    },
    methods:{
        getSchoolName(name){
            console.log('@@app收到了school的name',name);
        },
        getStudentName(name,...params){
            console.log('@@app收到了student的name',name,params);
            this.name=name
        },
        ab(){
            console.log("atguigu2事件");
        }
    },
    // （第二种写法，使用ref）
    mounted() {
           // this.$refs.student('atguigu',this.getStudentName)  //绑定自定义事件
             this.$refs.student.$once('atguigu',this.getStudentName) //绑定自定义事件（只用一次）
    },
}
</script>

<style>
.app{
    background-color: grey;
    padding: 5px;
}
</style>

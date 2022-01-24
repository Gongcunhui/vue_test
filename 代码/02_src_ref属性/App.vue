<template>
<div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom" ref="btn">点我输出上方的dom元素</button>
    <school ref="sch"/>
    <school id="sch2"/>
</div>
 
</template>

<script>
import School from './components/School'
export default {
    name:'App',
    data(){
        return {
            msg:'欢迎来到尚硅谷学习'
        }
    },
    components: { School },
    methods: {
        showDom(){
            //console.log(document.querySelector('.title');
            console.log(this.$refs.title);  //获取的是真是dom元素
            console.log(this.$refs.btn); //获取的是真是dom元素
            console.log(this.$refs.sch);  //获取的是school组件的实例对象（vc）
            console.log(document.querySelector('#sch2'));  //获取的是真实dom元素
        }
    },
}
</script>

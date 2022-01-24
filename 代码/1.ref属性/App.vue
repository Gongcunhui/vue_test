<template>
    <!-- ref属性 -->
  <div>
      <h1 v-text="msg" ref="title"></h1>
      <button @click="showDom">点击输出上方dom元素</button>
      <School ref="school"></School>  
  </div>
</template>

<script>
// 引入School组件
import School from './components/School.vue'
export default {
    name:'App',
    components:{School},
    data() {
        return {
            msg:'欢迎学习vue'
        }
    },
    methods:{
        showDom(){
            console.log(this.$refs.school.name);
        }
    }
}
</script>

<style>

</style>
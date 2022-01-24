<template>
  <div id="root">
    <h1>你好啊！！！！{{studentName}}</h1>
    <!-- 获取子组件的数据：props -->
    <School :getName="getName"></School>
    <!-- 获取子组件的数据：自定义事件(1：直接绑定  2：ref绑定) -->
    <!-- <Student @getName="getName"></Student> -->
     <Student ref="student" @click.native="show"></Student>
  </div>
</template>

<script>
// 引入Student组件
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
    name:'App',
    components:{Student,School},
    data() {
      return {
        studentName:''
      }
    },
    methods: {
      getName(name){
      this.studentName = name
      },
      show(){
        console.log(123);
      }
    },
    mounted(){
      this.$refs.student.$once('getName',this.getName)
    }
}
</script>

<style scoped>
#root{
  padding: 10px;
  height: 400px;
  background-color: grey;
}
</style>

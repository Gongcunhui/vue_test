<template>
  <div class="student">
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <button @click="sendStudentName">把学生姓名给school组件</button>
  </div>
</template>
<script>
import pubsub from 'pubsub-js'
export default {
    name:'Student',
    data(){
        return {
            name:'李四四',
            sex:"女"
        }
    },
    methods: {
      sendStudentName(){
        //触发$bus的事件
        // this.$bus.$emit('hello',this.name)
        //发布消息
        pubsub.publish('hello',666)
      }
    },
}
</script>

<style lang="less" scoped>
.student{
  background-color: blue;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
<template>
  <div>
    <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="addTodo"/>
  </div>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'myHeader',
    props:['receive'],
    data() {
      return {
        title:''
      }
    },
    methods:{
      addTodo(){
        // 将输入框的内容保证成一个todo
        const todoObj = {id:nanoid(),title:this.title,done:false}
        // 将todo加入todos
        this.receive(todoObj)
        // 添加后清除input框
        this.title=''
      },
    }
}
</script>

<style scoped>
    /*header*/
.todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}
.todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
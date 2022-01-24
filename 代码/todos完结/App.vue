<template>
  <div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <myHeader @receive="receive"></myHeader>
      <Todos :todos='todos' ref="todos"></Todos>
      <myFooter :todos='todos' @checkTodoAll="checkTodoAll" @clearAllTodo="clearAllTodo"></myFooter>
    </div>
  </div>
</div>
</template>

<script>
// 引入Student组件

import myHeader from './components/myHeader.vue'
import myFooter from './components/myFooter.vue'
import Todos from './components/Todos.vue'
import pubsub from 'pubsub-js'

export default {
    name:'App',
    components:{myHeader,myFooter,Todos},
    data() {
      return {
        todos:JSON.parse(localStorage.getItem('todos')) || []
      }
    },
    mounted(){
      this.$bus.$on('checkTodo',this.checkTodo)
      // this.$bus.$on('deleteTodo',this.deleteTodo)
      this.pid = pubsub.subscribe('deleteTodo',this.deleteTodo)
      this.$bus.$on('updateTodo',this.updateTodo)
    },
    methods:{
      receive(todoObj){
        this.todos.unshift(todoObj)
      },
      // 勾选取反
      checkTodo(id){
        this.todos.forEach(todo=>{
          if(todo.id===id)todo.done=!todo.done
        })
      },
      // 删除 一件事
      deleteTodo(name,id){
        console.log(name,id);
        this.todos= this.todos.filter(todo=>todo.id!=id)
      },
      // 跟随全选框的选中情况
      checkTodoAll(done){
        this.todos.forEach(todo=>todo.done = done)
      },
      // 清除已完成的任务
      clearAllTodo(){
        this.todos = this.todos.filter(todo=>!todo.done)
      },
      // 更新的回调
      updateTodo(id,title){
        this.todos.forEach(todo=>{
          if(todo.id == id){
            todo.title = title
          }
        })
      }
    },
    watch:{
      todos:{
        deep:true,
        handler(value){
          localStorage.setItem('todos',JSON.stringify(value))
        }
      }
    },
    beforeDestroy(){
        this.$bus.$off(['checkTodo','deleteTodo','updateTodo'])
        pubsub.unsubscribe(pid)
    }
}
</script>

<style>
/*base*/
    body {
      background: #fff;
    }
    .btn {
      display: inline-block;
      padding: 4px 12px;
      margin-bottom: 0;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
    }
    .btn-danger {
      color: #fff;
      background-color: #da4f49;
      border: 1px solid #bd362f;
    }
    .btn-edit{
      color: #fff;
      background-color: skyblue;
      border: 1px solid #3a302f;
      margin-right: 5px;
    }
    .btn-danger:hover {
      color: #fff;
      background-color: #bd362f;
    }
    .btn:focus {
      outline: none;
    }
    .todo-container {
      width: 600px;
      margin: 0 auto;
    }
    .todo-container .todo-wrap {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
</style>
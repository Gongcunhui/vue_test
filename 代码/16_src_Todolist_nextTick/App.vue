<template>
<div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
     <userHeader @addTodo="addTodo"/>
     <userList :todos="todos"/>
     <userFooter :todos="todos" @checkAlltodo="checkAlltodo" @clearTodo="clearTodo"/>
    </div>
  </div>
</div>
</template>

<script>
import pubsub from 'pubsub-js'
import userList from './components/userList.vue'
import userHeader from './components/userHeader.vue'
import userFooter from './components/userFooter.vue'

export default {
    name:'App',
    components:{userList,userHeader,userFooter},
     data() {
        return {
            todos:JSON.parse(localStorage.getItem("todos")) || []  //读取本地存储
        }
    },
    methods:{
        addTodo(todoObj){
            // console.log('我是app组件 我收到了数据');
            this.todos.unshift(todoObj)
        },
        //勾选or取消勾选一个todo
        checkTodo(id){
            this.todos.forEach((todo)=>{
                if(todo.id===id) todo.done=!todo.done
            })
        },
        updateTodo(id,title){
            this.todos.forEach((todo)=>{
                if(todo.id===id) todo.title=title
            })
        },
        //删除一个todo
        deleteTodo(msgName,id){
            this.todos = this.todos.filter((todo)=>{
                return todo.id !== id
            })
            console.log(msgName);
        },
        //全选or取消全选
        checkAlltodo(done){
            this.todos.forEach((todo)=>{
                todo.done=done
            })
        },
        //清除已选完成
        clearTodo(){
            this.todos=this.todos.filter((todo)=>{
                return todo.done ===false
            })
        }
    },
    watch:{
        todos:{
            deep:true,
            handler(val){
                 localStorage.setItem('todos',JSON.stringify(val))  //保存到本地存储
            }
           
        }
    },
    mounted() {
        //全局事件总线bus绑定事件
       this.$bus.$on('checkTodo',this.checkTodo)
      
       this.pid= pubsub.subscribe('deleteTodo',this.deleteTodo)
       this.pid2=pubsub.subscribe('updateTodo',this.updateTodo)
    },
    beforeDestroy(){
        this.$bus.$off(['checkTodo','deleteTode'])
        pubsub.unsubcribe(this.pid,this.pid2)
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
.btn-edit {
    color: #fff;
    background-color: rgb(116, 116, 145);
    border: 1px solid #bd362f;
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
<template>
   <div class="todo-footer" v-show="todosLength">
        <label>
          <input type="checkbox" v-model='isAll'/>
        </label>
        <span>
          <span>已完成{{doneNum}}</span> / 全部{{todosLength}}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
      </div>
</template>

<script>
export default {
    name:'userFooter',
    props:['todos'],
    computed: {
      doneNum(){
         let i =0
         this.todos.forEach((todo)=>{
           if(todo.done)i++
         })
         return i
      },
      todosLength(){
        return this.todos.length
      },
      isAll:{
        get(){
           return this.doneNum === this.todosLength && this.todosLength > 0
          },
        set(value){
          // this.checkAlltodo(value)  //传函数版本
          this.$emit('checkAlltodo',value)  //自定义事件版本
          }
      }
    },
    methods: {
      clearAll(){
        // this.clearAll()  //传函数版本
        this.$emit('clearTodo')  //自定义事件版本
      }
    },
}
</script>

<style scoped>
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
    }
.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    }
.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
    }
.todo-footer button {
    float: right;
    margin-top: 5px;
    }
</style>
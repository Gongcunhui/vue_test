<template>
  <li>
    <label>
        <input 
        type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/> 
        <!-- <input type="checkbox" v-model="todo.done"> --> 
        <!-- 如上代码也可以实现 多选框的勾选情况功能 当是prop接受的值被修改了
        （不会报错，done在对象里面 vue检测不到（1obj的地址值 和 2变量的数据值改变 vue才能检查到）） 不太推荐-->
       
        <span v-show="!todo.isEdit">{{todo.title}}</span>
        <input type="text" 
        v-show="todo.isEdit" 
        :value="todo.title" 
        @blur="handlebulr(todo,$event)" 
        ref="inputTitle">
    </label>
    <button class="btn btn-danger" @click="deleteTitle(todo.id)">删除</button>
    <button class="btn btn-edit" v-show="!todo.isEdit" @click="handleEdit(todo)">编辑</button>
 </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'userItem',
    //声明接收todo对象
    props:['todo'],
    methods: {
        handleCheck(id){
            //让checkbox多选框 勾选情况
            // console.log(1);
            this.$bus.$emit('checkTodo',id)
        },
        //删除
        deleteTitle(id){
            if(confirm('确定删除吗？'))
            //发布消息
            pubsub.publish("deleteTodo",id)
        },
        //编辑
        handleEdit(todo){
            if(todo.hasOwnProperty('isEdit')) {
                todo.isEdit=true
            }
            else{
                this.$set(todo,'isEdit',true)
                }
            //这里input还没渲染出来 focus不会生效 所以使用nextTick
            this.$$nextTick(()=>{
                this.$refs.inputTitle.focus()
            })
        },
        //失去焦点
        handlebulr(todo,e){
            todo.isEdit=false
            if(!e.target.value.trim()) return alert('此处不能为空！')
            pubsub.publish('updateTodo',todo.id,e.target.value)
        }
    },
}
</script>

<style scoped>
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
    }
li label {
    float: left;
    cursor: pointer;
    }
li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
    }
li button {
    float: right;
    display: none;
    margin-top: 3px;
    }
li:before {
    content: initial;
    }
li:last-child {
    border-bottom: none;
    }
li:hover{
    background-color: pink;

}
li:hover button{
    display: block;    
}
</style>
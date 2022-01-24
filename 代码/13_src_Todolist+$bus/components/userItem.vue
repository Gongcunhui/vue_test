<template>
  <li>
    <label>
        <input 
        type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/> 
        <!-- <input type="checkbox" v-model="todo.done"> --> 
        <!-- 如上代码也可以实现 多选框的勾选情况功能 当是prop接受的值被修改了
        （不会报错，done在对象里面 vue检测不到（1obj的地址值 和 2变量的数据值改变 vue才能检查到）） 不太推荐-->
       
        <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="deleteTitle(todo.id)">删除</button>
 </li>
</template>

<script>
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
        deleteTitle(id){
            if(confirm('确定删除吗？'))
            this.$bus.$emit('deleteTodo',id)
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
<template>
  <div>
    <li>
        <label>
        <input type="checkbox" :checked='aTodo.done' @change="handleCheck(aTodo.id)"/>
        <span>{{aTodo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="handleTodo(aTodo.id)">删除</button>
    </li>
  </div>
</template>

<script>
export default {
    name:'Todo',
    // 声明接受每一件事
    props:['aTodo','checkTodo','deleteTodo'],
    methods: {
        // 勾选 在app组件操作数据
        handleCheck(id){
            // console.log(id);
            this.checkTodo(id)
        },
        // 删除 在app组件操作数据
        handleTodo(id){
            if(confirm('确认删除吗'))this.deleteTodo(id)
        }
    },
}
</script>

<style scoped>
/*item*/

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
li:hover button{
    display: block;
}



</style>
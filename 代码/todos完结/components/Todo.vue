<template>
  <div>
    <li>
        <label>
        <input type="checkbox" :checked='aTodo.done' @change="handleCheck(aTodo.id)"/>
        <span v-show="!aTodo.isEdit">{{aTodo.title}}</span>
        <input type="text" :value="aTodo.title" v-show="aTodo.isEdit" @blur="handleBlur(aTodo,$event)" ref="inputEle">
        </label>
        <button class="btn btn-danger" @click="handleTodo(aTodo.id)">删除</button>
        <button v-show="!aTodo.isEdit" class="btn btn-edit" @click="handleEdit(aTodo)">编辑</button>
    </li>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'Todo',
    // 声明接受每一件事
    props:['aTodo',],
    methods: {
        // 勾选 在app组件操作数据
        handleCheck(id){
            // console.log(id);
            this.$bus.$emit('checkTodo',id)
        },
        // 删除 在app组件操作数据
        handleTodo(id){
            if(confirm('确认删除吗'))pubsub.publish('deleteTodo',id)
        },
        //编辑
        handleEdit(aTodo){
            // 编辑过
            if(aTodo.hasOwnProperty('isEdit')){
                aTodo.isEdit = true
            }
            // 还未编辑过
            this.$set(aTodo,'isEdit',true)
            // 获取input的焦点
            this.$nextTick(()=>{
                this.$refs.inputEle.focus()
            })

        },
        // 失去焦点 更新todo
        handleBlur(aTodo,e){
            aTodo.isEdit = false
            if (e.target.value.trim()) return
            this.$bus.$emit('updateTodo',aTodo.id,e.target.value)
            // console.log(e.target.value);
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
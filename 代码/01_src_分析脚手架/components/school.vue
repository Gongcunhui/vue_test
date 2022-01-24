<template>
<div class="demo">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <student></student>
</div>
</template>

<script>
//引入student
import student from './student.vue'
 export default{
     name:'school',
        data() {
            return {
                name: '山龟骨',
                address: "重庆南岸"
       }
    },
    components: {
            student
        }
}
</script>

<style>
    .demo{
        background-color: red;
    }
</style>

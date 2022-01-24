<template>
  <div>
      <h1>{{msg}}</h1>
      <h2>学生名称：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <h2>学生年龄: {{age+1}}</h2>
  </div>
</template>

<script>
export default {
    name:'School',
    // props:['name','age','sex'],
    props:{
        name:String,
        age:Number,
        sex:String
    },
    data() {
        return {
            msg:'我是一个学生',
        }
    },
}
</script>
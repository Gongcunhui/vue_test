<template>
  <div>
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
    <h2>插件中的混合添加x：{{x}}</h2>
  </div>
</template>

<script>

export default {
    name:'Student',
    data(){
        return {
            name:'李四si',
            sex:'女',
        }
    },
    
}
</script>

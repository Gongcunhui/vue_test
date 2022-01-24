<template>
  <div class="demo">
      <h2>学生姓名：{{name}}</h2>
      <h2 class="runLess">学生性别：{{sex}}</h2>
  </div>
</template>

<script>

export default {
    name:'Student',
    data(){
        return {
            name:'李四四',
            sex:'女',
        }
    },
    
}
</script>

<style lang="less" scoped>
.demo{
  background-color: red;
  .runLess{
    font-size: 40px;
  }
}
</style>
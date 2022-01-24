<template>
  <div class="demo">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return {
            name:'重庆第二师范学院',
            address:'南山校区',
        }
    },
}
</script>

<style scoped>
.demo{
    background-color: pink;
}
</style>>


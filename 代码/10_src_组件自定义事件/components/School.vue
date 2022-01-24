<template>
  <div class="school">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <button @click="sendSchoolName">点击给app组件name</button>
  </div>
</template>

<script>
export default {
    name:'School',
    props:['getSchoolName'],
    data(){
        return {
            name:'重庆第二师范学院',
            address:'南山校区',
        }
    },
    methods: {
        sendSchoolName(){
            this.getSchoolName(this.name)
        }
    },
}
</script>

<style scoped>
.school{
    background-color: pink;
    padding: 15px;
}
</style>>


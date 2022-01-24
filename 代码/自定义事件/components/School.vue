<template>
  <div class="t1">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <button @click="sendName">把名字给app组件</button>
  </div>
</template>

<script>
export default {
    name:"School",
    props:['getName'],
    data() {
        return {
            name:"尚硅谷",
            address:"北京昌平"
        }
    },
    methods: {
        sendName(){
            this.getName(this.name)
        }
    },
}
</script>

<style scoped>
.t1{
    background-color:skyblue;
}
</style>
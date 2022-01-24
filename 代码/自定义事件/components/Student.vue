<template>
  <div class="t2">
      <h2>学生名字：{{name}}</h2>
      <h2>学生年龄：{{age}}</h2>
      <button @click="sendName">把名字给app组件</button>
      <button @click="unBind">解绑事件</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
            name:'龚存辉',
            age:22
        }
    },
    methods: {
        sendName(){
            this.$emit('getName',this.name)
        },
        unBind(){
           this.$off('getName')   //解绑一个
            // this.$off(['name1','name2','name3']) //解绑多个
            // this.$off()  ：解绑全部自定义事件
        }
    },
}
</script>

<style scoped>
.t2{
    background-color: pink;
}
</style>
<template>
  <div class="student">
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <h2>当前n为：{{n}}</h2>
      <button @click="sendStudentName">点击给app组件studentName</button>
      <button @click="unbind">解绑atguigu事件</button>
      <button @click="death">点击销毁组件</button>
      <button @click="add1">点击n+1</button>
  </div>
</template>

<script>

export default {
    name:'Student',
    data(){
        return {
            name:'李四四',
            sex:'女',
            n:1
        }
    },
    methods: {
      add1(){
        this.n++
        console.log('add被调用了');
      },
      sendStudentName(){
       this.$emit("atguigu",this.name,1,2,3)  //触发student组件实例对象身上的atguigu事件
      //  this.$emit("atguigu2")
      },
      unbind(){
       this.$off('atguigu')  //只能解绑一个自定义事件
        //this.$off(['atguigu'],['atguigu2'])  //解绑多个自定义事件
        //this.$off()  //解绑全部自定义
      },
      death(){
        this.$destroy()  //销毁了当前student组件实例,销毁后所有的student实例的自定义事件全都失效
      }
    },
    
}
</script>

<style lang="less" scoped>
.student{
  background-color: blue;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
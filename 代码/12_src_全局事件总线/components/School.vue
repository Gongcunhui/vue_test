<template>
  <div class="school">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <h2>欢迎你，{{studentName}}</h2>
  </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return {
            name:'重庆第二师范学院',
            address:'南山校区',
            studentName:''
        }
    },
    mounted() {
        // console.log('school',this.x);
        //给全局事件总线绑定事件  
        this.$bus.$on('hello',(data)=>{
            console.log('school收到了数据');
            this.studentName=data
        })
    },
    //自己被销毁前 解绑全局事件总线上的 自定义事件
    beforeDestroy(){
        this.$bus.$off("hello")
    }
}
</script>

<style scoped>
.school{
    background-color: pink;
    padding: 15px;
}
</style>>


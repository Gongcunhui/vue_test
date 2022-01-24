<template>
  <div class="school">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <h2>欢迎你，{{studentName}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
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
        // this.$bus.$on('hello',(data)=>{
        //     console.log('school收到了数据');
        //     this.studentName=data
        // })
        //订阅消息
        this.pid=pubsub.subscribe('hello',function (msgName,data) {
            console.log('有人发布了消息'+msgName,data);  
        })
    },
    
    beforeDestroy(){
        //自己被销毁前 解绑全局事件总线上的 自定义事件
        // this.$bus.$off("hello")
        //自己被销毁前 取消订阅
        pubSub.unsubscribe(this.pid)
    }
}
</script>

<style scoped>
.school{
    background-color: pink;
    padding: 15px;
}
</style>>


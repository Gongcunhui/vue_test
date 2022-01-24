<template>
  <h2>我是About内容</h2>
</template>

<script>
export default {
    name:'About',
    beforeDestroy(){
      console.log('about组件即将被销毁');
    },
    mounted() {
      console.log('about组件挂载完毕');

    },

    //组件额内路由守卫:

    // 通过路由规则，进入该组件时被调用
    beforeRouteEnter (to, from, next) {
      console.log('APP~~~beforeRouteEnter~~~');
      console.log(to,from);
      next()
    },
    //通过路由规则，离开该组件时被调用
    beforeRouteLeave (to, from, next) {
      console.log('app~~~~~~~~~~~~ beforeRouteLeave');
      next()
    }
}
</script>
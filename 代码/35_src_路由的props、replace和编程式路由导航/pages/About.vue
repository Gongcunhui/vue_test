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
}
</script>
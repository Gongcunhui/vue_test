<template>
  <ul>
    <li :style="{opacity}">欢迎来尚硅谷学习</li>
    <li>news001 <input type="text"></li>
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
  </ul>
</template>

<script>
export default {
    name:'News',
    data() {
      return {
        opacity:1
      }
    },
    /* beforeDestroy() {
      console.log('new组件即将被销毁');
      clearInterval(this.timer)
    }, */
   /*  mounted() {
      this.timer = setInterval(()=>{
        console.log('news中的定时器在工作');
        this.opacity -= 0.01
        if(this.opacity <= 0) this.opacity=1
      },17)
    }, */
    activated() {
      console.log('news组件被激活了');
       this.timer = setInterval(()=>{
        console.log('news中的定时器在工作');
        this.opacity -= 0.01
        if(this.opacity <= 0) this.opacity=1
      },17)
    },
    deactivated() {
      console.log('news组件失活了');
      clearInterval(this.timer)
    },
}
</script>

<style>

</style>
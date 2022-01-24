<template>
  <div>
      <button @click="isShow=!isShow">显示/隐藏</button>
       <transition-group name='v2' appear>  <!--appear默认为true 可以让h1初始加上动画 -->
      <h1 v-show="!isShow" key="1">你好啊</h1>
      <h2 v-show="isShow" key="2">你好啊</h2>
      </transition-group>
  </div>
</template>

<script>
export default {
    name:'Test',
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style scoped>
h1,h2{
    background-color: rgb(121, 109, 87);
    /* transition: 1s linear; */
}
/* 离开和进入的动画 */
.v2-enter-active,.v2-leave-active{
    transition: 1s linear;
}
/* 进入的起点，离开的终点 */
.v2-enter,.v2-leave-to{
    transform: translateX(-100%);
}
/* 进入的终点，离开的起点 */
.v2-enter-to,.v2-leave{
    transform: translateX(0);
}
</style> 
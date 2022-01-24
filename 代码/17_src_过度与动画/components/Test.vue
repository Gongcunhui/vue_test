<template>
  <div>
      <button @click="isShow=!isShow">显示/隐藏</button>
       <transition name='v1' appear>  <!--appear默认为true 可以让h1初始加上动画 -->
      <h1 v-show="isShow">你好啊</h1>
      </transition>
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
h1{
    background-color: rgb(190, 145, 59);
}
/* 进入的动画 */
.v1-enter-active{ 
    animation: move 1s linear;
}
/* 离开的动画 */
.v1-leave-active{
    animation: move 1s reverse;
}
@keyframes move{
    from {
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0);
    }
}
</style>
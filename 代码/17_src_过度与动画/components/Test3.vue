<template>
  <div>
      <button @click="isShow=!isShow">显示/隐藏</button>
       <transition name='animate__animated animate__bounce' 
       appear enter-active-class="animate__swing" leave-active-class="animate__backOutDown" >  <!--appear默认为true 可以让h1初始加上动画 -->
      <h1 v-show="isShow">你好啊</h1>
      </transition>
  </div>
</template>

<script>
import 'animate.css'
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
    background-color: rgb(194, 46, 70);
}

</style>
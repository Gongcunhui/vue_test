<template>
 <div id="app">
  <Test class="t1"></Test>
  <Test2 class="t2"></Test2>
 </div>
</template>

<script>
// 引入组件

import Test from './components/Test'
import Test2 from './components/Test2'
export default {
    name:'App',
    components:{Test,Test2},
}
</script>

<style>
.t1{
    background-color: skyblue;
}
.t2{
    background-color: pink;
}
</style>

<template>
  <div>
      <Student name='李四' sex='女' :age=18></Student>
      <hr/>
       <Student name='张山' sex='男' :age='18'></Student>
  </div>
</template>

<script>
// 引入Student组件
import Student from './components/Student.vue'
export default {
    name:'App',
    components:{Student},
}
</script>

<style>

</style>
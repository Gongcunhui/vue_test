<template>
  <div>
      <ul>
          <li>消息编号：{{id}}</li>
          <li>消息标题：{{title}}</li>
          <!-- <li>a:{{a}}</li>
          <li>b:{{b}}</li> -->
      </ul>
  </div>
</template>

<script>
export default {
    name:'Detail',
    props:['id','title'],
    // props:['a','b'],
    // computed:{
    //     id(){
    //         return this.$route.params.id
    //     },
    //     title(){
    //         return this.$route.params.id
    //     }
    // },
    mounted(){
        console.log(this.$route);
    }

}
</script>

<style>

</style>
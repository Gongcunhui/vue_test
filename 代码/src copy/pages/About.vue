<template>
  <div>
    <h2>我是About的内容</h2>
  </div>
</template>

<script>
export default {
    name:"About",
    beforeDestroy(){
      console.log('about即将被销毁');
    },
    mounted() {
      console.log(this);
    },
}
</script>

<style scoped>

</style>
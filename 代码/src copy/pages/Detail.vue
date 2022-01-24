<template>
  <div>
      <ul>
          <li>消息编号：{{id}}</li>
          <li>消息信息：{{title}}</li>

      </ul>
  </div>
</template>

<script>
export default {
    props:['id','title'],
    mounted() {
        console.log(this.$route);
    },

}
</script>

<style>

</style>
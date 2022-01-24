<template>
  <div class="category">
      <h3>{{title}}分类</h3>
      <slot name="center">我是slot</slot> <!--  具名插槽 -->
      <slot name="footer">我是slot</slot>
  </div>
</template>

<script>
export default {
    name:'Category',
    props:['title']

}
</script>

<style scoped>
.category{
    background-color: skyblue;
    width: 200px;
    height: 350px;
}
h3{
    background-color: orange;
    text-align: center;
}
</style>
<template>
  <div class="category">
      <h3>{{title}}分类</h3>
       <slot :games='games'></slot>    <!-- 作用域插槽 ：可以传数据给插槽的使用者（以对象的形式）-->
  </div>
</template>

<script>
export default {
    name:'Category',
    props:['title'],
        data() {
        return {
            games:['穿越火线','nba2k','csgo','永结无间'],
        }
    },
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
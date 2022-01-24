<template>
  <div>
      <h2>学生名称：{{name | mySlice}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <input type="text" v-fbind:value='name'>
  </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
            name:'龚存辉',
            sex:'男',
        }
    },mounted(){
        this.hello()
    }
}
</script>
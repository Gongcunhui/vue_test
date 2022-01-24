<template>
  <div>
      <h2>学校名称：{{name | mySlice}}</h2>
      <h2>学校地址：{{address}}</h2>
      <input type="text" v-big:value="10">
      <button @click="test">点击显示插件的中定义的vue原型上的函数</button>
  </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return {
            name:'重庆第二师范学院',
            address:'南山校区',
        }
    },
    methods:{
        test(){
            this.hello()
        }
    }
}
</script>

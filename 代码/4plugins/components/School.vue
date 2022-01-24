<template>
  <div>
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <button @click='test'>点我使用原型的hello方法</button>
  </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            name:'尚硅谷',
            address:'北京昌平'
        }
    },
    methods:{
        test(){
            this.hello()
        }
    }

}
</script>
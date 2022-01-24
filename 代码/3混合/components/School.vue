<template>
  <div>
      <h1>{{msg}}</h1>
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <button @click='showName'>点击显示学生的姓名</button>
  </div>
</template>

<script>
import { mixin2} from './mixin'
export default {
    name:'School',
    // props:['name','age','sex'],
    data() {
        return {
            msg:'我是一个学校',
            name:'尚硅谷',
            address:'北京昌平'
        }
    },
    mixins:[mixin2]
 
}
</script>
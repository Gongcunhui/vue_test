<template>
  <div>
      <h1>{{msg}}</h1>
      <h2>学生名称：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <button @click='showName'>点击显示学生的姓名</button>
  </div>
</template>

<script>
import { mixin2} from './mixin'
export default {
    name:'Student',
    // props:['name','age','sex'],
    data() {
        return {
            msg:'我是一个学生',
            name:'龚存辉',
            sex:'男',
            a:999
        }
    },
    mixins:[mixin2],
    mounted(){
        console.log('组件自身的mounted()');
    }
  
}
</script>
<template>
  <div>
      <h2 @click="showName">学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <h2>mixin中的对data的设置比组件对data设置优先级低-----x：{{x}}</h2>
  </div>
</template>

<script>
import { mixin,mixin2 } from '../mixin'
export default {
    name:'School',
    data(){
        return {
            name:'重庆第二师范学院',
            address:'南山校区',
            x:999
        }
    },
    mixins:[mixin,mixin2]
}
</script>

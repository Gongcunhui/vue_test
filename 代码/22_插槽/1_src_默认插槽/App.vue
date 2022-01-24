<template>
<div class="container">
   <Category title="美食">
       <img src="../01_src_分析脚手架/assets/logo.png" alt="">
   </Category>
   <Category title="游戏">
    <ul>
          <li v-for="(item,index) in games" :key="index">{{item}}</li>
    </ul>
   </Category>
   <Category title="电影">
       <video src="../01_src_分析脚手架/assets/1C.mp4" width="100%" height="200px" controls></video>
   </Category>
</div>
</template>

<script>

import Category from './components/Category'
export default {
  components: { Category },
    name:'App',
    data() {
        return {
            foods:['火锅','牛肉','龙虾','土豆'],
            games:['穿越火线','nba2k','csgo','永结无间'],
            films:['《教父1》','《教父2》','《教父3》','《教父4》']
        }
    },
}
</script>

<style lang="css">
    .container{
        display: flex;
        justify-content: space-around; 
    }
   img{
       width: 100%;
   }
</style>
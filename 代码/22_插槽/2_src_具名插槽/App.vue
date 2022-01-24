<template>
<div class="container">
   <Category title="美食">
       <img src="../01_src_分析脚手架/assets/logo.png" alt="" slot="center">
       <a href="#" slot="footer">更多美食</a>
   </Category>
   <Category title="游戏">
    <ul slot="center">
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
    </ul>
    <div slot="footer" class="foot">
        <a href="#" slot="footer">单机游戏</a>
        <a href="#" slot="footer">更多游戏</a>
    </div>
   </Category>
   <Category title="电影">
       <video slot="center" src="../01_src_分析脚手架/assets/1C.mp4" width="100%" height="200px" controls></video>
       <template v-slot:footer>
         <div class="foot">
            <a href="#" slot="footer">单机</a>
            <a href="#" slot="footer">更多</a>
            <a href="#" slot="footer">游戏</a>
         </div>
         <h4>欢迎来观看电影</h4>
       </template>
       
 
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
        text-align: center;
    }
   img{
       width: 100%;
   }
   .foot{
       display: flex;
       justify-content: space-around;
   }
</style>
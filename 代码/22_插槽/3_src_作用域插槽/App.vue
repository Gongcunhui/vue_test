<template>
<div class="container">
   <Category title="游戏">
       <template slot-scope='game'>
          <ul>
             <li v-for="(item,index) in game.games" :key="index">{{item}}</li>
          </ul>
       </template>
   </Category>
   <Category title="游戏">
    <template slot-scope='game'>
          <ol>
             <li v-for="(item,index) in game.games" :key="index">{{item}}</li>
          </ol>
           <h4>{{game}}</h4>  <!-- 传过来的数据是对象的形式-->
       </template>
   </Category>
   <Category title="游戏">
        <template slot-scope='game'>
             <h4 v-for="(item,index) in game.games" :key="index">{{item}}</h4>
       </template>
   </Category>
</div>
</template>

<script>

import Category from './components/Category'
export default {
  components: { Category },
    name:'App',
}
</script>

<style lang="css">
    .container{
        display: flex;
        justify-content: space-around; 
        /* text-align: center; */
    }
</style>
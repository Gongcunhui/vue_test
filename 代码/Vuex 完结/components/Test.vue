<template>
    <div>
        <h1>当前求和为：{{n}}</h1>
        <h2>放大10倍：{{bigN}}</h2>
        <h3>我在{{school}}学习{{sub}}</h3>
        <select v-model.number="num">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button @click="JIA(num)">+</button>
        <button @click="JIAN(num)">-</button>
        <button @click="jiaOdd(num)">奇数再加</button>
        <button @click="jiaWait(num)">等一等再加</button>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
export default {
    name:"Category",
    data() {
      return {
        num:1,   //用户选的数字
      }
    },
    computed:{
      // mapState返回的是一个对象
      // 对象写法 
      // ...mapState({sum:'n',school:'school',sub:'sub'})
      // ...mapGetters({bigN:"bigN"})
      // 数组写法：要求计算属性名和vuex中的数据名一致时使用
      ...mapState('testOptions',['n','school','sub']),
      ...mapGetters('testOptions',['bigN'])
    },
    methods: {
      ...mapMutations('testOptions',['JIA']),
      ...mapMutations('testOptions',['JIAN']),
      ...mapActions('testOptions',['jiaOdd']),
      ...mapActions('testOptions',['jiaWait']),
 
    },
    mounted() {
      // console.log(this.$store);
      console.log(this.$store);
    },
}
</script>

<style scoped>
button{
  margin-left: 5px;
}
</style>
<template>
  <div>
      <h1>当前的和为：{{sum}}</h1>
      <h3>当前的和x10为：{{bigSum}}</h3>
      <h4>我在{{school}},学习{{subject}}</h4>
      <select v-model="n">
          <option :value="1">1</option>
          <option :value="2">2</option>
          <option :value="3">3</option>
      </select>
      <button @click="add(n)">+</button>
      <button @click="decrement(n)">-</button>
      <button @click="oddAdd(n)">当前和为奇数时再加</button>
      <button @click="waitAdd(n)">等一等在加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    name:'Count',
    data() {
        return {
           n:0
        }
    },
    computed:{
      
        //222.借助mapState生成计算属性，从state中读取数据（对象写法）
        // ...mapState({sum:'sum',school:'school',subject:'subject'}),

        //222.借助mapState生成计算属性，从state中读取数据（数组写法）
        ...mapState(['sum','school','subject']),   //sum，school，subject（vc中的计算属性名和state的属性名字一样时）既作为计算属性又作为state里面的数据

        //222.借助mapGetteers生成计算属性，从state中读取数据（对象写法）
        // ...mapGetters({bigSum:'bigSum'}), //对象写法
        //222.借助mapGetters生成计算属性，从state中读取数据（数组写法）
        ...mapGetters(['bigSum'])
    },
    methods: {
        //vc调用方法去访问mutations
       /*  add(){
            this.$store.commit('JIA',this.n)
        },
        decreuTent(){
            this.$store.commit('JIAN',this.n)
        }, */
        //借助mapMutations生成对应的方法，方法中会自己调用commit去联系mutations（对象写法）
        ...mapMutations({add:'JIA',decrement:'JIAN'}),
        // ...mapMutations(['JIA','JIAN']),//（数组写法）  //vc中的方法和muations中的方法名一样时

/* ************************************************************************************************************** */
        //vc调用方法去访问actions
        /*    oddAdd(){
            this.$store.dispatch('jiaOdd',this.n)
       
        },
        waitAdd(){
            this.$store.dispatch('jiaWait',this.n)
        } */

        //借助mapActions生成对应的方法，方法中会自己调用dispatch去联系actions（对象写法）
        ...mapActions({oddAdd:'jiaOdd',waitAdd:'jiaWait'}),
        // ...mapActions(['jiaOdd','jiaWait']),//(数组写法)vc中的方法和actions中的方法名一样时
    },
    mounted(){
       const x =mapState({he:'sum',xuexiao:'school',xueke:'subject'})
       console.log(x);
    }

}
</script>

<style>

</style>
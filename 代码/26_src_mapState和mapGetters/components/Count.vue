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
      <button @click="add">+</button>
      <button @click="decrement">-</button>
      <button @click="oddAdd">当前和为奇数时再加</button>
      <button @click="waitAdd">等一等在加</button>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
    name:'Count',
    data() {
        return {
           n:0
        }
    },
    computed:{
        //111.靠程序员自己去写计算属性：sum school subject
        // sum(){
        //     return this.$store.state.sum
        // },
        // school(){
        //     return this.$store.state.schoool
        // },
        // subject(){
        //     return this.$store.state.subject
        // },

        //222.借助mapState生成计算属性，从state中读取数据（对象写法）
        // ...mapState({sum:'sum',school:'school',subject:'subject'}),

        //222.借助mapState生成计算属性，从state中读取数据（数组写法）
        ...mapState(['sum','school','subject']),   //sum，school，subject（名字必须一样）既作为计算属性又作为state里面的数据


        /* bigSum(){
            return this.$store.getters.bigSum
        } */
        //222.借助mapGetteers生成计算属性，从state中读取数据（对象写法）
        // ...mapGetters({bigSum:'bigSum'}), //对象写法
        //222.借助mapGetters生成计算属性，从state中读取数据（数组写法）
        ...mapGetters(['bigSum'])
    },
    methods: {
        add(){
            this.$store.commit('JIA',this.n)
        },
        decrement(){
            this.$store.commit('JIAN',this.n)
        },
        oddAdd(){
            this.$store.dispatch('jiaOdd',this.n)
       
        },
        waitAdd(){
            this.$store.dispatch('jiaWait',this.n)
        }
    },
    mounted(){
       const x =mapState({he:'sum',xuexiao:'school',xueke:'subject'})
       console.log(x);
    }

}
</script>

<style>

</style>
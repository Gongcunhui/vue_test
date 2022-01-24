<template>
  <div>
      <h1>当前的和为：{{$store.state.sum}}</h1>
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
export default {
    name:'Count',
    data() {
        return {
           n:0
        }
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
        console.log(this);
    }

}
</script>

<style>

</style>
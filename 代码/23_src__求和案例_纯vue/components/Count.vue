<template>
  <div>
      <h1>当前的和为：{{sum}}</h1>
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
           sum:0,
           n:0
        }
    },
    methods: {
        add(){
            this.sum +=this.n
        },
        decrement(){
            this.sum -= this.n
        },
        oddAdd(){
            if(this.sum % 2) {
                this.sum += this.n
            }
        },
        waitAdd(){
            setTimeout(() => {
                this.sum += this.n
            }, 2000);
        }
    },

}
</script>

<style>

</style>
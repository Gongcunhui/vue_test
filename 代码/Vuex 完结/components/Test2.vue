<template>
  <div>
       <h3>上方组件的和{{n}}</h3>
      <h1>人员列表</h1>
      <input type="text" placeholder="添加人员" v-model="name" @keyup.enter="add">
      <ul>
          <li v-for="p in personList" :key="p.id">{{p.name}}</li>
      </ul>
     
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { mapState } from 'vuex'
export default {
    name:'Test2',
    data() {
        return {
            name:''
        }
    },
    computed:{
        personList(){
            return this.$store.state.test2Options.personList
        },
        ...mapState('testOptions',['n'])
    },
    methods:{
        add(){
            const per = {id:nanoid(),name:this.name}
            this.$store.commit('test2Options/ADD',per)
        }
    }
}
</script>

<style>

</style>
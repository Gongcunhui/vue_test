<template>
  <div>
      <h1>人员列表</h1>
      <h2>Count组件的求和为：{{sum}}</h2>
      <h3>列表中一个人的名字为：{{firstPersonName}}</h3>
      <input type="text" placeholder="请输入名字" v-model="name">
      <button @click="addPerson">添加</button>
      <button @click="addWang">添加一个王姓的人</button>
      <button @click="addnamePerson">添加一个人，名字随机</button>
      <ul>
          <li v-for="p in personList" :key="p.id">{{p.name}}</li>
      </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { mapState } from 'vuex'
// import { mapState} from 'vuex'
export default {
    name:'Person',
    data() {
        return {
           name:'' 
        }
    },
    computed:{
        personList(){
            return this.$store.state.personAbout.personList
        },
        sum(){
            return this.$store.state.countAbout.sum
        },
        // ...mapState(['personList'])
        firstPersonName(){
             return this.$store.getters['personAbout/firstPersonName']
        }
        
    },
    methods: {
        addPerson(){
            const personObj = {id:nanoid(),name:this.name}
            this.$store.commit('personAbout/ADD_PERSON',personObj)
            // console.log(personObj);
            this.name=''
        },
        addWang(){
             const personObj = {id:nanoid(),name:this.name}
             this.$store.dispatch('personAbout/addperosn_wang',personObj)
             this.name=''
        },
        addnamePerson(){
            this.$store.dispatch('personAbout/addperson_server')
        }
    },
}
</script>

<style>

</style>
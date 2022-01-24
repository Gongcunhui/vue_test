<template>
  <div class="demo">
      <h2>学生名字：{{name}}</h2>
      <h2>学生年纪：{{myAge+1}}</h2>
      <button @click="updateAge">点击age+1</button>
  </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return { 
            myAge:this.age   //props的接收的数据 优先级高于data中的数据（如果名字相同）
        }
    },
    methods:{
        updateAge(){
            this.myAge++
        }
    },
    //第一种方式(只接收) : props:['name' ]
    // props:['name','age']  

    //第二种方式(限制类型) :props:{name : Number}
    /* props:{
       name:String,
       age:Number
    } */

    //第三种方式(限制类型、限制必要性、指定默认值)
    props:{
        name:{
            typeof:String,
            required:false, //要求是否传入了name 默认false   
            default:'老王'  //没有传入name 设置默认值为老王
            },
        age:{
            typeof:Number,
            require:true
            }
       }
}
</script>


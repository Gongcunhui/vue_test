<template>
   <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="gos">测试一下go</button>
    </div>
</template>

<script>
export default {
    name:'Banner',
    methods: {
        back(){
            this.$router.back()
        },
        forward(){
            this.$router.forward()
        },
        gos(){
            this.$router.go(3)
        }
    },

}
</script>

<style>

</style>
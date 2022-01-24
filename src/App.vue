<template>
  <div>
      <button>原生的按钮</button>
      <input type="text">
      <el-row>
        <el-button round>圆角按钮</el-button>
        <el-button type="primary" round>主要按钮</el-button>
        <el-button type="success" round>成功按钮</el-button>
        <el-button type="info" round>信息按钮</el-button>
        <el-button type="warning" round>警告按钮</el-button>
        <el-button type="danger" round>危险按钮</el-button>
      </el-row>
      <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
      </el-date-picker> 
  </div>
</template>

<script>
// 引入组件

export default {
    name:'App',

}
</script>

<style>

</style>

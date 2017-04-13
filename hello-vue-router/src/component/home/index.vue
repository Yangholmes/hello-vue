<template>
  <div id="home">

    <el-row type="flex" justif="center" align="middle">
      <el-col :span="4">
        <el-menu default-active="/home/task1" class="el-menu-demo" mode="vertical" :router="true" theme="dark">
          <el-menu-item index="/home/task1">任务1</el-menu-item>
          <el-menu-item index="/home/task2">任务2</el-menu-item>
          <el-menu-item index="/home/task3">任务3</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>

    <footer>
      <p>Here is {{ msg }}!</p>
      <p>create by Yangholmes</p>
    </footer>

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Home'
    }
  },
  mounted: function(){
    console.log('Home page mounted');
  }
}
</script>

<style>
#home{
  margin: 0 auto;
  text-align: center;
}
footer{
  position: relative;
  bottom: 0;
  margin-top: 2em;
  border: 1px solid black;
}
</style>

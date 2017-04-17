<template>
  <div id="app">
    <div id="navigation">
      <el-menu default-active="/home" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true" theme="light">
        <el-menu-item index="/home" id="logo"><img src="http://localhost:8080/src/assets/moue.png"></el-menu-item>
        <el-menu-item index="/home">Home</el-menu-item>
        <el-menu-item index="/page">Page</el-menu-item>
        <el-menu-item index="/table">Table</el-menu-item>
        <el-menu-item index="/form">Form</el-menu-item>
        <el-menu-item index="/vue-resource">vue-resource</el-menu-item>
        <el-menu-item index="/query">Query</el-menu-item>
      </el-menu>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
    data() {
      return {
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
html,
body{
    margin: 0; padding: 0;
    font-size: 100%;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    width: 100%; height: 100%;
}
#app{
  width: 100%; height: 100%;
}

#logo{
  display: flex;
  align-items: center;
}
#logo.el-menu-item:hover{
  border: none;
}
#logo img{
  height: 2em;
}
</style>

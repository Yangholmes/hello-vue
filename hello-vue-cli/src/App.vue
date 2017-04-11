<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <firstComponent></firstComponent>
    <a href="first">第一个页面</a>
    <a href="second">第二个页面</a>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import firstComponent from './component/firstCpn.vue'
export default {
  data () {
    return {
      msg: 'Welcome to yangholmes\' Vue.js App'
    }
  },
  components: {
    firstComponent
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

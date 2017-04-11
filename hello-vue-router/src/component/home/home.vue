<template>
  <div id="home">
    <h1>This is Home~</h1>
    <p>{{ msg }}</p>
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

<style></style>

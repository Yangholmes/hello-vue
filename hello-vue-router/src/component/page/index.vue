<template>
  <div id="page">
    <h1>This is Page~</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Page'
    }
  }
}
</script>

<style>
#page{
  margin: 0 auto;
  text-align: center;
}
</style>

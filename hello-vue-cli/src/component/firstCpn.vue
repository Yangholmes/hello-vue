<template>
  <div id="first-component">
    <h1>I am a component.</h1>
    <a> {{ author }} </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      author: "Yangholmes"
    }
  }
}
</script>

<style>
#first-component h1{
  color: blue;
}
</style>

<template>
  <Content msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Content from './components/Content.vue'
import 'bootstrap/scss/bootstrap.scss';

export default {
  name: 'App',
  components: {
    Content
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a {
  margin-left: 15px;
}
</style>

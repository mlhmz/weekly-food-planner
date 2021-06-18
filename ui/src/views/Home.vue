<template>
  <div id="app">
    <Food/>
  </div>
  
</template>

<script>
import Food from "../components/Food.vue"
import '../../node_modules/bootstrap/scss/bootstrap.scss';

export default {
  name: 'App',
  components: {
    Food
  }
}
</script>

<style>
a {
  margin-left: 15px;
}
</style>

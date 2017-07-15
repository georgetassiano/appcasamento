<template>
  <div id="app">
    <lista-despesas></lista-despesas>
  </div>
</template>

<script>
import ListaDespesas from './components/ListaDespesas'
export default {
  name: 'app',
  components: {ListaDespesas}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

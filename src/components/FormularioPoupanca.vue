<template>
  <section>
    <form @submit.prevent="adicionar()">
      <input type="number" v-model="valor">
      <input type="submit">
    </form>
  </section>
</template>
<script>
  export default{
    name: 'FormularioPoupanca',
    data () {
      return {
        valor: 0
      }
    },
    methods: {
      adicionar () {}
    }
  }
</script>
<style>
</style>

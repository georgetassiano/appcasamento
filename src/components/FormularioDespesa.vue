<template>
  <section>
    <form @submit.prevent="adicionar()">
      <input type="text" v-model="nome">
      <input type="number" v-model="valor">
      <input type="submit">
    </form>
  </section>
</template>
<script>
  export default{
    name: 'FormularioDespesa',
    data () {
      return {
        nome: '',
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

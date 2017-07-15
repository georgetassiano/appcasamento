<template>
  <section>
    <form @submit.prevent="adicionar()">
      <input type="text" v-model="nome">
      <input type="submit">
    </form>
  </section>
</template>
<script>
  export default{
    name: 'FormularioTarefa',
    data () {
      return {
        nome: ''
      }
    },
    methods: {
      adicionar () {}
    }
  }
</script>
<style>
</style>

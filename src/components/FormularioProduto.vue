<template>
  <section>
    <form @submit.prevent="adicionar()">
      <input type="text" v-model="nome">
      <input type="number" v-model="valor">
      <input type="url" v-model="url">
      <input type="number" v-model="quantidade">
      <input type="radio" v-model="importante" :value="true"> Essencial<br>
      <input type="radio" v-model="importante" :value="false"> Preferencial<br>
      <input type="radio" v-model="paraPresente" :value="true"> Sim<br>
      <input type="radio" v-model="paraPresente" :value="false"> Não<br>
      <input type="submit">
    </form>
  </section>
</template>
<script>
  export default{
    name: 'FormularioProduto',
    data () {
      return {
        nome: '',
        valor: 0,
        url: '',
        quantidade: 0,
        importante: true,
        paraPresente: false
      }
    },
    methods: {
      adicionar () {}
    }
  }
</script>
<style>
</style>

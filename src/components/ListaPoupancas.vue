<template>
  <section class="container">
    <header>
      <router-view></router-view>
      <h1>Lista de poupanças cadastradas</h1>
      <router-link to="/poupancas/novapoupanca" tag="button" class="btn btn-success">Adicionar nova poupança</router-link>
    </header>
    <div class="row">
      <poupanca v-for="(poupanca, index) in poupancas" :key="poupanca.id" :poupanca="poupanca" @alterar="carregarFormulario(poupanca)" class="col-xs-12 col-md-6"></poupanca>
    </div>
  </section>
</template>
<script>
  import Poupanca from './Poupanca.vue'
  import { mapGetters } from 'vuex'
  export default{
    name: 'ListaPoupancas',
    components: {Poupanca},
    data () {
      return {
        poupanca: {}
      }
    },
    computed: {
      ...mapGetters([
        'poupancas'
      ])
    },
    methods: {
      carregarFormulario (poupanca) {
        this.poupanca = JSON.parse(JSON.stringify(poupanca))
        this.$router.push({name: 'EdicaoPoupanca', params: { 'poupanca': this.poupanca }})
      }
    }
  }
</script>
<style>
</style>

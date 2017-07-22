<template>
  <section class="container">
    <header>
      <router-view></router-view>
      <h1>Lista de despesas cadastradas</h1>
      <router-link to="/despesas/novadespesa" tag="button" class="btn btn-success">Adicionar nova despesa</router-link>
    </header>
    <div class="row">
      <despesa v-for="(despesa, index) in despesas" :key="despesa.id" :despesa="despesa" @alterar="carregarFormulario(despesa)" class="col-xs-12 col-md-6"></despesa>
    </div>
  </section>
</template>
<script>
  import Despesa from './Despesa'
  import { mapGetters } from 'vuex'
  export default{
    name: 'ListaDespesas',
    components: {Despesa},
    data () {
      return {
        despesa: {}
      }
    },
    computed: {
      ...mapGetters([
        'despesas'
      ])
    },
    mounted () {
      this.$store.dispatch('carregarDespesas')
    },
    methods: {
      carregarFormulario (despesa) {
        this.despesa = JSON.parse(JSON.stringify(despesa))
        this.$router.push({name: 'EdicaoDespesa', params: { 'despesa': this.despesa }})
      }
    }
  }
</script>
<style>
</style>

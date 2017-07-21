<template>
  <section class="row">
    <p class="col-xs-12 col-md-6">Total em dinheiro em despesas: {{totalDespesas}}</p>
    <p class="col-xs-12 col-md-6">Total em dinheiro em produtos: {{totalProdutos}}</p>
    <p class="col-xs-12 col-md-6">Total em dinheiro na poupança: {{valorPoupanca}}</p>
    <p class="col-xs-12 col-md-6">Tarefas ainda não concluídas: {{tarefas.size}}</p>
    <p class="col-xs-12 col-md-6">Total de dinheiro que precisamos: {{totalDinheiro}}</p>
  </section>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default{
    name: 'Resumo',
    computed: {
      ...mapGetters([
        'totalDespesas',
        'totalProdutos',
        'tarefas',
        'valorPoupanca'
      ]),
      totalDinheiro () {
        return this.valorPoupanca - (this.totalDespesas + this.totalProdutos)
      }
    }
  }
</script>
<style>
</style>

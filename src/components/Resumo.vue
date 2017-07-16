<template>
  <section class="row">
    <p class="col-xs-12 col-md-6">Total em dinheiro em produtos: {{totalProdutos}}</p>
    <p class="col-xs-12 col-md-6">Total em dinheiro em despesas: {{totalDespesas}}</p>
    <p class="col-xs-12 col-md-6">Total em dinheiro na poupança: {{totalPoupanca}}</p>
    <p class="col-xs-12 col-md-6">Tarefas ainda não concluídas: {{totalTarefas}}</p>
    <p class="col-xs-12 col-md-6">Total de dinheiro que precisamos: {{totalDinheiro}}</p>
  </section>
</template>
<script>
  export default{
    name: 'Resumo',
    data () {
      return {
        totalProdutos: 2000,
        totalDespesas: 3000,
        totalPoupanca: 1000,
        totalTarefas: 4,
        totalDinheiro: 3000
      }
    }
  }
</script>
<style>
</style>

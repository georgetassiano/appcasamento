<template>
  <div>
    <p>Total em dinheiro em produtos: {{totalProdutos}}</p>
    <p>Total em dinheiro em despesas: {{totalDespesas}}</p>
    <p>Total em dinheiro na poupança: {{totalPoupanca}}</p>
    <p>Tarefas ainda não concluídas: {{totalTarefas}}</p>
    <p>Total de dinheiro que precisamos: {{totalDinheiro}}</p>
  </div>
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

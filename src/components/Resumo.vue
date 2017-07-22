<template>
  <section class="container">
    <div class="row">
      <p class="col-xs-12 col-md-6">Total em dinheiro em despesas: R$ {{totalDespesas}}</p>
      <p class="col-xs-12 col-md-6">Total em dinheiro em produtos: R$ {{totalProdutos}}</p>
      <p class="col-xs-12 col-md-6">Total em dinheiro na poupança: R$ {{totalPoupancas}}</p>
      <p class="col-xs-12 col-md-6">Tarefas ainda não concluídas: {{tarefas.length}}</p>
      <p class="col-xs-12 col-md-6">Total de dinheiro que precisamos: R$ {{totalDinheiro}}</p>
    </div>
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
        'totalPoupancas'
      ]),
      totalDinheiro () {
        return this.totalPoupancas - (this.totalDespesas + this.totalProdutos)
      }
    }
  }
</script>
<style>
</style>

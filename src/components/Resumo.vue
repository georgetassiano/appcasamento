<template>
  <div class="list no-border platform-delimiter">
    <div class="item">
      <div class="item-content">
        Total em dinheiro em despesas: R$ {{totalDespesas}}
      </div>
    </div>
    <div class="item">
      <div class="item-content">
        Total em dinheiro em produtos: R$ {{totalProdutos}}
      </div>
    </div>
    <div class="item">
      <div class="item-content">
        Total em dinheiro na poupança: R$ {{totalPoupancas}}
      </div>
    </div>
    <div class="item">
      <div class="item-content">
        Tarefas ainda não concluídas: {{tarefas.length}}
      </div>
    </div>
    <div class="item">
      <div class="item-content">
        Total de dinheiro de despesas+produtos: R$ {{totalParaObter}}
      </div>
    </div>
    <div class="item">
      <div class="item-content">
        Total de dinheiro que precisamos: R$ {{totalDinheiro}}
      </div>
    </div>
  </div>
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
      },
      totalParaObter () {
        return this.totalDespesas + this.totalProdutos
      }
    },
    mounted () {
      this.$store.dispatch('carregarTarefas')
      this.$store.dispatch('carregarProdutos')
      this.$store.dispatch('carregarPoupancas')
      this.$store.dispatch('carregarDespesas')
    }
  }
</script>
<style>
</style>

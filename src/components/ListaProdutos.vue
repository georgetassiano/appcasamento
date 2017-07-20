<template>
  <section class="row">
    <produto v-for="(produto, index) in produtos" :key="produto.id" :nome="produto.nome" :valor="produto.valor"
    :url="produto.url" :quantidade="produto.quantidade" :tipo="produto.tipo" :paraPresente="produto.paraPresente"
     :estado="produto.estado" class="col-xs-12 col-md-6"></produto>
  </section>
</template>
<script>
  import Produto from './Produto'
  import { mapGetters } from 'vuex'
  export default{
    name: 'ListaProdutos',
    components: {Produto},
    computed: {
      ...mapGetters([
        'produtos'
      ])
    }
  }
</script>
<style>
</style>

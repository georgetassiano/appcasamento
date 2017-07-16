<template>
  <section class="row">
    <produto v-for="(produto, index) in lista" :key="produto.nome" :nome="produto.nome" :valor="produto.valor"
    :url="produto.url" :quantidade="produto.quantidade" :tipo="produto.tipo" :paraPresente="produto.paraPresente"
     :estado="produto.estado" class="col-xs-12 col-md-6"></produto>
  </section>
</template>
<script>
  import Produto from './Produto'
  export default{
    name: 'ListaProdutos',
    components: {Produto},
    data () {
      return {
        lista: [{'nome': 'teste', 'valor': 30.0, 'url': 'http://www.google.com', 'quantidade': 4, 'tipo': 'essencial', 'paraPresente': 'sim', 'estado': 'concluida'},
         {'nome': 'teste1', 'valor': 30.0, 'url': 'http://www.google.com', 'quantidade': 4, 'tipo': 'essencial', 'paraPresente': 'sim', 'estado': 'concluida'},
         {'nome': 'teste2', 'valor': 30.0, 'url': 'http://www.google.com', 'quantidade': 4, 'tipo': 'essencial', 'paraPresente': 'sim', 'estado': 'concluida'}]
      }
    }
  }
</script>
<style>
</style>

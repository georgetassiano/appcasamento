<template>
  <section class="container">
    <header>
      <router-view></router-view>
      <h1>Lista de produtos cadastrados</h1>
      <router-link to="/produtos/novoproduto" tag="button" class="btn btn-success">Adicionar novo produto</router-link>
    </header>
    <div class="row">
      <produto v-for="(produto, index) in produtos" :key="produto.id" :produto="produto" @alterar="carregarFormulario(produto)" class="col-xs-12 col-md-6"></produto>
    </div>
  </section>
</template>
<script>
  import Produto from './Produto'
  import { mapGetters } from 'vuex'
  export default{
    name: 'ListaProdutos',
    components: {Produto},
    data () {
      return {
        produto: {}
      }
    },
    computed: {
      ...mapGetters([
        'produtos'
      ])
    },
    mounted () {
      this.$store.dispatch('carregarProdutos')
    },
    methods: {
      carregarFormulario (produto) {
        this.produto = JSON.parse(JSON.stringify(produto))
        this.$router.push({name: 'EdicaoProduto', params: { 'produto': this.produto }})
      }
    }
  }
</script>
<style>
</style>

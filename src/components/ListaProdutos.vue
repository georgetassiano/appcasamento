<template>
  <section class="row">
    <header>
      <formulario-edicao-produto :produto="produto" v-if="edicao" @fechar="fecharEdicao()"></formulario-edicao-produto>
    </header>
    <produto v-for="(produto, index) in produtos" :key="produto.id" :produto="produto" @alterar="carregarFormulario(produto)" class="col-xs-12 col-md-6"></produto>
  </section>
</template>
<script>
  import Produto from './Produto'
  import { mapGetters } from 'vuex'
  import FormularioEdicaoProduto from './FormularioEdicaoProduto'
  export default{
    name: 'ListaProdutos',
    components: {Produto, FormularioEdicaoProduto},
    data () {
      return {
        edicao: false,
        produto: {}
      }
    },
    computed: {
      ...mapGetters([
        'produtos'
      ])
    },
    mounted () {
      this.$store.dispatch('adicionarProdutos')
    },
    methods: {
      carregarFormulario (produto) {
        this.produto = JSON.parse(JSON.stringify(produto))
        this.edicao = true
      },
      fecharEdicao () {
        this.edicao = false
        this.produto = {}
      }
    }
  }
</script>
<style>
</style>

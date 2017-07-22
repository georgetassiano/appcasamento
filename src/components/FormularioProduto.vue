<template>
  <section>
    <form @submit.prevent="adicionar()">
      <div class="form-group">
        <label>Nome do produto</label>
        <input type="text" v-model="produto.nome" class="form-control">
      </div>
      <div class="form-group">
        <label>Valor</label>
        <input type="number" step="0.01" min="0"  v-model="produto.valor" class="form-control" placeholder="R$">
      </div>
      <div class="form-group">
        <label>Link de referência</label>
        <input type="url" v-model="produto.url" class="form-control">
      </div>
      <div class="form-group">
        <label>Quantidade</label>
        <input type="number" v-model="produto.quantidade" class="form-control">
      </div>
      <div class="form-check form-check-inline">
        <label class="form-check-label">
          <input type="radio" v-model="produto.importante" :value="true" class="form-check-input" checked> Essencial
        </label>
      </div>
      <div class="form-check form-check-inline">
        <label class="form-check-label">
          <input type="radio" v-model="produto.importante" :value="false" class="form-check-input"> Preferencial
        </label>
      </div>
      <div class="form-check form-check-inline">
        <label class="form-check-label">
          <input type="radio" v-model="produto.paraPresente" :value="true" class="form-check-input"> Sim
        </label>
      </div>
      <div class="form-check form-check-inline">
        <label class="form-check-label">
          <input type="radio" v-model="produto.paraPresente" :value="false" class="form-check-input" checked> Não
        </label>
      </div>
      <input type="submit" class="btn btn-primary">
    </form>
    <router-link to="/produtos" tag="button" class="btn btn-danger">fechar</router-link>
  </section>
</template>
<script>
  import { mapActions } from 'vuex'
  export default{
    name: 'FormularioProduto',
    data () {
      return {
        produto: {
          'id': '',
          'nome': '',
          'valor': 0.0,
          'url': '',
          'quantidade': 0,
          'importante': true,
          'paraPresente': false,
          'estado': false
        }
      }
    },
    methods: {
      ...mapActions([
        'adicionarProduto'
      ]),
      adicionar () {
        this.adicionarProduto(this.produto)
        this.produto.nome = ''
        this.produto.valor = 0.0
        this.produto.url = ''
        this.produto.quantidade = 0
        this.produto.importante = true
        this.produto.paraPresente = false
      }
    }
  }
</script>
<style>
</style>

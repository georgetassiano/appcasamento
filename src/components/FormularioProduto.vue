<template>
  <section>
    <form @submit.prevent="adicionar()">
      <div class="form-group">
        <label>Nome do produto</label>
        <input type="text" v-model="nome" class="form-control">
      </div>
      <div class="form-group">
        <label>Valor</label>
        <input type="number" v-model="valor" class="form-control">
      </div>
      <div class="form-group">
        <label>Link de referência</label>
        <input type="url" v-model="url" class="form-control">
      </div>
      <div class="form-group">
        <label>Quantidade</label>
        <input type="number" v-model="quantidade" class="form-control">
      </div>
      <div class="form-check form-check-inline">
        <label class="form-check-label">
          <input type="radio" v-model="importante" :value="true" class="form-check-input" checked> Essencial
        </label>
      </div>
      <div class="form-check form-check-inline">
        <label class="form-check-label">
          <input type="radio" v-model="importante" :value="false" class="form-check-input"> Preferencial
        </label>
      </div>
      <div class="form-check form-check-inline">
        <label class="form-check-label">
          <input type="radio" v-model="paraPresente" :value="true" class="form-check-input"> Sim
        </label>
      </div>
      <div class="form-check form-check-inline">
        <label class="form-check-label">
          <input type="radio" v-model="paraPresente" :value="false" class="form-check-input" checked> Não
        </label>
      </div>
      <input type="submit" class="btn btn-primary">
    </form>
  </section>
</template>
<script>
  import { mapActions } from 'vuex'
  export default{
    name: 'FormularioProduto',
    data () {
      return {
        nome: '',
        valor: 0.0,
        url: '',
        quantidade: 0,
        importante: true,
        paraPresente: false
      }
    },
    methods: {
      ...mapActions([
        'adicionarProduto'
      ]),
      adicionar () {
        this.adicionarProduto({
          'nome': this.nome,
          'valor': this.valor,
          'url': this.url,
          'quantidade': this.quantidade,
          'importante': this.importante,
          'paraPresente': this.paraPresente
        })
        this.nome = ''
        this.valor = 0.0
        this.url = ''
        this.quantidade = 0
        this.importante = true
        this.paraPresente = false
      }
    }
  }
</script>
<style>
</style>

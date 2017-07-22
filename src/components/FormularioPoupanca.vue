<template>
  <section>
    <form @submit.prevent="adicionar()" autocomplete="off">
      <div class="form-group">
        <label>Nome da poupanca</label>
        <input type="text" v-model.trim="poupanca.nome" class="form-control" required autofocus>
      </div>
      <div class="form-group">
        <label>Valor</label>
        <input type="number" step="0.01" min="0" placeholder="R$" v-model.number="poupanca.valor" class="form-control" required>
      </div>
      <input type="submit" class="btn btn-primary">
    </form>
    <router-link to="/poupancas" tag="button" class="btn btn-danger">fechar</router-link>
  </section>
</template>
<script>
  import { mapActions } from 'vuex'
  export default{
    name: 'FormularioPoupanca',
    data () {
      return {
        poupanca: {
          'id': '',
          'nome': '',
          'valor': 0.0
        }
      }
    },
    methods: {
      ...mapActions([
        'adicionarPoupanca'
      ]),
      adicionar () {
        this.adicionarPoupanca(this.poupanca)
        this.poupanca.nome = ''
        this.poupanca.valor = 0.0
      }
    }
  }
</script>
<style>
</style>

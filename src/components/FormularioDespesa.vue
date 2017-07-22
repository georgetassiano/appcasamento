<template>
  <section>
    <form @submit.prevent="adicionar()" autocomplete="off">
      <div class="form-group">
        <label>Nome da despesa</label>
        <input type="text" v-model.trim="despesa.nome" class="form-control" required autofocus>
      </div>
      <div class="form-group">
        <label>Valor</label>
        <input type="number" step="0.01" min="0" placeholder="R$"  v-model.number="despesa.valor" class="form-control" required>
      </div>
      <input type="submit" class="btn btn-primary">
    </form>
    <router-link to="/despesas" tag="button" class="btn btn-danger">fechar</router-link>
  </section>
</template>
<script>
import { mapActions } from 'vuex'
export default{
  name: 'FormularioDespesa',
  data () {
    return {
      despesa: {
        'id': '',
        'nome': '',
        'valor': 0.0,
        'estado': false
      }
    }
  },
  methods: {
    ...mapActions([
      'adicionarDespesa'
    ]),
    adicionar () {
      this.adicionarDespesa(this.despesa)
      this.despesa.nome = ''
      this.despesa.valor = 0.0
    }
  }
}
</script>
<style>
</style>

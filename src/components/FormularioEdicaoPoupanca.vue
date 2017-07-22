<template>
  <section>
    <form @submit.prevent="alterar()">
      <div class="form-group">
        <label>Nome da Poupanca</label>
        <input type="text" v-model="poupanca.nome" class="form-control">
      </div>
      <div class="form-group">
        <label>Valor</label>
        <input type="number" step="0.01" min="0" placeholder="R$"  v-model="poupanca.valor" class="form-control">
      </div>
      <input type="submit" class="btn btn-primary">
    </form>
    <router-link to="/poupancas" tag="button" class="btn btn-danger">fechar</router-link>
  </section>
</template>
<script>
import { mapActions } from 'vuex'
export default{
  name: 'FormularioEdicaoPoupanca',
  computed: {
    poupanca () {
      return this.$route.params.poupanca
    }
  },
  methods: {
    ...mapActions([
      'alterarPoupanca'
    ]),
    alterar () {
      this.alterarPoupanca(this.poupanca)
      this.$router.push('/poupancas')
    }
  }
}
</script>
<style>
</style>

<template>
  <div class="card card-outline-danger text-center">
    <div class="card-block">
      <h3 class="card-title">{{poupanca.nome}}</h3>
      <p class="card-text">{{poupanca.valor}}</p>
      <button class="btn btn-danger" @click="removerPoupanca({'id': poupanca.id})">excluir</button>
      <button class="btn btn-warning" @click="alterar()">editar</button>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default{
    name: 'Poupanca',
    props: ['poupanca'],
    methods: {
      ...mapActions([
        'removerPoupanca'
      ]),
      alterar () {
        this.$emit('alterar')
      }
    }
  }
</script>
<style>
</style>

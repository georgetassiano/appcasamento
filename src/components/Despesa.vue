<template>
  <div class="card card-outline-danger text-center">
    <div class="card-block">
      <h3 class="card-title"><del v-if="despesa.estado">{{despesa.nome}}</del><span v-else>{{despesa.nome}}</span></h3>
      <p class="card-text">{{despesa.valor}}</p>
      <button class="btn btn-primary" @click="mudarEstadoDespesa(despesa)">Paga</button>
      <button class="btn btn-danger" @click="removerDespesa({'id': despesa.id})">excluir</button>
      <button class="btn btn-warning" @click="alterar()">editar</button>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default{
    name: 'Despesa',
    props: ['despesa'],
    methods: {
      ...mapActions([
        'removerDespesa',
        'mudarEstadoDespesa'
      ]),
      alterar () {
        this.$emit('alterar')
      }
    }
  }
</script>
<style>
</style>

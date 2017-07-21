<template>
  <div class="card card-outline-primary text-center">
    <div class="card-block">
      <h3 class="card-title">{{tarefa.nome}}</h3>
      <a href="#" class="btn btn-primary">Go somewhere</a>
      <button class="btn btn-danger" @click="removerTarefa({'id': tarefa.id})">fechar</button>
      <button class="btn btn-warning" @click="alterar()">editar</button>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default{
    name: 'Tarefa',
    props: ['tarefa'],
    methods: {
      ...mapActions([
        'removerTarefa'
      ]),
      alterar () {
        this.$emit('alterar')
      }
    }
  }
</script>
<style>
</style>

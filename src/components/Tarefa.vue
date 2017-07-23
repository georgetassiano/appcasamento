<template>
  <div class="card card-outline-primary text-center">
    <div class="card-block">
      <h3 class="card-title"><del v-if="tarefa.estado">{{tarefa.nome}}</del><span v-else>{{tarefa.nome}}</span></h3>
      <button class="btn btn-primary" @click="mudarEstadoTarefa(tarefa)">Terminar</button>
      <button class="btn btn-danger" @click="removerTarefa({'id': tarefa.id})">excluir</button>
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
        'removerTarefa',
        'mudarEstadoTarefa'
      ]),
      alterar () {
        this.$emit('alterar')
      }
    }
  }
</script>
<style>
</style>

<template>
  <section class="row">
    <tarefa v-for="(tarefa, index) in tarefas" :key="tarefa.id" :identificador="tarefa.id" :nome="tarefa.nome" :estado="tarefa.estado" class="col-xs-12 col-md-4"></tarefa>
  </section>
</template>
<script>
  import Tarefa from './Tarefa'
  import { mapGetters } from 'vuex'
  export default{
    name: 'ListaTarefas',
    components: {Tarefa},
    computed: {
      ...mapGetters([
        'tarefas'
      ])
    }
  }
</script>
<style>
</style>

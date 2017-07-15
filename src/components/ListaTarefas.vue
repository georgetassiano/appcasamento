<template>
  <section>
    <tarefa v-for="(tarefa, index) in lista" :key="tarefa.nome" :nome="tarefa.nome" :estado="tarefa.estado"></tarefa>
  </section>
</template>
<script>
  import Tarefa from './Tarefa'
  export default{
    name: 'ListaTarefas',
    components: {Tarefa},
    data () {
      return {
        lista: [{'nome': 'teste', 'estado': 'concluida'}, {'nome': 'teste1', 'estado': 'concluida1'}, {'nome': 'teste2', 'estado': 'concluida2'}]
      }
    }
  }
</script>
<style>
</style>

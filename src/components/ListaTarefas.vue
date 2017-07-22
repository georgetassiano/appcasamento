<template>
  <section class="container">
    <header>
      <router-view></router-view>
      <h1>Lista de tarefas cadastradas</h1>
      <router-link to="/tarefas/novatarefa" tag="button" class="btn btn-success">Adicionar nova tarefa</router-link>
    </header>
    <div class="row">
      <tarefa v-for="(tarefa, index) in tarefas" :key="tarefa.id" :tarefa="tarefa" @alterar="carregarFormulario(tarefa)" class="col-xs-12 col-md-6"></tarefa>
    </div>
  </section>
</template>
<script>
  import Tarefa from './Tarefa'
  import { mapGetters } from 'vuex'
  export default{
    name: 'ListaTarefas',
    components: {Tarefa},
    data () {
      return {
        tarefa: {}
      }
    },
    computed: {
      ...mapGetters([
        'tarefas'
      ])
    },
    mounted () {
      this.$store.dispatch('carregarTarefas')
    },
    methods: {
      carregarFormulario (tarefa) {
        this.tarefa = JSON.parse(JSON.stringify(tarefa))
        this.$router.push({name: 'EdicaoTarefa', params: { 'tarefa': this.tarefa }})
      }
    }
  }
</script>
<style>
</style>

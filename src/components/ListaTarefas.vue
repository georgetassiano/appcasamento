<template>
  <section class="row">
    <header>
      <formulario-edicao-tarefa :tarefa="tarefa" v-if="edicao" @fechar="fecharEdicao()"></formulario-edicao-tarefa>
    </header>
    <tarefa v-for="(tarefa, index) in tarefas" :key="tarefa.id" :tarefa="tarefa" @alterar="carregarFormulario(tarefa)" class="col-xs-12 col-md-4"></tarefa>
  </section>
</template>
<script>
  import Tarefa from './Tarefa'
  import { mapGetters } from 'vuex'
  import FormularioEdicaoTarefa from './FormularioEdicaoTarefa'
  export default{
    name: 'ListaTarefas',
    components: {Tarefa, FormularioEdicaoTarefa},
    data () {
      return {
        edicao: false,
        tarefa: {}
      }
    },
    computed: {
      ...mapGetters([
        'tarefas'
      ])
    },
    methods: {
      carregarFormulario (tarefa) {
        this.tarefa = JSON.parse(JSON.stringify(tarefa))
        this.edicao = true
      },
      fecharEdicao () {
        this.edicao = false
        this.tarefa = {}
      }
    }
  }
</script>
<style>
</style>

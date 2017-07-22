<template>
  <section>
    <form @submit.prevent="adicionar" autocomplete="off">
      <div class="form-group">
        <label>Nome da tarefa</label>
        <input type="text" v-model.trim="tarefa.nome" class="form-control" required autofocus>
      </div>
      <input type="submit" class="btn btn-primary">
    </form>
    <router-link to="/tarefas" tag="button" class="btn btn-danger">fechar</router-link>
  </section>
</template>
<script>
  import { mapActions } from 'vuex'
  export default{
    name: 'FormularioTarefa',
    data () {
      return {
        tarefa: {
          'id': '',
          'nome': '',
          'estado': false
        }
      }
    },
    methods: {
      ...mapActions([
        'adicionarTarefa'
      ]),
      adicionar () {
        this.adicionarTarefa(this.tarefa)
        this.tarefa.nome = ''
      }
    }
  }
</script>
<style>
</style>

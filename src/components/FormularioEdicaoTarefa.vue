<template>
  <section>
    <form @submit.prevent="alterar()" autocomplete="off">
      <div class="form-group">
        <label>Nome da tarefa</label>
        <input type="text" v-model.trim="tarefa.nome" class="form-control" required>
      </div>
      <input type="submit" class="btn btn-primary">
    </form>
    <router-link to="/tarefas" tag="button" class="btn btn-danger">fechar</router-link>
  </section>
</template>
<script>
  import { mapActions } from 'vuex'
  export default{
    name: 'FormularioEdicaoTarefa',
    computed: {
      tarefa () {
        return this.$route.params.tarefa
      }
    },
    methods: {
      ...mapActions([
        'alterarTarefa'
      ]),
      alterar () {
        this.alterarTarefa(this.tarefa)
        this.$router.push('/tarefas')
      }
    }
  }
</script>
<style>
</style>

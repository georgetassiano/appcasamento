<template>
  <section>
    <form @submit.prevent="alterar()">
      <div class="form-group">
        <label>Nome da tarefa</label>
        <input type="text" v-model="tarefa.nome" class="form-control">
      </div>
      <input type="submit" class="btn btn-primary">
    </form>
  </section>
</template>
<script>
  import { mapActions } from 'vuex'
  export default{
    name: 'FormularioEdicaoTarefa',
    props: ['tarefa'],
    methods: {
      ...mapActions([
        'alterarTarefa'
      ]),
      alterar () {
        this.alterarTarefa(this.tarefa)
        this.$emit('fechar')
      }
    }
  }
</script>
<style>
</style>

<template>
  <section>
    <form @submit.prevent="adicionar">
      <div class="form-group">
        <label>Nome da tarefa</label>
        <input type="text" v-model="nome" class="form-control">
      </div>
      <input type="submit" class="btn btn-primary">
    </form>
  </section>
</template>
<script>
  import { mapActions } from 'vuex'
  export default{
    name: 'FormularioTarefa',
    data () {
      return {
        nome: ''
      }
    },
    methods: {
      ...mapActions([
        'adicionarTarefa'
      ]),
      adicionar () {
        this.adicionarTarefa({'nome': this.nome})
        this.nome = ''
      }
    }
  }
</script>
<style>
</style>

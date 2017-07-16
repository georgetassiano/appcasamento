<template>
  <section>
    <form @submit.prevent="adicionar()">
      <div class="form-group">
        <label>Nome da tarefa</label>
        <input type="text" v-model="nome" class="form-control">
      </div>
      <input type="submit" class="btn btn-primary">
    </form>
  </section>
</template>
<script>
  export default{
    name: 'FormularioTarefa',
    data () {
      return {
        nome: ''
      }
    },
    methods: {
      adicionar () {}
    }
  }
</script>
<style>
</style>

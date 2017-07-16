<template>
  <section>
    <form @submit.prevent="adicionar()">
      <div class="form-group">
        <label>Nome da despesa</label>
        <input type="text" v-model="nome" class="form-control">
      </div>
      <div class="form-group">
        <label>Valor</label>
        <input type="number" v-model="valor" class="form-control">
      </div>
      <input type="submit" class="btn btn-primary">
    </form>
  </section>
</template>
<script>
  export default{
    name: 'FormularioDespesa',
    data () {
      return {
        nome: '',
        valor: 0
      }
    },
    methods: {
      adicionar () {}
    }
  }
</script>
<style>
</style>

<template>
  <section>
    <form @submit.prevent="adicionar()">
      <div class="form-group">
        <label>Novo valor da poupança</label>
        <input type="number" v-model="valor" class="form-control">
      </div>
      <input type="submit" class="btn btn-primary">
    </form>
  </section>
</template>
<script>
  export default{
    name: 'FormularioPoupanca',
    data () {
      return {
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

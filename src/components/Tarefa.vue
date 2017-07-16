<template>
  <div class="card card-outline-primary text-center">
    <div class="card-block">
      <h3 class="card-title">{{nome}}</h3>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'Tarefa',
    props: ['nome', 'estado'],
    methods: {
      finalizar () {
      }
    }
  }
</script>
<style>
</style>

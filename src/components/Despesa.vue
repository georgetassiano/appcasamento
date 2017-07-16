<template>
  <div class="card card-outline-danger text-center">
    <div class="card-block">
      <h3 class="card-title">{{nome}}</h3>
      <p class="card-text">{{valor}}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'Despesa',
    props: ['nome', 'valor', 'estado'],
    methods: {
      finalizar () {
      }
    }
  }
</script>
<style>
</style>

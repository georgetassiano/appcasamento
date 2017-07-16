<template>
  <div class="card card-outline-danger text-center">
    <div class="card-block">
      <h3 class="card-title">{{nome}}</h3>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{valor}}</li>
        <li class="list-group-item"><a :href="url" class="card-link">Ver Produto</a></li>
        <li class="list-group-item">{{quantidade}}</li>
        <li class="list-group-item">{{tipo}}</li>
        <li class="list-group-item">{{paraPresente}}</li>
      </ul>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'Produto',
    props: ['nome', 'valor', 'url', 'quantidade', 'tipo', 'paraPresente', 'estado']
  }
</script>
<style>
</style>

<template>
  <p>{{nome}}</p>
  <p>{{valor}}</p>
  <a :href="url">Ver Produto</a>
  <p>{{quantidade}}</p>
  <p>{{tipo}}</p>
  <p>{{presente}}</p>
  <p>{{estado}}</p>
</template>
<script>
  export default{
    name: 'Produto',
    props: ['nome', 'valor', 'url', 'quantidade', 'tipo', 'paraPresente', 'estado']
  }
</script>
<style>
</style>

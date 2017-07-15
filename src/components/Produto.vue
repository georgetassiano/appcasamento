<template>
  <div>
    <p>{{nome}}</p>
    <p>{{valor}}</p>
    <a :href="url" target="_blank">Ver Produto</a>
    <p>{{quantidade}}</p>
    <p>{{tipo}}</p>
    <p>{{paraPresente}}</p>
    <p>{{estado}}</p>
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

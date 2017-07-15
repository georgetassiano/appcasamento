<template>
  <div>
    <p>{{nome}}</p>
    <p>{{valor}}</p>
    <p>{{estado}}</p>
  </div>
</template>
<script>
  export default{
    name: 'Despesa',
    props: ['nome', 'valor', 'estado']
  }
</script>
<style>
</style>

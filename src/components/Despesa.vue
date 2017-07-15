<template>
  <div>
    <p>{{nome}}</p>
    <p>{{estado}}</p>
  </div>
</template>
<script>
  export default{
    name: 'Despesa',
    props: ['nome', 'estado']
  }
</script>
<style>
</style>

<template>
  <p>{{nome}}</p>
  <p>{{estado}}</p>
</template>
<script>
  export default{
    name: 'Tarefa',
    props: ['nome', 'estado']
  }
</script>
<style>
</style>

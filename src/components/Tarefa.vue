<template>
  <div>
    <p>{{nome}}</p>
    <p>{{estado}}</p>
  </div>
</template>
<script>
  export default{
    name: 'Tarefa',
    props: ['nome', 'estado']
  }
</script>
<style>
</style>

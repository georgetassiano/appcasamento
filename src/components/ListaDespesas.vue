<template>
  <section>
  <despesa v-for="despesa in lista" :nome="despesa.nome" :estado="despesa.estado"></despesa>
</section>
</template>
<script>
  import Despesa from './Despesa'
  export default{
    name: 'ListaDespesas',
    components: {Despesa},
    data () {
      return {
        lista: [{'nome': 'teste', 'estado': 'concluida'}, {'nome': 'teste1', 'estado': 'concluida1'}, {'nome': 'teste2', 'estado': 'concluida2'}]
      }
    }
  }
</script>
<style>
</style>

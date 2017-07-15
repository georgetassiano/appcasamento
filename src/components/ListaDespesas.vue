<template>
  <section>
  <despesa v-for="(despesa, index) in lista" :key="despesa.nome" :nome="despesa.nome" :valor="despesa.valor" :estado="despesa.estado"></despesa>
</section>
</template>
<script>
  import Despesa from './Despesa'
  export default{
    name: 'ListaDespesas',
    components: {Despesa},
    data () {
      return {
        lista: [{'nome': 'teste', 'valor': 3000, 'estado': 'concluida'}, {'nome': 'teste1', 'valor': 3000, 'estado': 'concluida1'},
        {'nome': 'teste2', 'valor': 3000, 'estado': 'concluida2'}]
      }
    }
  }
</script>
<style>
</style>

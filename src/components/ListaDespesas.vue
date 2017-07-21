<template>
  <section class="row">
    <despesa v-for="(despesa, index) in despesas" :key="despesa.id" :despesa="despesa" class="col-xs-12 col-md-4"></despesa>
  </section>
</template>
<script>
  import Despesa from './Despesa'
  import { mapGetters } from 'vuex'
  export default{
    name: 'ListaDespesas',
    components: {Despesa},
    computed: {
      ...mapGetters([
        'despesas'
      ])
    }
  }
</script>
<style>
</style>

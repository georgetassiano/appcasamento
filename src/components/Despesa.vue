<template>
  <div class="card card-outline-danger text-center">
    <div class="card-block">
      <h3 class="card-title">{{despesa.nome}}</h3>
      <p class="card-text">{{despesa.valor}}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
      <button class="btn btn-danger" @click="removerDespesa({'id': produto.id})">fechar</button>
      <button class="btn btn-warning" @click="alterar()">editar</button>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default{
    name: 'Despesa',
    props: ['despesa'],
    methods: {
      ...mapActions([
        'removerDespesa'
      ]),
      alterar () {
        this.$emit('alterar')
      }
    }
  }
</script>
<style>
</style>

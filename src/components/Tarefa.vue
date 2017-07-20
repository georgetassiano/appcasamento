<template>
  <div class="card card-outline-primary text-center">
    <div class="card-block">
      <h3 class="card-title">{{nome}}</h3>
      <a href="#" class="btn btn-primary">Go somewhere</a>
      <button class="btn btn-danger" @click="removerTarefa({'id': this.identificador})">fechar</button>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default{
    name: 'Tarefa',
    props: ['identificador', 'nome', 'estado'],
    methods: {
      ...mapActions([
        'removerTarefa'
      ])
    }
  }
</script>
<style>
</style>

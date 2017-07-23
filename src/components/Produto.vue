<template>
  <div class="card card-outline-danger text-center">
    <div class="card-block">
      <h3 class="card-title"><del v-if="produto.estado">{{produto.nome}}</del><span v-else>{{produto.nome}}</span></h3>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{produto.valor}}</li>
        <li class="list-group-item"><a :href="produto.url" class="card-link">Ver Produto</a></li>
        <li class="list-group-item">{{produto.quantidade}}</li>
        <li class="list-group-item">{{produto.importante}}</li>
        <li class="list-group-item">{{produto.paraPresente}}</li>
      </ul>
      <button class="btn btn-primary" @click="mudarEstadoProduto(produto)">Comprado</button>
      <button class="btn btn-danger" @click="removerProduto({'id': produto.id})">excluir</button>
      <button class="btn btn-warning" @click="alterar()">editar</button>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default{
    name: 'Produto',
    props: ['produto'],
    methods: {
      ...mapActions([
        'removerProduto',
        'mudarEstadoProduto'
      ]),
      alterar () {
        this.$emit('alterar')
      }
    }
  }
</script>
<style>
</style>

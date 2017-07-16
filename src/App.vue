<template>
  <div id="app" class="container">
    <nav class="navbar fixed-top navbar-light bg-faded">
  <a class="navbar-brand" href="#">Fixed top</a>
</nav>
    <formulario-despesa></formulario-despesa>
    <formulario-poupanca></formulario-poupanca>
    <formulario-produto></formulario-produto>
    <formulario-tarefa></formulario-tarefa>
    <lista-despesas></lista-despesas>
    <lista-tarefas></lista-tarefas>
    <lista-produtos></lista-produtos>
    <resumo></resumo>
  </div>
</template>

<script>
import ListaDespesas from './components/ListaDespesas'
import ListaTarefas from './components/ListaTarefas'
import ListaProdutos from './components/ListaProdutos'
import Resumo from './components/Resumo'
import FormularioDespesa from './components/FormularioDespesa'
import FormularioPoupanca from './components/FormularioPoupanca'
import FormularioProduto from './components/FormularioProduto'
import FormularioTarefa from './components/FormularioTarefa'
export default {
  name: 'app',
  components: {ListaDespesas, ListaTarefas, ListaProdutos, Resumo, FormularioDespesa, FormularioPoupanca, FormularioProduto, FormularioTarefa}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link to="/" class="navbar-brand">App</router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/poupancas" class="nav-link">Poupancas</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/despesas" class="nav-link">Despesas</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/produtos" class="nav-link">Produtos</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tarefas" class="nav-link">Tarefas</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
    <resumo></resumo>
  </div>
</template>

<script>
/*
 * Root component
 */
import Resumo from './components/Resumo'
export default {
  name: 'app',
  components: {Resumo}
}
</script>

<style></style>

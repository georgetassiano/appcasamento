<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout>
      <header slot="header" class="toolbar">
        <button class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()">
          <i>menu</i>
        </button>
        <q-toolbar-title :padding="1">
          PlanejamentoJá
        </q-toolbar-title>
      </header>
      <q-tabs slot="navigation">
        <q-tab icon="account_balance" route="/poupancas" exact replace>Poupanças</q-tab>
        <q-tab icon="trending_down" route="/despesas" exact replace>Despesas</q-tab>
        <q-tab icon="local_grocery_store" route="/produtos" exact replace>Produtos</q-tab>
        <q-tab icon="work" route="/tarefas" exact replace>Tarefas</q-tab>
      </q-tabs>
      <!-- Left-side Drawer -->
      <q-drawer ref="leftDrawer">
        <div class="toolbar">
          <q-toolbar-title>
            Resumo das contas
          </q-toolbar-title>
        </div>
        <resumo></resumo>
      </q-drawer>
      <router-view class="layout-view"></router-view>
    </q-layout>
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

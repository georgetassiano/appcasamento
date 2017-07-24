import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes: [
    {
      path: '/',
      name: 'Principal',
      component: load('Principal')
    }, // Default
    {
      path: '/poupancas',
      name: 'Poupancas',
      component: load('ListaPoupancas'),
      children: [
        {
          path: 'novapoupanca',
          name: 'NovaPoupanca',
          component: load('FormularioPoupanca')
        },
        {
          path: 'editarpoupanca',
          name: 'EdicaoPoupanca',
          component: load('FormularioEdicaoPoupanca'),
          props: true
        }
      ]
    },
    {
      path: '/despesas',
      name: 'Despesas',
      component: load('ListaDespesas'),
      children: [
        {
          path: 'novadespesa',
          name: 'NovaDespesa',
          component: load('FormularioDespesa')
        },
        {
          path: 'editardespesa',
          name: 'EdicaoDespesa',
          component: load('FormularioEdicaoDespesa'),
          props: true
        }
      ]
    },
    {
      path: '/produtos',
      name: 'Produtos',
      component: load('ListaProdutos'),
      children: [
        {
          path: 'novoproduto',
          name: 'NovoProduto',
          component: load('FormularioProduto')
        },
        {
          path: 'editarproduto',
          name: 'EdicaoProduto',
          component: load('FormularioEdicaoProduto'),
          props: true
        }
      ]
    },
    {
      path: '/tarefas',
      name: 'Tarefas',
      component: load('ListaTarefas'),
      children: [
        {
          path: 'novatarefa',
          name: 'NovaTarefas',
          component: load('FormularioTarefa')
        },
        {
          path: 'editartarefa',
          name: 'EdicaoTarefa',
          component: load('FormularioEdicaoTarefa'),
          props: true
        }
      ]
    },
    {
      path: '*',
      name: 'Error404',
      component: load('Error404')
    } // Not found
  ]
})

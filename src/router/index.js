import Vue from 'vue'
import Router from 'vue-router'

import Principal from '../components/Principal'

import ListaPoupancas from '../components/ListaPoupancas'
import FormularioPoupanca from '../components/FormularioPoupanca'
import FormularioEdicaoPoupanca from '../components/FormularioEdicaoPoupanca'

import ListaDespesas from '../components/ListaDespesas'
import FormularioDespesa from '../components/FormularioDespesa'
import FormularioEdicaoDespesa from '../components/FormularioEdicaoDespesa'

import ListaProdutos from '../components/ListaProdutos'
import FormularioProduto from '../components/FormularioProduto'
import FormularioEdicaoProduto from '../components/FormularioEdicaoProduto'

import ListaTarefas from '../components/ListaTarefas'
import FormularioTarefa from '../components/FormularioTarefa'
import FormularioEdicaoTarefa from '../components/FormularioEdicaoTarefa'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Principal',
      component: Principal
    },
    {
      path: '/poupancas',
      name: 'Poupancas',
      component: ListaPoupancas,
      children: [
        {
          path: 'novapoupanca',
          name: 'NovaPoupanca',
          component: FormularioPoupanca
        },
        {
          path: 'editarpoupanca',
          name: 'EdicaoPoupanca',
          component: FormularioEdicaoPoupanca,
          props: true
        }
      ]
    },
    {
      path: '/despesas',
      name: 'Despesas',
      component: ListaDespesas,
      children: [
        {
          path: 'novadespesa',
          name: 'NovaDespesa',
          component: FormularioDespesa
        },
        {
          path: 'editardespesa',
          name: 'EdicaoDespesa',
          component: FormularioEdicaoDespesa,
          props: true
        }
      ]
    },
    {
      path: '/produtos',
      name: 'Produtos',
      component: ListaProdutos,
      children: [
        {
          path: 'novoproduto',
          name: 'NovoProduto',
          component: FormularioProduto
        },
        {
          path: 'editarproduto',
          name: 'EdicaoProduto',
          component: FormularioEdicaoProduto,
          props: true
        }
      ]
    },
    {
      path: '/tarefas',
      name: 'Tarefas',
      component: ListaTarefas,
      children: [
        {
          path: 'novatarefa',
          name: 'NovaTarefas',
          component: FormularioTarefa
        },
        {
          path: 'editartarefa',
          name: 'EdicaoTarefa',
          component: FormularioEdicaoTarefa,
          props: true
        }
      ]
    }
  ]
})

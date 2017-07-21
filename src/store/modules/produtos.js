import * as types from '../mutation-types'
import DB from '../../plugins/database'
import { map } from 'lodash'
// estado inicial
const state = {
  produtos: [],
  totalProdutos: 0
}

// getters
const getters = {
  produtos: state => state.produtos,
  totalProdutos: state => state.produtos
}

// actions
const actions = {
  adicionarProduto ({ commit, state }, { nome, valor, url, quantidade, importante, paraPresente }) {
    DB.ref('produtos').push({ 'id': state.produtos.length, nome, valor, url, quantidade, importante, paraPresente })
    commit(types.ADICIONAR_PRODUTO, { 'id': state.produtos.length, nome, valor, url, quantidade, importante, paraPresente })
  },
  adicionarProdutos ({ commit, state }) {
    DB.ref('produtos').on('value', data => {
      const obj = data.val()
      commit(types.ADICIONAR_PRODUTOS, map(obj, produtos => produtos))
    })
  },
  removerProduto ({ commit, state }, { id }) {
    commit(types.REMOVER_PRODUTO, { id })
  },
  mudarEstadoProduto ({ commit, state }, { id }) {
    commit(types.MUDAR_ESTADO_PRODUTO, { id })
  },
  alterarProduto ({ commit, state }, produtoAlterado) {
    commit(types.ALTERAR_PRODUTO, produtoAlterado)
  }
}

// mutations
const mutations = {
  [types.ADICIONAR_PRODUTO] (state, { id, nome, valor, url, quantidade, importante, paraPresente }) {
    state.produtos.push({
      'id': id,
      'nome': nome,
      'valor': valor,
      'url': url,
      'quantidade': quantidade,
      'importante': importante,
      'paraPresente': paraPresente,
      'estado': false
    })
    state.totalProdutos += valor * quantidade
  },
  [types.ADICIONAR_PRODUTOS] (state, produtos) {
    state.produtos = produtos
  },
  [types.REMOVER_PRODUTO] (state, { id }) {
    state.produtos.splice(state.produtos.findIndex(d => d.id === id), 1)
  },
  [types.MUDAR_ESTADO_PRODUTO] (state, { id }) {
    let indexProduto = state.produtos.findIndex(d => d.id === id)
    state.produtos[indexProduto].estado = !state.produtos[indexProduto].estado
  },
  [types.ALTERAR_PRODUTO] (state, produtoAlterado) {
    let indexProduto = state.produtos.findIndex(d => d.id === produtoAlterado.id)
    state.totalProdutos -= state.produtos[indexProduto].valor * state.produtos[indexProduto].quantidade
    state.produtos[indexProduto] = produtoAlterado
    state.totalProdutos += state.produtos[indexProduto].valor * state.produtos[indexProduto].quantidade
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

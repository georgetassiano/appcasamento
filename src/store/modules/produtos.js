import * as types from '../mutation-types'
import DB from '../../plugins/database'
import { map, sum } from 'lodash'
// estado inicial
const state = {
  produtos: []
}

// getters
const getters = {
  produtos: state => state.produtos,
  totalProdutos () {
    return sum(map(state.produtos, o => o.valor * o.quantidade))
  }
}

// actions
const actions = {
  adicionarProduto ({ commit, state }, produto) {
    DB.ref('produtos').push(produto)
  },
  carregarProdutos ({ commit, state }) {
    DB.ref('produtos').on('value', data => {
      const obj = data.val()
      commit(types.CARREGAR_PRODUTOS, map(obj, (produto, index) => {
        produto.id = index
        return produto
      }))
    })
  },
  removerProduto ({ commit, state }, { id }) {
    DB.ref(`produtos/${id}`).remove()
  },
  mudarEstadoProduto ({ commit, state }, produto) {
    let produtoCopia = JSON.parse(JSON.stringify(produto))
    produtoCopia.estado = !produtoCopia.estado
    DB.ref(`produtos/${produto.id}`).update(produtoCopia)
  },
  alterarProduto ({ commit, state }, produtoAlterado) {
    DB.ref(`produtos/${produtoAlterado.id}`).update(produtoAlterado)
  }
}

// mutations
const mutations = {
  [types.CARREGAR_PRODUTOS] (state, produtos) {
    state.produtos = produtos
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

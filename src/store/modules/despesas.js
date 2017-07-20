import * as types from '../mutation-types'

// estado inicial
const state = {
  despesas: [],
  totalDespesas: 0
}

// getters
const getters = {
  despesas: state => state.despesas,
  totalDespesas: state => state.totalDespesas
}

// actions
const actions = {
  adicionarDespesa ({ commit, state }, { nome, valor }) {
    commit(types.ADICIONAR_DESPESA, { 'id': Math.floor(Math.random() * 100), nome, valor })
  },
  removerDespesa ({ commit, state }, { id }) {
    commit(types.REMOVER_DESPESA, { id })
  },
  mudarEstadoDespesa ({ commit, state }, { id }) {
    commit(types.MUDAR_ESTADO_DESPESA, { id })
  },
  alterarDespesa ({ commit, state }, despesaAlterada) {
    commit(types.ALTERAR_DESPESA, despesaAlterada)
  }
}

// mutations
const mutations = {
  [types.ADICIONAR_DESPESA] (state, { id, nome, valor }) {
    state.despesas.push({'id': id, 'nome': nome, 'valor': valor, 'estado': false})
    state.totalDespesas += valor
  },
  [types.REMOVER_DESPESA] (state, { id }) {
    state.despesas.splice(state.despesas.findIndex(d => d.id === id), 1)
  },
  [types.MUDAR_ESTADO_DESPESA] (state, { id }) {
    let indexDespesa = state.despesas.findIndex(d => d.id === id)
    state.despesas[indexDespesa].estado = !state.despesas[indexDespesa].estado
  },
  [types.ALTERAR_DESPESA] (state, despesaAlterada) {
    let indexDespesa = state.despesas.findIndex(d => d.id === despesaAlterada.id)
    state.totalDespesas -= state.despesas[indexDespesa].valor
    state.despesas[indexDespesa] = despesaAlterada
    state.totalDespesas += state.despesas[indexDespesa].valor
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

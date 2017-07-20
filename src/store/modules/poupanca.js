import * as types from '../mutation-types'

// estado inicial
const state = {
  valorPoupanca: 0
}

// getters
const getters = {
  valorPoupanca: state => state.valorPoupanca
}

// actions
const actions = {
  alterarPoupanca ({ commit, state }, { valor }) {
    commit(types.ALTERAR_POUPANCA, { valor })
  }
}

// mutations
const mutations = {
  [types.ALTERAR_POUPANCA] (state, { valor }) {
    state.valorPoupanca = valor
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

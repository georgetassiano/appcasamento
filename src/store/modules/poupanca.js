import * as types from '../mutation-types'
import DB from '../../plugins/database'
import { map, sum } from 'lodash'

// estado inicial
const state = {
  poupancas: []
}

// getters
const getters = {
  poupancas: state => state.poupancas,
  totalPoupancas () {
    return sum(map(state.poupancas, o => o.valor))
  }
}

// actions
const actions = {
  adicionarPoupanca ({ commit, state }, poupanca) {
    DB.ref('poupancas').push(poupanca)
  },
  carregarPoupancas ({ commit, state }) {
    DB.ref('poupancas').on('value', data => {
      const obj = data.val()
      commit(types.CARREGAR_POUPANCAS, map(obj, (poupanca, index) => {
        poupanca.id = index
        return poupanca
      }))
    })
  },
  removerPoupanca ({ commit, state }, { id }) {
    DB.ref(`poupancas/${id}`).remove()
  },
  alterarPoupanca ({ commit, state }, poupanca) {
    DB.ref(`poupancas/${poupanca.id}`).update(poupanca)
  }
}

// mutations
const mutations = {
  [types.CARREGAR_POUPANCAS] (state, poupancas) {
    state.poupancas = poupancas
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

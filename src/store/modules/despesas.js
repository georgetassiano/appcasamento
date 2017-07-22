import * as types from '../mutation-types'
import DB from '../../plugins/database'
import { map, sum } from 'lodash'

// estado inicial
const state = {
  despesas: []
}

// getters
const getters = {
  despesas: state => state.despesas,
  totalDespesas () {
    return sum(map(state.despesas, o => o.valor))
  }
}

// actions
const actions = {
  adicionarDespesa ({ commit, state }, despesa) {
    DB.ref('despesas').push(despesa)
  },
  carregarDespesas ({ commit, state }) {
    DB.ref('despesas').on('value', data => {
      const obj = data.val()
      commit(types.CARREGAR_DESPESAS, map(obj, (despesa, index) => {
        despesa.id = index
        return despesa
      }))
    })
  },
  removerDespesa ({ commit, state }, { id }) {
    DB.ref(`despesas/${id}`).remove()
  },
  mudarEstadoDespesa ({ commit, state }, despesa) {
    despesa.estado = !despesa.estado
    DB.ref(`despesas/${despesa.id}`).update(despesa)
  },
  alterarDespesa ({ commit, state }, despesaAlterada) {
    DB.ref(`despesas/${despesaAlterada.id}`).update(despesaAlterada)
  }
}

// mutations
const mutations = {
  [types.CARREGAR_DESPESAS] (state, despesas) {
    state.despesas = despesas
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

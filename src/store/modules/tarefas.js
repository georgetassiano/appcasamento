import * as types from '../mutation-types'
import DB from '../../plugins/database'
import { map } from 'lodash'

// estado inicial
const state = {
  tarefas: []
}

// getters
const getters = {
  tarefas: state => state.tarefas
}

// actions
const actions = {
  adicionarTarefa ({ commit, state }, tarefa) {
    DB.ref('tarefas').push(tarefa)
  },
  carregarTarefas ({ commit, state }) {
    DB.ref('tarefas').on('value', data => {
      const obj = data.val()
      commit(types.CARREGAR_TAREFAS, map(obj, (tarefa, index) => {
        tarefa.id = index
        return tarefa
      }))
    })
  },
  removerTarefa ({ commit, state }, { id }) {
    DB.ref(`tarefas/${id}`).remove()
  },
  mudarEstadoTarefa ({ commit, state }, tarefa) {
    tarefa.estado = !tarefa.estado
    DB.ref(`tarefas/${tarefa.id}`).update(tarefa)
  },
  alterarTarefa ({ commit, state }, tarefaAlterada) {
    DB.ref(`tarefas/${tarefaAlterada.id}`).update(tarefaAlterada)
  }
}

// mutations
const mutations = {
  [types.CARREGAR_TAREFAS] (state, tarefas) {
    state.tarefas = tarefas
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

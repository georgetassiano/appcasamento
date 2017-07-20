import * as types from '../mutation-types'

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
  adicionarTarefa ({ commit, state }, { nome }) {
    commit(types.ADICIONAR_TAREFA, { 'id': Math.floor(Math.random() * 100), nome })
  },
  removerTarefa ({ commit, state }, { id }) {
    commit(types.REMOVER_TAREFA, { id })
  },
  mudarEstadoTarefa ({ commit, state }, { id }) {
    commit(types.MUDAR_ESTADO_TAREFA, { id })
  },
  alterarTarefa ({ commit, state }, tarefaAlterada) {
    commit(types.ALTERAR_TAREFA, tarefaAlterada)
  }
}

// mutations
const mutations = {
  [types.ADICIONAR_TAREFA] (state, { id, nome }) {
    state.tarefas.push({ 'identificador': id, 'nome': nome, 'estado': false })
  },
  [types.REMOVER_TAREFA] (state, { id }) {
    state.tarefas.splice(state.tarefas.findIndex(d => d.id === id), 1)
  },
  [types.MUDAR_ESTADO_TAREFA] (state, { id }) {
    let indexTarefa = state.tarefas.findIndex(d => d.id === id)
    state.tarefas[indexTarefa].estado = !state.tarefas[indexTarefa].estado
  },
  [types.ALTERAR_TAREFA] (state, tarefaAlterada) {
    let indexTarefa = state.tarefas.findIndex(d => d.id === tarefaAlterada.id)
    state.tarefas[indexTarefa] = tarefaAlterada
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

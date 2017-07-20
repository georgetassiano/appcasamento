import Vue from 'vue'
import Vuex from 'vuex'
import despesas from './modules/despesas'
import poupanca from './modules/poupanca'
import produtos from './modules/produtos'
import tarefas from './modules/tarefas'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    despesas,
    poupanca,
    produtos,
    tarefas
  },
  strict: debug
})

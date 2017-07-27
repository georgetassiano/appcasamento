<template>
  <section class="layout-padding">
    <div class="card">
      <div class="card-title bg-primary text-white">
        Lista de tarefas
      </div>
      <div class="card-content">
        Clique sobre um item da lista para visualizar as ações sobre ele.
      </div>
      <div class="list bordered striped highlight item-delimiter">
        <tarefa v-for="(tarefa, index) in tarefas" :key="tarefa.id" :tarefa="tarefa" class="item item-link"></tarefa>
      </div>
    </div>
    <button class="green circular push fixed-bottom-right" @click="adicionar(adicionarTarefa)" style="right: 18px; bottom: 5px;">
      <i>add</i>
    </button>
    <button
      v-back-to-top.animate="{offset: 500, duration: 200}"
      class="primary circular fixed-bottom-right animate-pop"
      style="margin: 0 75px 5px 0"
    >
      <i>keyboard_arrow_up</i>
    </button>
  </section>
</template>
<script>
  import Tarefa from './Tarefa'
  import { mapGetters, mapActions } from 'vuex'
  import { Toast, Dialog } from 'quasar'
  export default{
    name: 'ListaTarefas',
    components: {Tarefa},
    computed: {
      ...mapGetters([
        'tarefas'
      ])
    },
    methods: {
      ...mapActions([
        'adicionarTarefa'
      ]),
      adicionar (adicionarTarefa) {
        Dialog.create({
          title: 'Adicionar tarefa',
          message: 'Informe os campos da nova tarefa',
          form: {
            name: {
              type: 'textbox',
              label: 'nome',
              model: ''
            }
          },
          buttons: [
            'Cancelar',
            {
              label: 'Ok',
              handler (data) {
                adicionarTarefa({'id': '', 'nome': data.name, 'estado': false})
                Toast.create('Tarefa adicionada')
              }
            }
          ]
        })
      }
    }
  }
</script>
<style>
</style>

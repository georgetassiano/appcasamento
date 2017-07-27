<template>
  <section class="layout-padding">
    <div class="card">
      <div class="card-title bg-primary text-white">
        Lista de despesas
      </div>
      <div class="card-content">
        Clique sobre um item da lista para visualizar suas informações. E clicando em seu campo de informações aparecerá o menu de ações dele.
      </div>
      <div class="list bordered striped highlight item-delimiter">
        <despesa v-for="(despesa, index) in despesas" :key="despesa.id" :despesa="despesa"></despesa>
      </div>
    </div>
    <button class="green circular push absolute-bottom-right" @click="adicionar(adicionarDespesa)" style="right: 18px; bottom: 5px;">
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
  import Despesa from './Despesa'
  import { mapGetters, mapActions } from 'vuex'
  import { Toast, Dialog } from 'quasar'
  export default{
    name: 'ListaDespesas',
    components: {Despesa},
    computed: {
      ...mapGetters([
        'despesas'
      ])
    },
    methods: {
      ...mapActions([
        'adicionarDespesa'
      ]),
      adicionar (adicionarDespesa) {
        Dialog.create({
          title: 'Adicionar despesa',
          message: 'Informe os campos da nova despesa',
          form: {
            name: {
              type: 'textbox',
              label: 'nome',
              model: ''
            },
            valor: {
              type: 'numeric',
              label: 'valor R$',
              model: 0,
              step: 0.01,
              min: 0
            }
          },
          buttons: [
            'Cancelar',
            {
              label: 'Ok',
              handler (data) {
                adicionarDespesa({
                  'id': '',
                  'nome': data.name,
                  'valor': data.valor,
                  'estado': false
                })
                Toast.create('Despesa adicionada')
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

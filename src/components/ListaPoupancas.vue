<template>
  <section class="layout-padding">
    <div class="card">
      <div class="card-title bg-primary text-white">
        Lista de poupanças
      </div>
      <div class="card-content">
        Clique sobre um item da lista para visualizar suas informações. E clicando em seu campo de informações aparecerá o menu de ações dele.
      </div>
      <div class="list bordered striped highlight item-delimiter">
        <poupanca v-for="(poupanca, index) in poupancas" :key="poupanca.id" :poupanca="poupanca"></poupanca>
      </div>
    </div>
    <button class="green circular push absolute-bottom-right" @click="adicionar(adicionarPoupanca)" style="right: 18px; bottom: 5px;">
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
  import Poupanca from './Poupanca.vue'
  import { mapGetters, mapActions } from 'vuex'
  import { Toast, Dialog } from 'quasar'
  export default{
    name: 'ListaPoupancas',
    components: {Poupanca},
    computed: {
      ...mapGetters([
        'poupancas'
      ])
    },
    methods: {
      ...mapActions([
        'adicionarPoupanca'
      ]),
      adicionar (adicionarPoupanca) {
        Dialog.create({
          title: 'Adicionar poupança',
          message: 'Informe os campos da nova poupança',
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
                adicionarPoupanca({
                  'id': '',
                  'nome': data.name,
                  'valor': data.valor
                })
                Toast.create('Poupança adicionada')
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

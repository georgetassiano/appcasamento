<template>
  <section>
    <div class="layout-padding">
      <div class="card">
        <div class="card-title bg-primary text-white">
          Lista de produtos
        </div>
        <div class="card-content">
          Clique sobre um item da lista para visualizar suas informações. E clicando em seu campo de informações aparecerá o menu de ações dele.
        </div>
        <div class="list bordered striped highlight item-delimiter">
          <produto v-for="(produto, index) in produtos" :key="produto.id" :produto="produto"></produto>
        </div>
      </div>
      <button class="green circular push fixed-bottom-left" @click="adicionar(adicionarProduto)" style="left: 18px; bottom: 5px;">
        <i>add</i>
      </button>
    </div>
  </section>
</template>
<script>
  import Produto from './Produto'
  import { mapGetters, mapActions } from 'vuex'
  import { Toast, Dialog } from 'quasar'
  export default{
    name: 'ListaProdutos',
    components: {Produto},
    computed: {
      ...mapGetters([
        'produtos'
      ])
    },
    methods: {
      ...mapActions([
        'adicionarProduto'
      ]),
      adicionar (adicionarProduto) {
        Dialog.create({
          title: 'Adicionar produto',
          message: 'Informe os campos do novo produto',
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
            },
            quantidade: {
              type: 'numeric',
              label: 'quantidade',
              model: 1,
              min: 1,
              max: 100
            },
            url: {
              type: 'textbox',
              label: 'link',
              model: ''
            },
            header1: {
              type: 'heading',
              label: 'Importância'
            },
            importante: {
              type: 'radio',
              model: true,
              items: [
                {label: 'importante', value: true},
                {label: 'preferencial', value: false}
              ]
            },
            header2: {
              type: 'heading',
              label: 'Presenteável'
            },
            paraPresente: {
              type: 'radio',
              model: false,
              items: [
                {label: 'para presente', value: true},
                {label: 'comprar direto', value: false}
              ]
            }
          },
          buttons: [
            'Cancelar',
            {
              label: 'Ok',
              handler (data) {
                adicionarProduto({
                  'id': '',
                  'nome': data.name,
                  'valor': data.valor,
                  'quantidade': data.quantidade,
                  'url': data.url,
                  'importante': data.importante,
                  'paraPresente': data.paraPresente,
                  'estado': false
                })
                Toast.create('Produto adicionado')
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

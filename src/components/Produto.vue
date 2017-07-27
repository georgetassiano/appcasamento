<template>
  <q-collapsible :icon="produto.estado?'check_box':'indeterminate_check_box'" :label="produto.nome" :style="{'text-decoration':marcado}">
    <div>
      <div class="list bordered striped highlight item-delimiter">
        <div class="item item-link" @click="showActionSheetWithIcons(produto, mudarEstadoProduto, removerProduto, alterarProduto)">
          <div class="item-content">
            Valor: R$ {{produto.valor}}
          </div>
        </div>
        <div class="item item-link" @click="showActionSheetWithIcons(produto, mudarEstadoProduto, removerProduto, alterarProduto)">
          <div class="item-content">
            Quantidade: {{produto.quantidade}}
          </div>
        </div>
        <div class="item item-link" @click="showActionSheetWithIcons(produto, mudarEstadoProduto, removerProduto, alterarProduto)">
          <div class="item-content">
            Importante: <i v-if="produto.importante">done</i><i v-else>clear</i>
          </div>
        </div>
        <div class="item item-link" @click="showActionSheetWithIcons(produto, mudarEstadoProduto, removerProduto, alterarProduto)">
          <div class="item-content">
            Para presente: <i v-if="produto.paraPresente">done</i><i v-else>clear</i>
          </div>
        </div>
        <div class="item item-link">
          <div class="item-content">
            <a target="_blank" @click="abrirURL(produto.url)">Link do produto</a>
          </div>
        </div>
      </div>
    </div>
  </q-collapsible>
</template>
<script>
  import { mapActions } from 'vuex'
  import { ActionSheet, Toast, Dialog, Utils } from 'quasar'
  export default{
    name: 'Produto',
    props: ['produto'],
    computed: {
      marcado () {
        return this.produto.estado ? 'line-through' : 'none'
      }
    },
    methods: {
      ...mapActions([
        'removerProduto',
        'mudarEstadoProduto',
        'alterarProduto'
      ]),
      abrirURL (url) {
        Utils.openURL(url)
      },
      showActionSheetWithIcons (produto, mudarEstadoProduto, removerProduto, alterarProduto) {
        ActionSheet.create({
          title: 'Menu de Ações',
          gallery: true,
          actions: [
            {
              label: 'Deletar',
              icon: 'delete',
              handler () {
                Dialog.create({
                  title: 'Confirmação de exclusão',
                  message: 'Você realmente deseja apagar o produto?',
                  buttons: [
                    {
                      label: 'Não',
                      handler () {
                        Toast.create('Ação cancelada...')
                      }
                    },
                    {
                      label: 'Sim',
                      handler () {
                        removerProduto({'id': produto.id})
                        Toast.create('Produto deletado')
                      }
                    }
                  ]
                })
              }
            },
            {
              label: produto.estado ? 'Não comprado' : 'Comprado',
              icon: produto.estado ? 'indeterminate_check_box' : 'check_box',
              handler () {
                mudarEstadoProduto(produto)
                if (produto.estado) {
                  Toast.create('Produto marcado como não comprado')
                }
                else {
                  Toast.create('Produto marcado como comprado')
                }
              }
            },
            {
              label: 'Editar',
              icon: 'create',
              handler () {
                Dialog.create({
                  title: 'Alterar produto',
                  message: 'Edite as informações do produto',
                  form: {
                    name: {
                      type: 'textbox',
                      label: 'nome',
                      model: produto.nome
                    },
                    valor: {
                      type: 'numeric',
                      label: 'valor R$',
                      model: produto.valor,
                      step: 0.01,
                      min: 0
                    },
                    quantidade: {
                      type: 'numeric',
                      label: 'quantidade',
                      model: produto.quantidade,
                      min: 1,
                      max: 100
                    },
                    url: {
                      type: 'textbox',
                      label: 'link',
                      model: produto.url
                    },
                    importante: {
                      type: 'radio',
                      model: produto.importante,
                      items: [
                        {label: 'importante', value: true},
                        {label: 'preferencial', value: false}
                      ]
                    },
                    paraPresente: {
                      type: 'radio',
                      model: produto.paraPresente,
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
                        alterarProduto({
                          'id': produto.id,
                          'nome': data.name,
                          'valor': data.valor,
                          'quantidade': data.quantidade,
                          'url': data.url,
                          'importante': data.importante,
                          'paraPresente': data.paraPresente,
                          'estado': produto.estado})
                        Toast.create('Produto alterado')
                      }
                    }
                  ]
                })
              }
            }
          ],
          dismiss: {
            label: 'Cancelar',
            icon: 'cancel',
            classes: 'text-primary',
            handler () {
              Toast.create('Ação cancelada...')
            }
          }
        })
      }
    }
  }
</script>
<style>
</style>

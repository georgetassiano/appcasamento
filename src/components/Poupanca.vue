<template>
  <q-collapsible icon="account_balance_wallet" :label="poupanca.nome">
    <div @click="showActionSheetWithIcons(poupanca, removerPoupanca, alterarPoupanca)">
      <div class="list bordered striped highlight item-delimiter">
        <div class="item item-link" >
          <div class="item-content">
            Valor: R$ {{poupanca.valor}}
          </div>
        </div>
      </div>
    </div>
  </q-collapsible>
</template>
<script>
  import { mapActions } from 'vuex'
  import { ActionSheet, Toast, Dialog } from 'quasar'
  export default{
    name: 'Poupanca',
    props: ['poupanca'],
    methods: {
      ...mapActions([
        'removerPoupanca',
        'alterarPoupanca'
      ]),
      showActionSheetWithIcons (poupanca, removerPoupanca, alterarPoupanca) {
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
                  message: 'Você realmente deseja apagar a poupança?',
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
                        removerPoupanca({'id': poupanca.id})
                        Toast.create('Poupança deletada')
                      }
                    }
                  ]
                })
              }
            },
            {
              label: 'Editar',
              icon: 'create',
              handler () {
                Dialog.create({
                  title: 'Alterar poupanca',
                  message: 'Edite as informações da poupança',
                  form: {
                    name: {
                      type: 'textbox',
                      label: 'nome',
                      model: poupanca.nome
                    },
                    valor: {
                      type: 'numeric',
                      label: 'valor R$',
                      model: poupanca.valor,
                      step: 0.01,
                      min: 0
                    }
                  },
                  buttons: [
                    'Cancelar',
                    {
                      label: 'Ok',
                      handler (data) {
                        alterarPoupanca({
                          'id': poupanca.id,
                          'nome': data.name,
                          'valor': data.valor
                        })
                        Toast.create('Poupanca alterada')
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

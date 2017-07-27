<template>
  <q-collapsible :icon="despesa.estado?'check_box':'indeterminate_check_box'" :label="despesa.nome" :style="{'text-decoration':marcado}">
    <div @click="showActionSheetWithIcons(despesa, mudarEstadoDespesa, removerDespesa, alterarDespesa)">
      <div class="list bordered striped highlight item-delimiter">
        <div class="item item-link">
          <div class="item-content">
            Valor: R$ {{despesa.valor}}
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
    name: 'Despesa',
    props: ['despesa'],
    computed: {
      marcado () {
        return this.despesa.estado ? 'line-through' : 'none'
      }
    },
    methods: {
      ...mapActions([
        'removerDespesa',
        'mudarEstadoDespesa',
        'alterarDespesa'
      ]),
      showActionSheetWithIcons (despesa, mudarEstadoDespesa, removerDespesa, alterarDespesa) {
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
                  message: 'Você realmente deseja apagar a despesa?',
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
                        removerDespesa({'id': despesa.id})
                        Toast.create('Despesa deletada')
                      }
                    }
                  ]
                })
              }
            },
            {
              label: despesa.estado ? 'Não paga' : 'Paga',
              icon: despesa.estado ? 'indeterminate_check_box' : 'check_box',
              handler () {
                mudarEstadoDespesa(despesa)
                if (despesa.estado) {
                  Toast.create('Despesa marcado como não paga')
                }
                else {
                  Toast.create('Despesa marcado como paga')
                }
              }
            },
            {
              label: 'Editar',
              icon: 'create',
              handler () {
                Dialog.create({
                  title: 'Alterar despesa',
                  message: 'Edite as informações da despesa',
                  form: {
                    name: {
                      type: 'textbox',
                      label: 'nome',
                      model: despesa.nome
                    },
                    valor: {
                      type: 'numeric',
                      label: 'valor R$',
                      model: despesa.valor,
                      step: 0.01,
                      min: 0
                    }
                  },
                  buttons: [
                    'Cancelar',
                    {
                      label: 'Ok',
                      handler (data) {
                        alterarDespesa({
                          'id': despesa.id,
                          'nome': data.name,
                          'valor': data.valor,
                          'estado': despesa.estado})
                        Toast.create('Despesa alterada')
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

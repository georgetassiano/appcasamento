<template>
  <div @click="showActionSheetWithIcons(tarefa, mudarEstadoTarefa, removerTarefa, alterarTarefa)">
    <i class="item-primary" v-if="tarefa.estado">check_box</i><i class="item-primary" v-else>indeterminate_check_box</i>
    <div class="item-content">
        <del v-if="tarefa.estado">{{tarefa.nome}}</del><span v-else>{{tarefa.nome}}</span>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import { ActionSheet, Toast, Dialog } from 'quasar'

  export default{
    name: 'Tarefa',
    props: ['tarefa'],
    methods: {
      ...mapActions([
        'removerTarefa',
        'mudarEstadoTarefa',
        'alterarTarefa'
      ]),
      showActionSheetWithIcons (tarefa, mudarEstadoTarefa, removerTarefa, alterarTarefa) {
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
                  message: 'Você realmente deseja apagar a tarefa?',
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
                        removerTarefa({'id': tarefa.id})
                        Toast.create('Tarefa deletada')
                      }
                    }
                  ]
                })
              }
            },
            {
              label: tarefa.estado ? 'Não Terminada' : 'Terminada',
              icon: tarefa.estado ? 'indeterminate_check_box' : 'check_box',
              handler () {
                mudarEstadoTarefa(tarefa)
                if (tarefa.estado) {
                  Toast.create('Tarefa marcada como não concluída')
                }
                else {
                  Toast.create('Tarefa marcada como concluída')
                }
              }
            },
            {
              label: 'Editar',
              icon: 'create',
              handler () {
                Dialog.create({
                  title: 'Alterar tarefa',
                  message: 'Edite as informações da tarefa',
                  form: {
                    name: {
                      type: 'textbox',
                      label: 'nome',
                      model: tarefa.nome
                    }
                  },
                  buttons: [
                    'Cancelar',
                    {
                      label: 'Ok',
                      handler (data) {
                        alterarTarefa({'id': tarefa.id, 'nome': data.name, 'estado': tarefa.estado})
                        Toast.create('Tarefa alterada')
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

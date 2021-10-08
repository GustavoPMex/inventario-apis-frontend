<template>
    <div class="modal fade" id="editarArticulo" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editarArticuloLabel">Actualizar</h5>
                </div>
            <div class="modal-body">
                <form @submit.prevent='editarArticulo'>
                    <InputsInventario :articulo="articulo"/>

                    <button 
                        type="submit" 
                        class="btn btn-success btn-form"
                        :disabled='btnIsDisabled'
                    >
                        Actualizar
                    </button>
                </form>
            </div>
            <div class="modal-footer text-center">
                <button 
                    type="button" 
                    class="btn btn-secondary mx-auto" 
                    data-dismiss="modal"
                    @click="cancelar"
                >
                    Cerrar
                </button>
            </div>
            </div>
        </div>
    </div>
</template>


<script>
import InputsInventario from '../inventario/InputsInventario.vue'
import {useStore} from 'vuex'
import { computed } from '@vue/reactivity'
import  {useRouter} from 'vue-router'

export default {
    components: {
        InputsInventario
    },
    setup() {

        const store = useStore()
        const router = useRouter()

        const articulo = computed(() =>{
            return store.getters.getArticulo
        })

        const btnIsDisabled = computed(() => {
            const articuloValid = articulo.value
            if(articuloValid.nombre && articuloValid.categorias &&
                articuloValid.proveedor && articuloValid.precio &&
                articuloValid.cantidad){
                return false
            }
            return true
        })

        const editarArticulo = () => {
            store.dispatch('formModificarArticulo', articulo.value)
            .then(() => {
                router.push({name: 'InventarioArticulos'})
            })
        }

        const cancelar = () => {
            store.dispatch('limpiarArticulo')
        }

        return {
            articulo, btnIsDisabled, 
            editarArticulo, cancelar
        }
    },
}
</script>

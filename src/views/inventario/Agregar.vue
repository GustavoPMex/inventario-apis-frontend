<template>
    <form @submit.prevent="nuevoArticulo">
        <FormInventario :articulo='articulo'/>
        <button 
            type="submit" 
            class="btn btn-success btn-form"
            :disabled='btnIsDisabled'
        >
            Crear
        </button>
    </form>
</template>


<script>
import FormInventario from '../../components/inventario/InputsInventario.vue'
import {useStore} from 'vuex'
import { computed, ref } from '@vue/reactivity'
import  {useRouter} from 'vue-router'

export default {
    components: {
        FormInventario
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

        const nuevoArticulo = () => {
            store.dispatch('formNuevoArticulo', articulo.value)
            .then(() => {
                router.push({name: 'InventarioArticulos'})
            })
        }


        return {
            articulo, btnIsDisabled, 
            nuevoArticulo
        }
    }
}
</script>


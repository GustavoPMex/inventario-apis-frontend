<template>
<form @submit.prevent="nuevoArticulo">

    <div class="form-group">
        <label class="label-form">Nombre</label>
        <input 
            class='form-control' 
            placeholder = 'Ingresa nombre' 
            v-model.trim="nombre"
        >
    </div>

    <div class="form-group">
        <label class="label-form">Categoria(s)</label>
        <select
            class="form-select"  
            multiple size="3"
            v-model="categorias"    
        >
            <option value="laptop">Laptop</option>
            <option value="impresora">Impresora</option>
        </select>
    </div>


    <div class="form-group">
        <label class="label-form">Proveedor</label>
        <select
            class="form-select"
            v-model="proveedor"
        >
            <option :value="''" disabled selected>Seleccione un proveedor</option>
            <option value="merida">Merida</option>
            <option value="microsoft">Microsot</option>
        </select>
    </div>

    <div class="form-group">
        <label class="label-form">Precio</label>
        <input 
            type="number" 
            class="form-control" 
            placeholder="Ingresa precio"
            min="0"
            v-model="precio"
        >
    </div>

    <div class="form-group">
        <label class="label-form">Cantidad</label>
        <input 
            type="number" 
            class="form-control" 
            placeholder="Ingresa cantidad"
            min="0"
            v-model="cantidad"
        >
    </div>

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
import {useStore} from 'vuex'
import { computed, ref } from '@vue/reactivity'
import  {useRouter} from 'vue-router'

export default {
    setup() {

        const store = useStore()
        const router = useRouter()

        const nombre = ref('')
        const categorias = ref([])
        const proveedor = ref('')
        const precio = ref(0)
        const cantidad = ref(0)

        const btnIsDisabled = computed(() => {
            if (nombre.value && categorias.value.length > 0 &&
                proveedor.value && precio.value > 0 && cantidad.value > 0){
                    return false
                }
            return true
        })

        const nuevoArticulo = () => {
            store.dispatch('formNuevoArticulo',{
                nombre: nombre.value,
                categorias: categorias.value,
                proveedor: proveedor.value,
                precio: precio.value,
                cantidad: cantidad.value
            })
            .then(() => {
                router.push({name: 'InventarioArticulos'})
            })
        }


        return {
            categorias, nombre, proveedor,
            precio, cantidad, btnIsDisabled, 
            nuevoArticulo
        }
    }
}
</script>

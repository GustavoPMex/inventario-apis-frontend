<template>

<div class="form-group">
    <label class="label-form">Nombre</label>
    <input 
        class='form-control' 
        placeholder = 'Ingresa nombre' 
        v-model.trim="articulo.nombre"
    >
</div>

<div class="form-group">
    <label class="label-form">Imagen</label>
    <input 
        class='form-control' 
        placeholder = 'Ingresa imagen' 
        v-model="articulo.imagen"
    >
</div>

<div class="form-group">
    <label class="label-form">Categoria
    </label>

    <a 
        v-if="disableBtnAdd"
        data-toggle="modal" 
        data-target="#categoriasModal" 
        data-whatever="@getbootstrap"
        data-backdrop="static" 
        data-keyboard="false"
        title="Agregar categoria"
        role="button"
    >
        <i class="fas fa-plus-square icon-add-cat">
        </i>
    </a>

    <select
        class="form-select"  
        v-model="articulo.categoria"    
    >
        <option :value="{}" disabled selected>Seleccione una categoria</option>
        <option 
            v-for="(categoria, index) in categorias"
            :key="index"
            :value="categoria"
        > {{categoria.nombre}}
        </option>
        
    </select>

</div>


<div class="form-group">
    <label class="label-form">Descripción</label>
    <textarea 
        class='form-control' 
        rows="3"
        placeholder = 'Ingresa Descripcion' 
        v-model="articulo.descripcion"
    >
    </textarea>
</div>

<div class="form-group">
    <label class="label-form">Proveedor</label>
    <select
        class="form-select"
        v-model="articulo.proveedor"
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
        v-model="articulo.precio"
    >
</div>

<div class="form-group">
    <label class="label-form">Cantidad</label>
    <input 
        type="number" 
        class="form-control" 
        placeholder="Ingresa cantidad"
        min="0"
        v-model="articulo.cantidad"
    >
</div>

    <ModalCategorias />
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
import ModalCategorias from './ModalCategorias.vue'
import {useRoute} from 'vue-router'

export default {
    setup(){
        
        const store = useStore()
        const route = useRoute()

        const disableBtnAdd = computed(()=>{
            return route.name != 'InventarioArticulos'
        })
        
        const categorias = computed(() =>{
            return store.getters.getCategorias
        })

        const cargarCategorias = () =>{
            store.dispatch('loadCategorias')
        }

        onMounted(async() => {
            await cargarCategorias()
        })


        return {
            categorias, disableBtnAdd,
            cargarCategorias
        }
    },
    components: {
        ModalCategorias
    },
    props: {
        articulo: Object
    },
}
</script>
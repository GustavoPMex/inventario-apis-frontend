<template>
    <div class="modal modalfade" id="articuloDetalles" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="articuloDetallesLabel">Detalles</h5>
                </div>
            <div class="modal-body">
                <div class="mb-4">
                    <img :src="`${articulo.imagen}`" 
                        class="imgDetailArticulo" 
                        alt="..."
                    >
                </div>

                <div class="mb-4">
                    <p class="detailArticuloTitle"><strong>Nombre</strong></p>
                    <p class="detailArticulo">{{articulo.nombre}}</p>
                </div>
                
                <div class="mb-4">
                    <p class="detailArticuloTitle"><strong>Categoria(s)</strong></p>
                    <p
                        v-for="(categoria, index) in articulo.categorias"
                        :key='index'
                        class="detailArticulo"
                    >{{categoria}}</p>
                </div>
                
                <div class="mb-4">
                    <p class="detailArticuloTitle"><strong>Descripcion</strong></p>
                    <p class="detailArticulo">{{articulo.descripcion}}</p>
                </div>

                <div class="mb-4">
                    <p class="detailArticuloTitle"><strong>Proveedor</strong></p>
                    <p class="detailArticulo">{{articulo.proveedor}}</p>
                </div>

                <div class="mb-4">
                    <p class="detailArticuloTitle"><strong>Precio</strong></p>
                    <p class="detailArticulo">${{articulo.precio}}</p>
                </div>

                <div class="mb-4">
                    <p class="detailArticuloTitle"><strong>Cantidad</strong></p>
                    <p class="detailArticulo">{{articulo.cantidad}}</p>
                </div>

            </div>
            <div class="modal-footer text-center">
                <button 
                    type="button" 
                    class="btn btn-secondary mx-auto" 
                    data-dismiss="modal"
                    @click="limpiarArticulo"
                >
                    Cerrar
                </button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore()

        const articulo = computed(() => {
            return store.getters.getArticulo
        })

        const limpiarArticulo = () =>{
            store.dispatch('limpiarArticulo')
        }

        return {articulo , limpiarArticulo}
    }
}
</script>
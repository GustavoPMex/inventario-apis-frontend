<template>
<div v-if="articulos" class="row w-100 mb-5 mx-auto table-responsive">
    <table class="table table-striped table-dark">
        <thead>
            <tr>
            <th scope="col">Articulo</th>
            <th scope="col">Categoria</th>
            <th scope="col">Proveedor</th>
            <th scope="col">Precio</th>
            <th scope="col">Stock</th>
            <th scope="col">Accion</th>
            </tr>
        </thead>
        <tbody 
            v-for="(articulo, index) in articulos"
            :key="index"
        >
            <tr>
            <td class="table-wordbreak">{{articulo.nombre}}</td>
            <td>
                <p v-for="(categoria, index) in articulo.categorias"
                :key="index">
                    {{categoria}}
                </p>
            </td>
            <td class="table-wordbreak">{{articulo.proveedor}}</td> 
            <td>${{articulo.precio}}</td>
            <td>{{articulo.cantidad}}</td>
            <td>
                <a  
                    data-toggle="modal" 
                    data-target="#editarArticulo" 
                    data-whatever="@getbootstrap"
                    data-backdrop="static" data-keyboard="false"
                    @click="configurarArticulo(articulo)"
                >
                    <i class="fas fa-pen-square icon-table-up"></i>
                </a>
                <ModalInventario />
                <a  href="#"><i class="fas fa-trash-alt icon-table-del"></i></a>
                <a  href="#"><i class="fas fa-shopping-cart icon-table-cart"></i></a>
            </td>
            </tr>
        </tbody>
    </table>
</div>

<p v-else class="p-vacia">Sin articulos</p>

</template>

<script>
import ModalInventario from '../../components/inventario/ModalInventario.vue'
import  {computed, onMounted} from 'vue'
import { useStore } from 'vuex'

export default {
    components: {
        ModalInventario
    },
    setup(){

        const store = useStore()
        
        // Obtenemos los articulos almacenados actualmente en el state de vuex
        const articulos = computed(() => {
            return store.getters.getArticulos
            
        })

        // Configuramos el articulo actual para usarlo en el modal
        const configurarArticulo = (articulo) => {
            // Copia del objeto para evitar que se modifique en la lista
            const articuloEstablecido = JSON.parse(JSON.stringify(articulo))
            store.dispatch('configArticulo', articuloEstablecido)
        }

        // Cargamos el inventario que tenemos almacenado
        onMounted(async() => {
            await store.dispatch('loadInventario')
        })

        return {articulos, configurarArticulo}
    },

}
</script>


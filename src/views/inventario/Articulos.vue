<template>
<div v-if="articulos.length > 0" class="row w-100 mb-5 mx-auto table-responsive">
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
            <td scope="row">{{articulo.nombre}}</td>
            <td>
                Impresora
            </td>
            <td>{{articulo.proveedor}}</td>
            <td>${{articulo.precio}}</td>
            <td>{{articulo.cantidad}}</td>
            <td>
                <a  href="#"><i class="fas fa-pen-square icon-table-up"></i></a>
                <a  href="#"><i class="fas fa-trash-alt icon-table-del"></i></a>
                <a  href="#"><i class="fas fa-shopping-cart icon-table-cart"></i></a>
            </td>
            </tr>
        </tbody>
    </table>
</div>

<p v-else class="p-vacia">Sin categoria</p>

</template>

<script>
import  {computed} from 'vue'
import { useStore } from 'vuex'

export default {
    setup(){

        const store = useStore()
        
        const articulos = computed(() => {
            return store.getters.getArticulos
        })

        return {articulos}
    },

}
</script>


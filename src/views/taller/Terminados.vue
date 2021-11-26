<template>

<div v-if="true" class="row w-100 mb-5 mx-auto table-responsive table-overflow">
    <table class="table table-striped table-dark ">
        <thead>
            <tr>
            <th scope="col">Equipo</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Cliente</th>
            <th scope="col">Técnico</th>
            <th scope="col">Estado</th>
            <th scope="col">Accion</th>
            </tr>
        </thead>
        <tbody 
        >
            <tr>
            <td class="table-wordbreak cuadro-tab-size"> OoO </td>
            <td class="table-wordbreak cuadro-tab-size"> OoO </td>
            <td class="table-wordbreak"> OoO </td> 
            <td class="table-wordbreak"> OoO </td>
            <td class="table-wordbreak cuadro-tab-size"> Terminado </td>
            <td>
                <a 
                    role="button"
                    @click="eliminar"
                >
                    <i class="fas fa-trash-alt icon-table-del"></i>
                </a>
            </td>
            </tr>
        </tbody>
    </table>
    
</div>

<div v-else class="row w-100 div-vacio">
    <p class="p-vacia">Sin Proveedores</p>
</div>

</template>

<script>
import swal from 'sweetalert'
import { useStore } from 'vuex'

export default {
    setup(){

        const eliminar = () =>{
            swal({
                title: '¿Eliminar?',
                icon: 'warning',
                buttons: true,
                dangerMode: true
            })
        }

        return {
            eliminar
        }
    }
}
</script>


<template>
<div
    v-if="serviciosAlmacenados.length"
    class="row w-100 mx-auto mb-5 justify-content-center">
    <div class="col-12 col-lg-3  mt-4 mt-lg-2 text-center">
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Técnico
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <div 
                            v-for="(tecnico, index) in tecnicos"
                            :key="index"
                            class="form-check"
                        >
                            <input 
                                class="form-check-input"
                                type="checkbox" 
                                :value="tecnico.id"
                                :id="`checkTecnico${tecnico.id}`"
                                v-model="filtroTecnico"
                                @change="configurarFiltroTecnico"
                            >

                            <label
                                class="form-check-label" 
                                :for="`checkTecnico${tecnico.id}`">
                                {{tecnico.usuario}}
                            </label>
                        </div>
                </div>
            </div>
    </div>
</div>

<div v-if="pendientes.length" class="row w-100 mb-5 mx-auto table-responsive table-overflow">
    <table class="table table-striped table-dark ">
        <thead>
            <tr>
            <th scope="col">Cliente</th>
            <th scope="col">Técnico</th>
            <th scope="col">Servicio</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Estado</th>
            <th scope="col">Accion</th>
            </tr>
        </thead>
        <tbody 
        >
            <tr
                v-for="(servicio, index) in pendientes"
                :key="index"
            >
                <td class="table-wordbreak"> {{servicio.cliente.nombre}} </td> 
                <td class="table-wordbreak"> {{servicio.tecnico.usuario}} </td>
                <td class="table-wordbreak cuadro-tab-size"> {{servicio.servicio}} </td>
                <td class="table-wordbreak cuadro-tab-size"> {{servicio.descripcion}} </td>
                <td class="table-wordbreak cuadro-tab-size"> Pendiente </td>
                <td>
                    <a  
                        data-toggle="modal" 
                        data-target="#editarPendiente" 
                        data-whatever="@getbootstrap"
                        data-backdrop="static" data-keyboard="false"
                        role="button"
                        @click="configurarServicio(servicio)"
                    >
                        <i class="fas fa-pen-square icon-table-up"></i>
                    </a>
                    <ModalTaller />
                </td>
            </tr>
        </tbody>
    </table>
    
</div>

<div v-else class="row w-100 div-vacio">
    <p class="p-vacia">Sin pendientes</p>
</div>

</template>

<script>
import { computed, ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import ModalTaller from '../../components/taller/ModalTaller.vue'
import { onMounted } from '@vue/runtime-core'

export default {
    components: {
        ModalTaller
    }, 
    setup() {
        
        const store = useStore()

        const filtroTecnico = ref([])

        const serviciosAlmacenados = computed(() =>{
            return store.getters.getTallerServiciosFiltrados
        })

        const pendientes = computed(() =>{
            const listaPendientes = serviciosAlmacenados.value.filter(item => item.estado === 'pendiente')
            return listaPendientes
        })

        const tecnicos = computed(() =>{
            return store.getters.getPersonal
        })

        const configurarFiltroTecnico = () =>{
            store.dispatch('busquedaServicioTaller', filtroTecnico.value)
        }

        const configurarServicio = (servicio) =>{
            const servicioEstablecido = JSON.parse(JSON.stringify(servicio))
            store.dispatch('establecerServicioTemporal', servicioEstablecido)
        }

        onMounted(() =>{
            configurarFiltroTecnico('')
        })

        return {
            filtroTecnico,
            serviciosAlmacenados, tecnicos, pendientes,
            configurarServicio, configurarFiltroTecnico
        }
    }

}
</script>


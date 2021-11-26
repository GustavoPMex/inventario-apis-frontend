<template>
<div class="row w-100 mx-auto mb-5 justify-content-center">
    <div class="col-12 col-lg-3  mt-4 mt-lg-2 text-center">
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Categorias
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <div 
                            class="form-check"
                        >
                            <input 
                                class="form-check-input"
                                type="checkbox" 
                            >

                            <label class="form-check-label">
                            </label>
                        </div>
                </div>
            </div>
    </div>
</div>

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
            <td class="table-wordbreak cuadro-tab-size"> xxx </td>
            <td class="table-wordbreak cuadro-tab-size"> xxx </td>
            <td class="table-wordbreak"> xxx </td> 
            <td class="table-wordbreak"> xxx </td>
            <td class="table-wordbreak cuadro-tab-size"> Pendiente </td>
            <td>
                <a  
                    data-toggle="modal" 
                    data-target="#editarPendiente" 
                    data-whatever="@getbootstrap"
                    data-backdrop="static" data-keyboard="false"
                    role="button"
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
    <p class="p-vacia">Sin Proveedores</p>
</div>

</template>

<script>
import ModalTaller from '../../components/taller/ModalTaller.vue'

export default {
    components: {
        ModalTaller
    }
}
</script>


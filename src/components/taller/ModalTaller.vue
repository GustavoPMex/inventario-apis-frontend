<template>
    <div class="modal modalfade" id="editarPendiente" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editarArticuloLabel">Actualizar</h5>
                </div>
            <div class="modal-body">
                <form >
                    
                    <InputsTaller />

                    <button 
                        type="submit" 
                        class="btn btn-success btn-form"
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
                >
                    Cerrar
                </button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import InputsTaller from '../../components/taller/InputsTaller.vue'

export default {
    components: {
        InputsTaller
    }
}
</script>
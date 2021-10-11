<template>
    <div class="modal fade" id="modalRedes" tabindex="-1" aria-labelledby="modalRedesLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalRedesLabel">Redes sociales</h5>
            </div>
            <div class="modal-body">
                <form @submit.prevent='actualizarRedes'>
                    <div class="form-group">
                        <input 
                            type="text" 
                            class="form-control" 
                            id="recipient-name"
                            placeholder="Facebook"
                            v-model="redes.facebook"
                        >
                    </div>
                    <div class="form-group">
                        <input 
                            type="text" 
                            class="form-control" 
                            id="recipient-name"
                            placeholder="Twitter"
                            v-model="redes.twitter"
                        >
                    </div>
                    <div class="form-group">
                        <input 
                            type="text" 
                            class="form-control" 
                            id="recipient-name"
                            placeholder="Instagram"
                            v-model="redes.instagram"
                        >
                    </div>
                    <button
                        class="btn btn-success"
                    >
                        Guardar
                    </button>
                </form>

            </div>
            <div class="modal-footer">
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
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
import Swal from 'sweetalert2'

export default {
    setup(){

        const store = useStore()

        const redes = computed(() => {
            return store.getters.getRedesActuales
        })

        const actualizarRedes = () => {
            
            function validarRed(red) {
                const keyRed = Object.keys(red)[0]

                if(keyRed === 'keyFace'){
                    return  red.keyFace.includes('https://www.facebook.com/') ||
                            red.keyFace === '' ? true : false
                            
                } else if (keyRed === 'keyTwi'){
                    return  red.keyTwi.includes('https://www.facebook.com/') ||
                            red.keyTwi === '' ? true : false

                } else if (keyRed === 'keyInst'){
                    return  red.keyInst.includes('https://www.facebook.com/') ||
                            red.keyInst === '' ? true : false
                }
            }
            
            const newRedes = redes.value
            const facebook = validarRed({keyFace: newRedes.facebook})
            const twitter = validarRed({keyTwi: newRedes.twitter})
            const instagram = validarRed({keyInst: newRedes.instagram})

            if(facebook && twitter && instagram){
                store.dispatch('formRedesSociales', redes.value)
                return
            } 
            Swal.fire(
                'Error',
                'Introduce un link válido',
                'error'
            )
        }

        return {redes, actualizarRedes}
    }
}
</script>
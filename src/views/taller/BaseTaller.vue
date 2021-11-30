<template>
    <section class="resume-section">
        <div class="resume-section-content">
            <h1 class="mb-5 h1-resume-section">
                Taller
            </h1>
            <SubMenuProveedor />
            <!-- Routes -->
            <router-view></router-view>
        </div>
    </section>

    <hr class="m-0" />
</template>

<script>
import { onBeforeMount, onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
import SubMenuProveedor from '../../components/taller/SubMenuProveedor.vue'

export default { 
    components:{
        SubMenuProveedor
    },
    setup() {
        const store = useStore()

        const cargarPendientes = () => {
            store.dispatch('establecerTallerServicios')
        }

        onBeforeMount(() =>{
            cargarPendientes()
        })
    }, 
    created(){
        window.scrollTo(0, 0);
    }
}
</script>

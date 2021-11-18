<template>
    <section class="resume-section">
        <div class="resume-section-content">
            
            <h1 class="mb-5 h1-resume-section">
                Proveedores
            </h1>

            <SubMenuProveedores />
            <!-- Routes -->
            <router-view></router-view>
            
        </div>
    </section>
    <hr class="m-0" />
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
import SubMenuProveedores from '../../components/proveedores/SubMenuProveedores.vue'
export default {
    components: {
        SubMenuProveedores,
    },
    created(){
        window.scrollTo(0, 0);
    }
}
</script>

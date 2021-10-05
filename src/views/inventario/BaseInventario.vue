<template>
    <section class="resume-section">
        <div class="resume-section-content">
            
            <h1 class="mb-5 h1-resume-section">
                Inventario
            </h1>

            <SubMenuInventario />

            <!-- Routes -->
            <router-view></router-view>
            
        </div>
    </section>
    <hr class="m-0" />
</template>

<script>
import SubMenuInventario from '../../components/inventario/SubMenuInventario.vue'

export default {
    components: {
        SubMenuInventario
    }

}
</script>

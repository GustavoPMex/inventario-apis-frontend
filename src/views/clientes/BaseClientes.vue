<template>
    <section class="resume-section">
        <div class="resume-section-content">
            
            <h1 class="mb-5 h1-resume-section">
                Clientes
            </h1>

            <SubMenuClientes />
            <!-- Routes -->
            <router-view></router-view>
            
        </div>
    </section>
    <hr class="m-0" />
</template>

<script>
import SubMenuClientes from '../../components/clientes/SubMenuClientes.vue'

export default {
    components: {
        SubMenuClientes
    }
}
</script>

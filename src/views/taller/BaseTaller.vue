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
import SubMenuProveedor from '../../components/taller/SubMenuProveedor.vue'

export default { 
    components:{
        SubMenuProveedor
    }
}
</script>

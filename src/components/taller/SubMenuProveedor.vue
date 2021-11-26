<template>
<!-- submenu-activate -->
    <div class="row w-100 mb-5 mx-auto justify-content-center">
        <router-link :to="{name: 'TallerPendientes'}" class="col-12 col-md-3 mx-1 mb-1  list-submenu ">
            Pendientes
        </router-link>

        <router-link :to="{name: 'TallerTerminados'}" class="col-12 col-md-3 mx-1 mb-1  list-submenu ">
            Terminados
        </router-link>

        <router-link :to="{name: 'TallerAgregar'}" class="col-12 col-md-3 mx-1 mb-1  list-submenu ">
            Agregar
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>


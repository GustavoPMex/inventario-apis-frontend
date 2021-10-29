<template>
<!-- submenu-activate -->
    <div class="row w-100 mb-5 mx-auto justify-content-center">
        <router-link :to="{name: 'InventarioArticulos'}" class="col-12 col-md-3 mx-1 mb-1  list-submenu ">Articulos
        </router-link>

        <router-link :to="{name : 'InventarioAgregar'}" class="col-12 col-md-3 mx-1 mb-1 list-submenu">
            Agregar
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>


<template>
    <section class="resume-section">
        <div class="resume-section-content">
            <h1 class="mb-5 h1-resume-section">
                Inventario
            </h1>

            <SubMenuInventario />

            <form method="post">
                <div class="form-group">
                    <label class="label-form">Categoria(s)</label>
                    <select class="form-control"></select>
                </div>

                <div class="form-group">
                    <label class="label-form">Nombre</label>
                    <input class='form-control' placeholder = 'Ingresa nombre' type="text">
                </div>

                <div class="form-group">
                    <label class="label-form">Proveedor</label>
                    <select class="form-control"></select>
                </div>

                <div class="form-group">
                    <label class="label-form">Precio</label>
                    <input type="number" class="form-control" placeholder="Ingresa precio">
                </div>

                <div class="form-group">
                    <label class="label-form">Cantidad</label>
                    <input type="number" class="form-control" placeholder="Ingresa cantidad">
                </div>

                <button type="submit" class="btn btn-success btn-form">Crear</button>
            </form>
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

<template>
    <section class="resume-section">
        <div class="resume-section-content">
            
            <h1 class="mb-5 h1-resume-section">
                Inventario
            </h1>

            <SubMenuInventario />
            
            <div class="row w-100 mb-5 mx-auto table-responsive">
                <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Articulo</th>
                            <th scope="col">Precio unitario</th>
                            <th scope="col">Precio total</th>
                            <th scope="col">Vendido</th>
                            <th scope="col">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">Impresora ACER</td>
                            <td> $1200 </td>
                            <td> $2400 </td>
                            <td> 2 </td>
                            <td>
                                <a  href="#"><i class="fas fa-trash-alt icon-table-del"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

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


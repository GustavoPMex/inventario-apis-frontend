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
                        <th scope="col">Categoria</th>
                        <th scope="col">Proveedor</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td scope="row">Impresora ACER</td>
                        <td>
                            Impresora
                        </td>
                        <td>Acer</td>
                        <td>$1200</td>
                        <td>2</td>
                        <td>
                            <button  @click="example" class="btn"><i class="fas fa-pen-square icon-table-up"></i></button>
                            <a  href="#"><i class="fas fa-trash-alt icon-table-del"></i></a>
                            <a  href="#"><i class="fas fa-shopping-cart icon-table-cart"></i></a>
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
import FormInventario from '../../components/inventario/FormInventario.vue'

export default {
    setup(){
        const example = () => {
            
        }

        return {example}
    },
    components: {
        SubMenuInventario
    }

}
</script>


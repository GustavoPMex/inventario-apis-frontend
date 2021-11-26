<template>
    <form action="">
        <InputsInventario />
        <button 
            type="submit" 
            class="btn btn-success btn-form"
        >
            Crear
        </button>
    </form>
</template>

<script>
import InputsInventario from '../../components/taller/InputsTaller.vue'

export default {
    components: {
        InputsInventario
    }
}
</script>

<style>

</style>
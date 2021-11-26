<template>
    <div class="form-group">
        <label class="label-form">Equipo</label>
        <input 
            class='form-control' 
            placeholder = 'Ingresa Equipo' 
        >
    </div>

    <div class="form-group">
        <label class="label-form">Descripción</label>
        <textarea 
            class='form-control' 
            rows="3"
            placeholder = 'Ingresa Descripción' 
        ></textarea>
    </div>

    <div class="form-group">
        <label class="label-form">Cliente</label>

        <select
            class="form-select"
        >
            <option :value="''" disabled selected>Seleccione un cliente</option>
        </select>
    </div>

    <div class="form-group">
        <label class="label-form">Técnico</label>

        <select
            class="form-select"
        >
            <option :value="''" disabled selected>Seleccione un técnico</option>
        </select>
    </div>

    <div class="form-group">
        <label class="label-form">Estado</label>

        <select
            class="form-select"
        >
            <option :value="''" disabled selected>Seleccione un estado</option>
        </select>
    </div>

</template>

<script>
export default {

}
</script>
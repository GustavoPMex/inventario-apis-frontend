<template>

<div class="form-group">
    <label class="label-form">Id</label>
    <input 
        type="number"
        class='form-control' 
        placeholder = 'Ingresa Id' 
        min="0"
        v-model="articulo.id"
    >
</div>

<div class="form-group">
    <label class="label-form">Nombre</label>
    <input 
        class='form-control' 
        placeholder = 'Ingresa nombre' 
        v-model.trim="articulo.nombre"
    >
</div>

<div class="form-group">
    <label class="label-form">Imagen</label>
    <input 
        class='form-control' 
        placeholder = 'Ingresa imagen' 
        v-model="articulo.imagen"
    >
</div>

<div class="form-group">
    <label class="label-form">Categoria(s)</label>
    <select
        class="form-select"  
        multiple size="3"
        v-model="articulo.categorias"    
    >
        <option value="laptop">Laptop</option>
        <option value="almacenamiento">Almacenamiento</option>
    </select>
</div>


<div class="form-group">
    <label class="label-form">Descripción</label>
    <textarea 
        class='form-control' 
        rows="3"
        placeholder = 'Ingresa Descripcion' 
        v-model="articulo.descripcion"
    >
    </textarea>
</div>

<div class="form-group">
    <label class="label-form">Proveedor</label>
    <select
        class="form-select"
        v-model="articulo.proveedor"
    >
        <option :value="''" disabled selected>Seleccione un proveedor</option>
        <option value="merida">Merida</option>
        <option value="microsoft">Microsot</option>
    </select>
</div>

<div class="form-group">
    <label class="label-form">Precio</label>
    <input 
        type="number" 
        class="form-control" 
        placeholder="Ingresa precio"
        min="0"
        v-model="articulo.precio"
    >
</div>

<div class="form-group">
    <label class="label-form">Cantidad</label>
    <input 
        type="number" 
        class="form-control" 
        placeholder="Ingresa cantidad"
        min="0"
        v-model="articulo.cantidad"
    >
</div>


</template>


<script>
export default {
    props: {
        articulo: Object
    }
}
</script>